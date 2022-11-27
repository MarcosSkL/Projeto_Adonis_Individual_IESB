// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import jogador from "App/Models/Jogador"


export default class JogadorsController {
  index (){
    return jogador.query().paginate(1)
  }
  store ({request}){
    const dados = request.only([
      'nome',
      'camisa',
      'data_nascimento',
      'nacionalidade',
      'altura',
      'posicaos_id',
      'selecaos_id'
    ])
    return jogador.createMany(dados)
  }

  show( {request} ) {
    const id = request.param('id')
    return jogador.findOrFail(id)
  }

  async destroy( {request} ) {
    const id = request.param('id')
    const jogadores = await jogador.findOrFail(id)
    return jogadores.delete()
  }

  async update( {request} ) {
    const id = request.param('id')
    const jogadores = await jogador.findOrFail(id)
    const dados = request.only([
      'nome',
      'camisa',
      'data_nascimento',
      'nacionalidade',
      'altura',
      'posicaos_id',
      'selecaos_id'
    ])
    jogadores.merge(dados)
    return jogadores.save()

  }
}
