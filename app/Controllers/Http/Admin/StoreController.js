'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Store = use('App/Models/Store')

class StoreController {
  async index({ pagination, response }) {
    const stores = await Store.all()
    return response.send(stores)
  }

  async store({ request, response }) {
    const data = request.only(['description, address'])
    await Store.create(data)
    return response
      .status(200)
      .send({ message: 'Estabelecimento salvo com sucesso' })
  }

  async show({ params }) {
    const store = await Store.findOrFail(params.id)
    return store
  }

  async update({ params, request, response }) {
    const data = request.all()
    const store = await Store.findOrFail(params.id)
    store.merge(data)
    await store.save()
    return response
      .status(200)
      .send({ message: 'Estabelecimento atualizado com sucesso' })
  }

  async destroy({ params, response }) {
    const store = await Store.findOrFail(params.id)
    await store.delete()
    return response
      .status(200)
      .send({ message: 'Estabelecimento deletado com sucesso' })
  }
}

module.exports = StoreController
