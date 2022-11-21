// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import FaseGrupo from "App/Models/FaseGrupo"

export default class FaseGruposController {
    index (){
        return FaseGrupo.query().paginate(1)
      }
      store ({request}){
        const dados = request.only([
          'nome',
          'timesId',
        ])
        return FaseGrupo.createMany(dados)
      }

      show( {request} ) {
        const id = request.param('id')
        return FaseGrupo.findOrFail(id)
      }
    
      async destroy( {request} ) {
        const id = request.param('id')
        const fasegrupos = await FaseGrupo.findOrFail(id)
        return fasegrupos.delete()
      }
    
      async update( {request} ) {
        const id = request.param('id')
        const fasegrupos = await FaseGrupo.findOrFail(id)
        const dados = request.only([
        'nome',
        'timesId'])
        fasegrupos.merge(dados)
        return fasegrupos.save()
    
    }
}
