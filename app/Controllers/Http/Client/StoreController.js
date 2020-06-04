'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Store = use('App/Models/Store')

class StoreController {
  async index({ response }) {
    const stores = await Store.all()
    return response.send(stores)
  }

  async show({ params }) {
    const store = await Store.findOrFail(params.id)
    return response.send(stores)
  }
}

module.exports = StoreController
