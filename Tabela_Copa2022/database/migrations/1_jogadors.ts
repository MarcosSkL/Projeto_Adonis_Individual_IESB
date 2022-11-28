import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'jogadors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 50).notNullable()
      table.integer('camisa', 2)
      table.date("data_nascimento");
      table.string('nacionalidade', 50).notNullable()
      table.string('altura', 10)
      table.integer('posicaos_id')
              .unsigned()
              .references('id')
              .inTable('posicaos')
              .notNullable()
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
      table.integer('selecaos_id')
              .unsigned()
              .references('id')
              .inTable('selecaos')
              .notNullable()
              .onDelete('CASCADE')
              .onUpdate('CASCADE')


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
