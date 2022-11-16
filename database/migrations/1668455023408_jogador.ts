import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'jogador'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 100).notNullable()
      table.integer('camisa', 2).notNullable()
      table.integer('idade', 2).notNullable()
      table.string('nacionalidade', 50).notNullable()
      table.integer('selecao_id').unsigned().references('id').inTable('selecao')
      table.integer('posicao_id').unsigned().references('id').inTable('posicao')


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