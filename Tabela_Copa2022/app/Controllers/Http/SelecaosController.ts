// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Selecao from "App/Models/Selecao"

export default class SelecaosController {
  index (){
    return Selecao.query().preload("faseGrupos").preload("jogadors").preload('tecnicos')
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
    selecaos.delete()
    return "Usuário Deletado com Sucesso"
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
