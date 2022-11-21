import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PosicaoJogadore from 'App/Models/PosicaoJogadore'

export default class extends BaseSeeder {
  public async run () {
    await PosicaoJogadore.createMany([
      {jogadoresId: 1, posicionamentosId: 1 },
    ])
  }
}