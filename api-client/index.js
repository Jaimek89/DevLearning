const rp = require('request-promise')

const api = {
    _baseUrl() {
        with (this) {
            return `${protocol}://${host}:${port}/api`
            // return 'http://localhost:5000/api'
        }
    },

    _call(method, path, body) {
        const options = {
            method,
            uri: `${this._baseUrl()}/${path}`,
            json: true
        }

        return rp(options)
    },

    list(languageId) {
        const path = `courses/${languageId}`
        return this._call('get', path, undefined)
    }
}

module.exports = api