const storage = {

  setToken (value) {
    // Set the information saved in sessionStorage
    return window.sessionStorage.setItem('token', value)
  },

  getToken () {
    // Get the information saved in sessionStorage
    return window.sessionStorage.getItem('token')
  },

  removeToken () {
    // Borramos el token que teniamos almacenado en sessionStorage
    return window.sessionStorage.removeItem('token')
  }

}

export default storage
