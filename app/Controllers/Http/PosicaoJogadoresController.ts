// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import PosicaoJogadore from "App/Models/PosicaoJogadore"

export default class PosicaoJogadoresController {
    index (){
        return PosicaoJogadore.query().paginate(1)
      }
      store ({request}){
        const dados = request.only([
          'posicionamentosId',
          'jogadoresId',
        ])
        return PosicaoJogadore.createMany(dados)
      }

      show( {request} ) {
        const id = request.param('id')
        return PosicaoJogadore.findOrFail(id)
      }
    
      async destroy( {request} ) {
        const id = request.param('id')
        const posicaojogadores = await PosicaoJogadore.findOrFail(id)
        return posicaojogadores.delete()
      }
    
      async update( {request} ) {
        const id = request.param('id')
        const posicaojogadores = await PosicaoJogadore.findOrFail(id)
        const dados = request.only([
        'posicionamentosId',
        'jogadoresId',
        ])
        posicaojogadores.merge(dados)
        return posicaojogadores.save()
    
    }
}
