const rp = require("request-promise");

const api = {
  _baseUrl() {
    with (this) {
      return `${protocol}://${host}:${port}/api`;
      // return 'http://localhost:5000/api'
    }
  },

  _call(method, path, body) {
    const options = {
      method,
      uri: `${this._baseUrl()}/${path}`,
      json: true
    };

    return rp(options);
  },

  /************************************COURSES***********************************/

  // List courses depending of the language (the filter is made by the server)
  list(languageId) {
    const path = `courses/${languageId}`;
    return this._call("get", path, undefined);
  },

  // create a course, you will need
  createCourse(languageId) {
  },

  // delete a course, you will need
  removeCourse(languageId) {

  },

  /************************************USERS***********************************/

  // login a user, using a username and a password
  login(username, password) {
    return this._call("post", "login", { username, password });
  },

  // create a user, you will need: name, surname, email, username and password
  create(name, surname, email, username, password) {
    return this._call("post", "user", {
      name,
      surname,
      email,
      username,
      password
    });
  },

  // delete a user, you will need: username, password
  remove(token, id, username, password) {
    return this._call("delete", `user/${id}`, { username, password }, token);
  }
};

module.exports = api;
