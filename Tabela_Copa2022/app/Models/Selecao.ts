import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Tecnico from './Tecnico'
import jogador from './Jogador'
import FaseGrupo from './FaseGrupo'

export default class Selecao extends BaseModel {
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

  @hasOne(() => Tecnico)
 public tecnicos: HasOne<typeof Tecnico>

 @hasMany(() => jogador)
 public jogadors: HasMany<typeof jogador>

 @belongsTo(() => FaseGrupo)
 public faseGrupos: BelongsTo<typeof FaseGrupo>
}
