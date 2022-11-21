import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Jogadore from './Jogadore'

export default class Posicionamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Jogadore, { pivotTable: 'posicao_jogadores'})
  public jogadores: ManyToMany <typeof Jogadore>
}
