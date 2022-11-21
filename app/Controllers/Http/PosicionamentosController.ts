// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Posicionamento from "App/Models/Posicionamento"

export default class PosicionamentosController {
    index (){
        return Posicionamento.query().paginate(1)
      }
      store ({request}){
        const dados = request.only([
          'nome',
        ])
        return Posicionamento.createMany(dados)
      }

      show( {request} ) {
        const id = request.param('id')
        return Posicionamento.findOrFail(id)
      }
    
      async destroy( {request} ) {
        const id = request.param('id')
        const posicionamentos = await Posicionamento.findOrFail(id)
        return posicionamentos.delete()
      }
    
      async update( {request} ) {
        const id = request.param('id')
        const posicionamentos = await Posicionamento.findOrFail(id)
        const dados = request.only([
          'nome',
         ])
        posicionamentos.merge(dados)
        return posicionamentos.save()
    
    }
}
