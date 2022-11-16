import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FaseGrupo from 'App/Models/FaseGrupo'

export default class extends BaseSeeder {
  public async run () {
    await FaseGrupo.createMany([
      {nome: "Grupo A", selecaoId: 1 },
      {nome: "Grupo B", selecaoId: 2 },
      {nome: "Grupo C", selecaoId: 3 },
      {nome: "Grupo D", selecaoId: 4 },
    ])
  }
}
