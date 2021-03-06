'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StoreSchema extends Schema {
  up() {
    this.create('stores', table => {
      table.increments()
      table.string('description')
      table.string('address')
      table.timestamps()
    })
  }

  down() {
    this.drop('stores')
  }
}

module.exports = StoreSchema
