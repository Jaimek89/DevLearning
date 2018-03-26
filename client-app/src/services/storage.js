const sessionTokenKey = 'token'

const storage = {

  setToken (value) {
    // Set the information and save it in sessionStorage
    return window.localStorage.setItem(sessionTokenKey, value)
  },

  getToken () {
    // Get the information saved in sessionStorage
    return window.localStorage.getItem(sessionTokenKey)
  },

  removeToken () {
    // Remove the token which is saved in sessionStorage
    return window.localStorage.removeItem(sessionTokenKey)
  }

}

export default storage
