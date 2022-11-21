import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Time from 'App/Models/Time'

export default class extends BaseSeeder {
  public async run () {
    await Time.createMany([
      {nome: "Catar", continente: "Ásia", tecnicosId: 1, faseGruposId: 1 },
      {nome: "Equador", continente: "América do Sul", tecnicosId: 2, faseGruposId: 1 },
      {nome: "Senegal", continente: "África", tecnicosId: 3, faseGruposId: 1 },
      {nome: "Holanda", continente: "Europa", tecnicosId: 4, faseGruposId: 1 },
      {nome: "Inglaterra", continente: "Europa", tecnicosId: 5, faseGruposId: 2 },
      {nome: "Irã", continente: "Ásia", tecnicosId: 6, faseGruposId: 2 },
      {nome: "EUA", continente: "America do Norte", tecnicosId: 7, faseGruposId: 2 },
      {nome: "Gales", continente: "Europa", tecnicosId: 8, faseGruposId: 2 },
      {nome: "Argentina", continente: "America do Sul", tecnicosId: 9, faseGruposId: 3 },
      {nome: "Arabia Saudita", continente: "Ásia", tecnicosId: 10, faseGruposId: 3 },
      {nome: "Mexico", continente: "América do Norte", tecnicosId: 11, faseGruposId: 3 },
      {nome: "Polonia", continente: "Europa", tecnicosId: 12, faseGruposId: 3 },
      {nome: "França", continente: "Europa", tecnicosId: 13, faseGruposId: 4 },
      {nome: "Austrália", continente: "Oceania", tecnicosId: 14, faseGruposId: 4 },
      {nome: "Dinamarca", continente: "Europa", tecnicosId: 15, faseGruposId: 4 },
      {nome: "Tunisia", continente: "África", tecnicosId: 16, faseGruposId: 4 },
      {nome: "Espanha", continente: "Europa", tecnicosId: 17, faseGruposId: 5 },
      {nome: "Costa Rica", continente: "América do Norte", tecnicosId: 18, faseGruposId: 5 },
      {nome: "Alemanha", continente: "Europa", tecnicosId: 19, faseGruposId: 5 },
      {nome: "Japão", continente: "Ásia", tecnicosId: 20, faseGruposId: 5 },
      {nome: "Belgica", continente: "Europa", tecnicosId: 21, faseGruposId: 6 },
      {nome: "Canada", continente: "América do Norte", tecnicosId: 22, faseGruposId: 6 },
      {nome: "Marrocos", continente: "África", tecnicosId: 23, faseGruposId: 6 },
      {nome: "Croacia", continente: "Europa", tecnicosId: 24, faseGruposId: 6 },
      {nome: "Brasil", continente: "América do Sul", tecnicosId: 25, faseGruposId: 7 },
      {nome: "Servia", continente: "Europa", tecnicosId: 26, faseGruposId: 7 },
      {nome: "Suica", continente: "Europa", tecnicosId: 27, faseGruposId: 7 },
      {nome: "Camarôes", continente: "África", tecnicosId: 28, faseGruposId: 7 },
      {nome: "Portugal", continente: "Europa", tecnicosId: 29, faseGruposId: 8 },
      {nome: "Gana", continente: "África", tecnicosId: 30, faseGruposId: 8 },
      {nome: "Uruguai", continente: "America do Sul", tecnicosId: 31, faseGruposId: 8 },
      {nome: "Coreia do Sul", continente: "Ásia", tecnicosId: 32, faseGruposId: 8 },

    ])
  }
}
