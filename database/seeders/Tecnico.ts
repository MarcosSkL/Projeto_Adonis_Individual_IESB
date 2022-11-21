import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Tecnico from 'App/Models/Tecnico'

export default class extends BaseSeeder {
  public async run () {
    await Tecnico.createMany([
      {nome: "Félix Sánchez Bas", idade: 46, nacionalidade: "Espanhol", timesId: 1},
      {nome: "Gustavo Julio Alfaro", idade: 60, nacionalidade: "Argentino", timesId: 2},
      {nome: "Aliou Cissé", idade: 46, nacionalidade: "Senegalês.", timesId: 3},
      {nome: "Aloysius Paulus Maria van Gaal", idade: 71, nacionalidade: "Neerlandês", timesId: 4},
      {nome: "Gareth Harold Southgate", idade: 52, nacionalidade: "Ingles", timesId: 5},
      {nome: "Dragan Skočić", idade: 54, nacionalidade: "Iraniano", timesId: 6},
      {nome: "Gregg Berhalter", idade: 49, nacionalidade: "Estadunidense", timesId: 7},
      {nome: "Robert John Page", idade: 48, nacionalidade: "Gales", timesId: 8},
      {nome: "Lionel Sebastián Scaloni", idade: 44, nacionalidade: "Argentino", timesId: 9},
      {nome: "Hervé Renard", idade: 54, nacionalidade: "Frances", timesId: 10},
      {nome: "Gerardo Daniel Martino", idade: 59, nacionalidade: "Argentino", timesId: 11},
      {nome: "Czesław Michniewicz", idade: 52, nacionalidade: "Polones", timesId: 12},
      {nome: "Didier Claude Deschamps", idade: 54, nacionalidade: "Frances", timesId: 13},
      {nome: "Graham Arnold", idade: 59, nacionalidade: "Australiano", timesId: 14},
      {nome: "Kasper Hjulmand", idade: 50, nacionalidade: "Dinamarques", timesId: 15},
      {nome: "Jalel Kadri", idade: 49, nacionalidade: "Tunisiano", timesId: 16},
      {nome: "Luis Enrique Martínez García", idade: 52, nacionalidade: "Espanhol", timesId: 17},
      {nome: "Luis Fernando Suárez", idade: 62, nacionalidade: "Colombiano", timesId: 18},
      {nome: "Hans-Dieter Flick", idade: 57, nacionalidade: "Alemão", timesId: 19},
      {nome: "Hajime Moriyasu", idade: 54, nacionalidade: "Japonês", timesId: 20},
      {nome: "Roberto Martínez Montoliu", idade: 49, nacionalidade: "Espanhol", timesId: 21},
      {nome: "John Herdman", idade: 47, nacionalidade: "Ingles", timesId: 22},
      {nome: "Vahid Halilhodžić", idade: 70, nacionalidade: "Bósnio", timesId: 23},
      {nome: "Zlatko Dalić", idade: 56, nacionalidade: "Croata", timesId: 24},
      {nome: "Adenor Leonardo Bachi", idade: 61, nacionalidade: "Brasileiro", timesId: 25},
      {nome: "Dragan Stojković", idade: 57, nacionalidade: "Servio", timesId: 26},
      {nome: "Murat Yakın", idade: 48, nacionalidade: "Suíço", timesId: 27},
      {nome: "Rigobert Song Bahanag", idade: 46, nacionalidade: "Camaronês", timesId: 28},
      {nome: "Fernando Manuel Fernandes da Costa Santos", idade: 68, nacionalidade: "Português", timesId: 29},
      {nome: "Otto Addo", idade: 47, nacionalidade: "Alemão-Ganes", timesId: 30},
      {nome: "Diego Martín Alonso López", idade: 47, nacionalidade: "Uruguaio", timesId: 31},
      {nome: "Paulo Jorge Gomes Bento", idade: 53, nacionalidade: "Português", timesId: 32},

    ])
  }
}
