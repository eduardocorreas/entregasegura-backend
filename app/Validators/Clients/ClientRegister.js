'use strict'

class ClientRegister {
  get rules() {
    return {
      name: 'required',
      email: 'required|email|unique:users,email',
      password: 'required'
    }
  }
}

module.exports = ClientRegister
