import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Posicao from 'App/Models/Posicao'

export default class extends BaseSeeder {
  public async run () {
    await Posicao.createMany([
      {nome: "Goleiro"},
      {nome: "Lateral Direito"},
      {nome: "Lateral Esquerdo"},
      {nome: "Zagueiro"},
      {nome: "Volante"},
      {nome: "Meia"},
      {nome: "Atacante"},

    ])
  }
}
