// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Tecnico from "App/Models/Tecnico"

export default class TecnicosController {
    index (){
        return Tecnico.query().paginate(1)
      }
      store ({request}){
        const dados = request.only([
          'nome',
          'idade',
          'nacionalidade',
          'timesId',
        ])
        return Tecnico.createMany(dados)
      }

      show( {request} ) {
        const id = request.param('id')
        return Tecnico.findOrFail(id)
      }
    
      async destroy( {request} ) {
        const id = request.param('id')
        const tecnicos = await Tecnico.findOrFail(id)
        return tecnicos.delete()
      }
    
      async update( {request} ) {
        const id = request.param('id')
        const tecnicos = await Tecnico.findOrFail(id)
        const dados = request.only([
            'nome',
            'idade',
            'nacionalidade',
            'timesId',
        ])
        tecnicos.merge(dados)
        return tecnicos.save()
    
    }
}
