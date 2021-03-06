import storage from './storage'

import apiClient from 'api-client'
apiClient.port = ''
apiClient.host = 'devlearning.herokuapp.com'
apiClient.protocol = 'https'

const api = {
  /** **********************************LOGIN***********************************/

  // It will log in a user by username and password
  login (username, password) {
    return apiClient.login(username, password)
  },

  /** **********************************COURSES***********************************/

  // It will create a user
  createUser (name, surname, email, username, password) {
    return apiClient.createUser(name, surname, email, username, password)
  },

  // It will list all users
  listUsers () {
    return apiClient.listUsers(storage.getToken())
  },

  // It will list one user
  retrieveUser () {
    return apiClient.retrieveUser(storage.getToken())
  },

  // It will update a user, the user will can change the email introducing correctly the username and password
  updateUser (id, email, newEmail, username, password) {
    return apiClient.updateUser(
      storage.getToken(),
      id,
      email,
      newEmail,
      username,
      password
    )
  },

  // It will delete a user by username and password
  deleteUser (id, username, password) {
    return apiClient.deleteUser(storage.getToken(), id, username, password)
  },

  /** **********************************COURSES***********************************/

  // It will list all courses from the selected language (the filter is made by the server)
  list (language) {
    return apiClient.list(language)
  },

  // It will list all courses from the selected teacher (the filter is made by the server)
  listCoursesByTeacher (id) {
    return apiClient.listCoursesByTeacher(id)
  },

  // It will create a course
  createCourse (title, language, price, teacher) {
    return apiClient.createCourse(
      storage.getToken(),
      title,
      language,
      price,
      teacher
    )
  },

  // It will list one course by id
  retrieveCourse (id) {
    return apiClient.retrieveCourse(id)
  },

  // It will delete a course by id
  removeCourse (id, idOfCourse) {
    return apiClient.removeCourse(storage.getToken(), id, idOfCourse)
  }
}

export default api
