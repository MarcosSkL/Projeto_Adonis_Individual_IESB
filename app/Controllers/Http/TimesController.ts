// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Time from "App/Models/Time"

export default class TimesController {
    index (){
        return Time.query().paginate(1)
      }
      store ({request}){
        const dados = request.only([
          'nome',
          'continente',
          'tecnicoId',
          'faseGrupoId',
        ])
        return Time.createMany(dados)
      }

      show( {request} ) {
        const id = request.param('id')
        return Time.findOrFail(id)
      }
    
      async destroy( {request} ) {
        const id = request.param('id')
        const times = await Time.findOrFail(id)
        return times.delete()
      }
    
      async update( {request} ) {
        const id = request.param('id')
        const times = await Time.findOrFail(id)
        const dados = request.only([
            'nome',
            'continente',
            'tecnicoId',
            'faseGrupoId'
        ])
        times.merge(dados)
        return times.save()
    
    }
}
