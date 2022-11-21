import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FaseGrupo from 'App/Models/FaseGrupo'

export default class extends BaseSeeder {
  public async run () {
    await FaseGrupo.createMany([
      {nome: "Grupo A", timesId: 1},
      {nome: "Grupo B", timesId: 2},
      {nome: "Grupo C", timesId: 3},
      {nome: "Grupo D", timesId: 4},
      {nome: "Grupo E", timesId: 5},
      {nome: "Grupo F", timesId: 6},
      {nome: "Grupo G", timesId: 7},
      {nome: "Grupo H", timesId: 8},
    ])
  }
}
