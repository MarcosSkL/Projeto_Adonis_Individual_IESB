// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Jogadore from "App/Models/Jogadore"

export default class JogadoresController {
    index (){
        return Jogadore.query().paginate(1)
      }
      store ({request}){
        const dados = request.only([
          'nome',
          'camisa',
          'idade',
          'nacionalidade',
          'times_id',
          'posicionamentos_id'
        ])
        return Jogadore.createMany(dados)
      }

      show( {request} ) {
        const id = request.param('id')
        return Jogadore.findOrFail(id)
      }
    
      async destroy( {request} ) {
        const id = request.param('id')
        const jogadores = await Jogadore.findOrFail(id)
        return jogadores.delete()
      }
    
      async update( {request} ) {
        const id = request.param('id')
        const jogadores = await Jogadore.findOrFail(id)
        const dados = request.only([
        'nome',
        'camisa',
        'idade',
        'nacionalidade',
        'timesId',
        'posicionamentosId'])
        jogadores.merge(dados)
        return jogadores.save()
    
    }
}
