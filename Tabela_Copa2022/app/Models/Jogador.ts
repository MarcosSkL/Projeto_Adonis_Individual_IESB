import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Posicao from './Posicao'
import Selecao from './Selecao'

export default class jogador extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public camisa: number

  @column()
  public dataNascimento: Date

  @column()
  public nacionalidade: string

  @column()
  public altura: string

  @column()
  public posicaoId: number

  @column()
  public selecaosId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

 @hasMany(() => Posicao)
 public posicao: HasMany<typeof Posicao>

 @belongsTo(() => Selecao)
 public selecao: BelongsTo<typeof Selecao>
}
