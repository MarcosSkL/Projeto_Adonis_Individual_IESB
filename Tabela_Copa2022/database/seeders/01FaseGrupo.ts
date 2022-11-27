import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FaseGrupo from 'App/Models/FaseGrupo'

export default class extends BaseSeeder {
  public async run () {
    await FaseGrupo.createMany([
      {nome: "Grupo A"},
      {nome: "Grupo B"},
      {nome: "Grupo C"},
      {nome: "Grupo D"},
      {nome: "Grupo E"},
      {nome: "Grupo F"},
      {nome: "Grupo G"},
      {nome: "Grupo H"},
    ])
  }
}
