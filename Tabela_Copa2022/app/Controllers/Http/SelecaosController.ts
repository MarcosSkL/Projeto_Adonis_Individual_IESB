// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Selecao from "App/Models/Selecao"

export default class SelecaosController {
  index (){
    return Selecao.query().paginate(1)
  }
  store ({request}){
    const dados = request.only([
      'nome',
      'continente',
      'tecnicos_id',
      'fase_grupos_id'
    ])
    return Selecao.createMany(dados)
  }

  show( {request} ) {
    const id = request.param('id')
    return Selecao.findOrFail(id)
  }

  async destroy( {request} ) {
    const id = request.param('id')
    const selecaos = await Selecao.findOrFail(id)
    return selecaos.delete()
  }

  async update( {request} ) {
    const id = request.param('id')
    const selecaos = await Selecao.findOrFail(id)
    const dados = request.only([
        'nome',
        'continente',
        'tecnicos_id',
        'fase_grupos_id'
    ])
    selecaos.merge(dados)
    return selecaos.save()

}
}
