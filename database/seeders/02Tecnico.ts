import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Tecnico from 'App/Models/Tecnico'

export default class extends BaseSeeder {
  public async run () {
    await Tecnico.createMany([
      {nome: "Félix Sánchez Bas", idade: 46, nacionalidade: "Espanhol", selecaoId: 1},
      {nome: "Gustavo Julio Alfaro", idade: 60, nacionalidade: "Argentino", selecaoId: 2},
      {nome: "Aliou Cissé", idade: 46, nacionalidade: "Senegalês.", selecaoId: 3},
      {nome: "Aloysius Paulus Maria van Gaal", idade: 71, nacionalidade: "Neerlandês", selecaoId: 4},
      {nome: "Gareth Harold Southgate", idade: 52, nacionalidade: "Ingles", selecaoId: 5},
      {nome: "Dragan Skočić", idade: 54, nacionalidade: "Iraniano", selecaoId: 6},
      {nome: "Gregg Berhalter", idade: 49, nacionalidade: "Estadunidense", selecaoId: 7},
      {nome: "Robert John Page", idade: 48, nacionalidade: "Gales", selecaoId: 8},
      {nome: "Lionel Sebastián Scaloni", idade: 44, nacionalidade: "Argentino", selecaoId: 9},
      {nome: "Hervé Renard", idade: 54, nacionalidade: "Frances", selecaoId: 10},
      {nome: "Gerardo Daniel Martino", idade: 59, nacionalidade: "Argentino", selecaoId: 11},
      {nome: "Czesław Michniewicz", idade: 52, nacionalidade: "Polones", selecaoId: 12},
      {nome: "Didier Claude Deschamps", idade: 54, nacionalidade: "Frances", selecaoId: 13},
      {nome: "Graham Arnold", idade: 59, nacionalidade: "Australiano", selecaoId: 14},
      {nome: "Kasper Hjulmand", idade: 50, nacionalidade: "Dinamarques", selecaoId: 15},
      {nome: "Jalel Kadri", idade: 49, nacionalidade: "Tunisiano", selecaoId: 16},
      {nome: "Luis Enrique Martínez García", idade: 52, nacionalidade: "Espanhol", selecaoId: 17},
      {nome: "Luis Fernando Suárez", idade: 62, nacionalidade: "Colombiano", selecaoId: 18},
      {nome: "Hans-Dieter Flick", idade: 57, nacionalidade: "Alemão", selecaoId: 19},
      {nome: "Hajime Moriyasu", idade: 54, nacionalidade: "Japonês", selecaoId: 20},
      {nome: "Roberto Martínez Montoliu", idade: 49, nacionalidade: "Espanhol", selecaoId: 21},
      {nome: "John Herdman", idade: 47, nacionalidade: "Ingles", selecaoId: 22},
      {nome: "Vahid Halilhodžić", idade: 70, nacionalidade: "Bósnio", selecaoId: 23},
      {nome: "Zlatko Dalić", idade: 56, nacionalidade: "Croata", selecaoId: 24},
      {nome: "Adenor Leonardo Bachi", idade: 61, nacionalidade: "Brasileiro", selecaoId: 25},
      {nome: "Dragan Stojković", idade: 57, nacionalidade: "Servio", selecaoId: 26},
      {nome: "Murat Yakın", idade: 48, nacionalidade: "Suíço", selecaoId: 27},
      {nome: "Rigobert Song Bahanag", idade: 46, nacionalidade: "Camaronês", selecaoId: 28},
      {nome: "Fernando Manuel Fernandes da Costa Santos", idade: 68, nacionalidade: "Português", selecaoId: 29},
      {nome: "Otto Addo", idade: 47, nacionalidade: "Alemão-Ganes", selecaoId: 30},
      {nome: "Diego Martín Alonso López", idade: 47, nacionalidade: "Uruguaio", selecaoId: 31},
      {nome: "Paulo Jorge Gomes Bento", idade: 53, nacionalidade: "Português", selecaoId: 32},

    ])
  }
}
