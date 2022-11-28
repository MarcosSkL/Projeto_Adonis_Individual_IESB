// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Posicao from "App/Models/Posicao"

export default class PosicaosController {
  index (){
    return Posicao.query().paginate(1)
  }
  store ({request}){
    const dados = request.only([
      'nome',
    ])
    return Posicao.createMany(dados)
  }

  show( {request} ) {
    const id = request.param('id')
    return Posicao.findOrFail(id)
  }

  async destroy( {request} ) {
    const id = request.param('id')
    const posicaos = await Posicao.findOrFail(id)
    posicaos.delete()
    return "Usuário Deletado com Sucesso"
  }

  async update( {request} ) {
    const id = request.param('id')
    const posicaos = await Posicao.findOrFail(id)
    const dados = request.only([
      'nome',
     ])
    posicaos.merge(dados)
    return posicaos.save()

}
}
