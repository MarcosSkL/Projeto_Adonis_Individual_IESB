import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Posicao from 'App/Models/Posicao'

export default class extends BaseSeeder {
  public async run () {
   await Posicao.createMany([
    {
      id: 1,
      nome: "Goleiro"
    },
    {
      id: 2,
      nome: "Lateral Direito"
    },
    {
      id: 3,
      nome: "Lateral Esquerdo"
    },
    {
      id: 4,
      nome: "Zagueiro"
    },
    {
      id: 5,
      nome: "Volante"
    },
    {
      id: 6,
      nome: "Meia"
    },
    {
      id: 7,
      nome: "Atacante"
    },
   ])
  }
}
