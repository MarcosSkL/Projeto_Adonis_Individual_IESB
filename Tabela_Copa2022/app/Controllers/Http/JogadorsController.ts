// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Jogador from "App/Models/Jogador"
import JogadorUpdateValidator from "App/Validators/JogadorUpdateValidator"
import JogadorValidator from "App/Validators/JogadorValidator"


export default class JogadorsController {
  async index (){
    return await Jogador.query().preload("selecaos")
  }
  async store ({request}){
    const dados = await request.validate(JogadorValidator)
    return Jogador.createMany(dados)
  }

  show( {request} ) {
    const id = request.param('id')
    return Jogador.findOrFail(id)
  }

  async destroy( {request} ) {
    const id = request.param('id')
    const jogadores = await Jogador.findOrFail(id)
    jogadores.delete()
    return "Usuário Deletado com Sucesso"
  }

  async update( {request} ) {
    const id = request.param('id')
    const jogadores = await Jogador.findOrFail(id)
    const dados = request.validate(JogadorUpdateValidator)
    jogadores.merge(dados).save()
    return jogadores

  }
}
