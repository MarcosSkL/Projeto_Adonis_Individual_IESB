import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Posicionamento from './Posicionamento'
import Jogadore from './Jogadore'

export default class PosicaoJogadore extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public posicionamentosId: number

  @column()
  public jogadoresId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Posicionamento)
  public posicionamentos: BelongsTo <typeof Posicionamento>   

  @belongsTo(() => Jogadore)
  public jogadores: BelongsTo <typeof Jogadore>

}
