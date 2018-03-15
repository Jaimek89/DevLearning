const rp = require('request-promise')

const api = {
    _baseUrl() {
        with (this) {
            return `${protocol}://${host}:${port}/api`
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

    list() {
        return this._call('get', 'courses', undefined)
    }
}

module.exports = api