import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Selecao from 'App/Models/Selecao'

export default class extends BaseSeeder {
  public async run () {
    await Selecao.createMany([
      {nome: "Catar", continente: "", tecnicoId: 1, faseGrupoId: 1 },
      {nome: "Equador", tecnicoId: 2, faseGrupoId: 1 },
      {nome: "Senegal", tecnicoId: 3, faseGrupoId: 1 },
      {nome: "Holanda", tecnicoId: 4, faseGrupoId: 1 },
      {nome: "Inglaterra", tecnicoId: 5, faseGrupoId: 2 },
      {nome: " Irã", tecnicoId: 6, faseGrupoId: 2 },
      {nome: "EUA", tecnicoId: 7, faseGrupoId: 2 },
      {nome: "Gales", tecnicoId: 8, faseGrupoId: 2 },
      {nome: "Argentina", tecnicoId: 9, faseGrupoId: 3 },
      {nome: "Arabia Saudita", tecnicoId: 10, faseGrupoId: 3 },
      {nome: "Mexico", tecnicoId: 11, faseGrupoId: 3 },
      {nome: "Polonia", tecnicoId: 12, faseGrupoId: 3 },
      {nome: "França", tecnicoId: 13, faseGrupoId: 4 },
      {nome: "Austrália", tecnicoId: 14, faseGrupoId: 4 },
      {nome: "Dinamarca", tecnicoId: 15, faseGrupoId: 4 },
      {nome: "Tunisia", tecnicoId: 16, faseGrupoId: 4 },
      {nome: "Espanha", tecnicoId: 17, faseGrupoId: 5 },
      {nome: "Costa Rica", tecnicoId: 18, faseGrupoId: 5 },
      {nome: "Alemanha", tecnicoId: 19, faseGrupoId: 5 },
      {nome: "Japão", tecnicoId: 20, faseGrupoId: 5 },
      {nome: "Belgica", tecnicoId: 21, faseGrupoId: 6 },
      {nome: "Canada", tecnicoId: 22, faseGrupoId: 6 },
      {nome: "Marrocos", tecnicoId: 23, faseGrupoId: 6 },
      {nome: "Croacia", tecnicoId: 24, faseGrupoId: 6 },
      {nome: "Brasil", tecnicoId: 25, faseGrupoId: 7 },
      {nome: "Servia", tecnicoId: 26, faseGrupoId: 7 },
      {nome: "Suica", tecnicoId: 27, faseGrupoId: 7 },
      {nome: "Camaroes", tecnicoId: 28, faseGrupoId: 7 },
      {nome: "Portugal", tecnicoId: 29, faseGrupoId: 8 },
      {nome: "Gana", tecnicoId: 30, faseGrupoId: 8 },
      {nome: "Uruguai", tecnicoId: 31, faseGrupoId: 8 },
      {nome: "Coreia do Sul", tecnicoId: 32, faseGrupoId: 8 },

    ])
  }
}
