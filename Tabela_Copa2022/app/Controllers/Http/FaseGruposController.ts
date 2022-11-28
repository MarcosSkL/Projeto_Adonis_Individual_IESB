// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import FaseGrupo from "App/Models/FaseGrupo"
import FaseGrupoUpdateValidator from "App/Validators/FaseGrupoUpdateValidator"
import FaseGrupoValidator from "App/Validators/FaseGrupoValidator"

export default class FaseGruposController {
 async index (){
    return await FaseGrupo.query().preload("selecaos")
  }
  async store ({request}){
    const dados = await request.validate(FaseGrupoValidator)
    return FaseGrupo.create(dados)
  }

  async show( {request} ) {
    const id = request.param('id')
    return FaseGrupo.findOrFail(id)
  }

  async destroy( {request} ) {
    const id = request.param('id')
    const fasegrupos = await FaseGrupo.findOrFail(id)
    fasegrupos.delete()
    return "Usuário Deletado com Sucesso"
  }

  async update( {request} ) {
    const id = request.param('id')
    const fasegrupos = await FaseGrupo.findOrFail(id)
    const dados = request.validate(FaseGrupoUpdateValidator)
    fasegrupos.merge(dados).save()
    return fasegrupos

}
}
