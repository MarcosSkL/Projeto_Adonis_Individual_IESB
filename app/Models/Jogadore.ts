import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Posicionamento from './Posicionamento'
import Time from './Time'


export default class Jogadore extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public camisa: number 

  @column()
  public idade: number

  @column()
  public nacionalidade: string

  @column()
  public timesId: number

  @column()
  public posicionamentosId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Posicionamento, { pivotTable: 'posicao_jogadores'})
  public posicionamentos: ManyToMany <typeof Posicionamento>

  @belongsTo(() => Time)
  public times: BelongsTo <typeof Time>

}
