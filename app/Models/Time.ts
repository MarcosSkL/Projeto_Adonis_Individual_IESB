import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import FaseGrupo from './FaseGrupo'
import Tecnico from './Tecnico'
import Jogadore from './Jogadore'



export default class Time extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public continente: string

  @column()
  public tecnicosId: number

  @column()
  public faseGruposId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => FaseGrupo)
  public faseGrupos: BelongsTo <typeof FaseGrupo>

  @belongsTo(() => Tecnico)
  public tecnicos: BelongsTo <typeof Tecnico>

  @hasMany(() => Jogadore)
  public jogadores: HasMany <typeof Jogadore>
}
