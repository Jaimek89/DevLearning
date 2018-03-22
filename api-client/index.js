const rp = require("request-promise")

const api_client = {
  _baseUrl() {
    with (this) {
      return `${protocol}://${host}:${port}/api`
      // return 'http://localhost:5000/api'
    }
  },

  _call(method, path, body, token) {
    const options = {
      method,
      uri: `${this._baseUrl()}/${path}`,
      json: true
    }

    if (body) options.body = body

    if (token) options.headers = {authorization: `Bearer:${token}`}

    return rp(options)
  },

    /************************************LOGIN***********************************/

  //It will log in a user by username and password
  login(username, password) {
    return this._call("post", "login", { username, password })
  },

    /************************************USERS***********************************/

  //It will create a user
  createUser(name, surname, email, username, password) {
    return this._call('post', 'user', { name, surname, email, username, password })
  },

  //It will list all users
  listUsers(token) {
    return this._call('get', 'users', undefined, token)
  },

  //It will list one user
  retrieveUser(token, id) {
    return this._call('get', `user/${id}`, undefined, token)
  },

  //It will update a user, the user will can change the email introducing correctly the username and password
  updateUser(token, id, email, newEmail, username, password) {
    return this._call('put', `user/${id}`, { email, newEmail, username, password }, token)
  },

  //It will delete a user by username and password
  deleteUser(token, id, username, password) {
    return this._call('delete', `user/${id}`, { username, password }, token)
  },

  /************************************COURSES***********************************/

  //It will list all courses from the selected language (the filter is made by the server)
  list(language) {
    return this._call("get", `courses/${language}`)
  },

  //It will create a course
  createCourse(token, title, language, price, teacher) {
    return this._call('post', 'course', { title, language, price, teacher }, token)
  },

  //It will list one course by id
  retrieveCourse(id) {
    return this._call('get', `course/${id}`)
  },

  //It will delete a course by id
  removeCourse(token, id, username, password) {
    return this._call('delete', `course/${id}`, { username, password }, token)
  }
}

module.exports = api_client
