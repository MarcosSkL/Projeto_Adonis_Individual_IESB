import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class JogadorUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional({}, [
      rules.maxLength(50),
      rules.alpha({
        allow: ['space', 'underscore', 'dash']
      }),
      rules.unique({table: 'jogadors', column:'nome'})
    ]),
    dataNascimento: schema.date.optional(),
    nacionalidade: schema.string.optional([rules.alpha({ allow: ['space'] }), rules.maxLength(50)]),
    altura: schema.string.optional({},[
      rules.maxLength(5),
      rules.minLength(5),
      rules.regex(/^\d{1}\,?\d{2}/)
    ]),
    posicaosId: schema.number([
      rules.exists({ table: "posicaos", column: "id" })
    ]),
    selecaosId: schema.number([
      rules.exists({ table: "selecaos", column: "id"})
    ]),
  })


  public messages: CustomMessages = {}
}
