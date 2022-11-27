import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'selecaos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome', 20).notNullable()
      table.string('continente', 20)
      table.integer('tecnicos_id').unsigned()
              .references('id')
              .inTable('tecnicos')
              .notNullable()
              .onUpdate('CASCADE')
              .onDelete('CASCADE')
      table.integer('fase_grupos_id').unsigned()
              .references('id')
              .inTable('fase_grupos')
              .notNullable()
              .onUpdate('CASCADE')
              .onDelete('CASCADE')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
