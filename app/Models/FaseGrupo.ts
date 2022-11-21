import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Time from './Time'




export default class FaseGrupo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string
 
  @column()
  public timesId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Time)
  public times: HasMany <typeof Time>


}
