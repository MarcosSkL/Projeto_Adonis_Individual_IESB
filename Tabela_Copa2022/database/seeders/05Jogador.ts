import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import jogador from 'App/Models/Jogador'

export default class extends BaseSeeder {
  public async run () {
    await jogador.createMany([
      {
        nome: "Saad Al Sheeb",
        camisa: 21,
        dataNascimento: new Date(1990, 2, 19),
        nacionalidade: "Catariano",
        altura: "1,88m",
        posicaoId: 1,
        selecaosId: 1
    },
      {
        nome: "Kylian Sanmi Mbappé Lottin",
        camisa: 10,
        dataNascimento: new Date(1998, 12, 20),
        nacionalidade: "Francês",
        altura: "1,78m",
        posicaoId: 7,
        selecaosId: 13
    },
      {
        nome: "Neymar da Silva Santos Júnior",
        camisa: 10,
        dataNascimento: new Date(1992, 2, 5),
        nacionalidade: "Brasileiro",
        altura: "1,75m",
        posicaoId: 7,
        selecaosId: 25
    },
      {
        nome: "Karim Mostafa Benzema",
        camisa: 19,
        dataNascimento: new Date(1987, 12, 19),
        nacionalidade: "Francês",
        altura: "1,85m",
        posicaoId: 7,
        selecaosId: 13
    },
    ])
  }
}
