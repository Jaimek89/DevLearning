const storage = {

  setToken (key, value) {
    // Set the information and save it in sessionStorage
    return window.sessionStorage.setItem(key, value)
  },

  getToken () {
    // Get the information saved in sessionStorage
    return window.sessionStorage.getItem('token')
  },

  removeToken () {
    // Remove the token which is saved in sessionStorage
    return window.sessionStorage.removeItem('token')
  }

}

export default storage
