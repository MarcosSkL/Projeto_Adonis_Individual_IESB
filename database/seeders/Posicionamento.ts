import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Posicionamento from 'App/Models/Posicionamento'

export default class extends BaseSeeder {
  public async run () {
    await Posicionamento.createMany([
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
