import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Jogadore from 'App/Models/Jogadore'

export default class extends BaseSeeder {
  public async run () {
    await Jogadore.createMany([
      {nome: "Saad Al Sheeb", camisa: 21, idade: 32, nacionalidade: "Catariano", timesId: 1, posicionamentosId: 1},
      {nome: "Pedro Miguel Carvalho Deus Correia", camisa: 2, idade: 32, nacionalidade: "Português", timesId: 1, posicionamentosId: 4},
      {nome: "Bassam Hisham Ali Al-Rawi", camisa: 5, idade: 24, nacionalidade: "Catariano", timesId: 1, posicionamentosId: 4},
      {nome: "Boualem Khoukhi", camisa: 16, idade: 32, nacionalidade: "Catariano", timesId: 1, posicionamentosId: 4},
      {nome: "Abdelkarim Hassan", camisa: 14, idade: 29, nacionalidade: "Catariano", timesId: 1, posicionamentosId: 3},
      {nome: "Karim Boudiaf", camisa: 12, idade: 32, nacionalidade: "Catariano", timesId: 1, posicionamentosId: 5},
      {nome: "Abdulaziz Hatem", camisa: 6, idade: 32, nacionalidade: "Catariano", timesId: 1, posicionamentosId: 6},
      {nome: "Ali Assadalla", camisa: 8, idade: 29, nacionalidade: "Catariano", timesId: 1, posicionamentosId: 6},
      {nome: "Akram Afif", camisa: 76, idade: 25, nacionalidade: "Catariano", timesId: 1, posicionamentosId: 7},
      {nome: "Ismaeel Mohammad", camisa: 7, idade: 32, nacionalidade: "Catariano", timesId: 1, posicionamentosId: 7},
      {nome: "Almoez Ali", camisa: 19, idade: 26, nacionalidade: "Catariano", timesId: 1, posicionamentosId: 7},
      {nome: "Alexander Domínguez", camisa: 22, idade: 35, nacionalidade: "Equatoriano", timesId: 2, posicionamentosId: 1},
      {nome: "Robert Abel Arboleda Escobar", camisa: 5, idade: 31, nacionalidade: "Equatoriano", timesId: 2, posicionamentosId: 4},
      {nome: "Xavier Arreaga", camisa: 3, idade: 28, nacionalidade: "Equatoriano", timesId: 2, posicionamentosId: 4},
      {nome: "Ángelo Smit Preciado Quiñónez", camisa: 77, idade: 24, nacionalidade: "Equatoriano", timesId: 2, posicionamentosId: 2},
      {nome: "Pervis Josué Estupiñán Tenorio", camisa: 30, idade: 24, nacionalidade: "Equatoriano", timesId: 2, posicionamentosId: 3},
      {nome: "Carlos Armando Gruezo Arboleda", camisa: 8, idade: 27, nacionalidade: "Equatoriano", timesId: 2, posicionamentosId: 5},
      {nome: "Moisés Isaac Caicedo Corozo", camisa: 25, idade: 21, nacionalidade: "Equatoriano", timesId: 2, posicionamentosId: 6},
      {nome: "Enner Remberto Valencia Lastra", camisa: 13, idade: 33, nacionalidade: "Equatoriano", timesId: 2, posicionamentosId: 7},
      {nome: "Michael Steveen Estrada Martínez", camisa: 15, idade: 33, nacionalidade: "Equatoriano", timesId: 2, posicionamentosId: 7},
      {nome: "Édouard Osoque Mendy", camisa: 16, idade: 30, nacionalidade: "Franco Senegalês", timesId: 3, posicionamentosId: 1},
      {nome: "Seny Timothy Dieng", camisa: 1, idade: 27, nacionalidade: "Senegalês", timesId: 3, posicionamentosId: 1},
      {nome: "Kalidou Koulibaly", camisa: 26, idade: 31, nacionalidade: "Senegalês", timesId: 3, posicionamentosId: 4},
      {nome: "Abdou Diallo", camisa: 37, idade: 26, nacionalidade: "Senegalês", timesId: 3, posicionamentosId: 4},
      {nome: "Youssouf Sabaly", camisa: 23, idade: 29, nacionalidade: "Senegalês", timesId: 3, posicionamentosId: 2},
      {nome: "Fodé Ballo-Touré", camisa: 5, idade: 25, nacionalidade: "Senegalês", timesId: 3, posicionamentosId: 3},
      {nome: "Cheikhou Kouyaté", camisa: 19, idade: 32, nacionalidade: "Senegalês", timesId: 3, posicionamentosId: 5},
      {nome: "Nampalys Mendy", camisa: 24, idade: 30, nacionalidade: "Senegalês", timesId: 3, posicionamentosId: 5},
      {nome: "Famara Diedhiou", camisa: 14, idade: 29, nacionalidade: "Senegalês", timesId: 3, posicionamentosId: 7},
      {nome: "Cheikh Ahmadou Bamba Mbacke Dieng", camisa: 12, idade: 22, nacionalidade: "Senegalês", timesId: 3, posicionamentosId: 7},
      {nome: "Sadio Mané", camisa: 17, idade: 30, nacionalidade: "Senegalês", timesId: 3, posicionamentosId: 7},
      {nome: "Justin Bijlow", camisa: 1, idade: 24, nacionalidade: "Neerlandês", timesId: 4, posicionamentosId: 1},
      {nome: "Virgil van Dijk", camisa: 4, idade: 31, nacionalidade: "Neerlandês", timesId: 4, posicionamentosId: 4},
      {nome: "Nathan Benjamin Aké", camisa: 5, idade: 27, nacionalidade: "Neerlandês", timesId: 4, posicionamentosId: 4},
      {nome: "Matthijs de Ligt", camisa: 4, idade: 23, nacionalidade: "Neerlandês", timesId: 4, posicionamentosId: 4},
      {nome: "Frenkie de Jong", camisa: 21, idade: 25, nacionalidade: "Neerlandês", timesId: 4, posicionamentosId: 6},
      {nome: "Daley Blind", camisa: 17, idade: 32, nacionalidade: "Neerlandês", timesId: 4, posicionamentosId: 2 && 4},
      {nome: "Memphis Depay", camisa: 14, idade: 28, nacionalidade: "Neerlandês", timesId: 4, posicionamentosId: 7},
      {nome: "Wout Weghorst", camisa: 12, idade: 30, nacionalidade: "Neerlandês", timesId: 4, posicionamentosId: 7},
      {nome: "Jordan Lee Pickford", camisa: 1, idade: 28, nacionalidade: "Britânico", timesId: 5, posicionamentosId: 1},
      {nome: "Nicholas David Pope", camisa: 2, idade: 30, nacionalidade: "Inglês", timesId: 5, posicionamentosId: 1},
      {nome: "Aaron Christopher Ramsdale", camisa: 32, idade: 24, nacionalidade: "Inglês", timesId: 5, posicionamentosId: 1},
      {nome: "Jacob Harry Maguire", camisa: 5, idade: 29, nacionalidade: "Inglês", timesId: 5, posicionamentosId: 4},
      {nome: "Benjamin William White", camisa: 4, idade: 28, nacionalidade: "Inglês", timesId: 5, posicionamentosId: 4},
      {nome: "John Stones", camisa: 5, idade: 28, nacionalidade: "Inglês", timesId: 5, posicionamentosId: 4},
      {nome: "Trent John Alexander-Arnold", camisa: 66, idade: 24, nacionalidade: "Inglês", timesId: 5, posicionamentosId: 2},
      {nome: "Luke Paul Hoare Shaw", camisa: 23, idade: 27, nacionalidade: "Inglês", timesId: 5, posicionamentosId: 3},
      {nome: "Kyle Andrew Walker", camisa: 2, idade: 32, nacionalidade: "Inglês", timesId: 5, posicionamentosId: 2},
      {nome: "Jordan Brian Henderson", camisa: 14, idade: 32, nacionalidade: "Inglês", timesId: 5, posicionamentosId: 5},
      {nome: "Kalvin Mark Phillips", camisa: 4, idade: 26, nacionalidade: "Inglês", timesId: 5, posicionamentosId: 5},
      {nome: "Declan Rice", camisa: 41, idade: 23, nacionalidade: "Inglês", timesId: 5, posicionamentosId: 5},
      {nome: "Jude Victor William Bellingham", camisa: 22, idade: 19, nacionalidade: "Inglês", timesId: 5, posicionamentosId: 5},
      {nome: "Conor John Gallagher", camisa: 23, idade: 22, nacionalidade: "Inglês", timesId: 5, posicionamentosId: 6},
      {nome: "Philip Walter Foden", camisa: 47, idade: 22, nacionalidade: "Inglês", timesId: 5, posicionamentosId: 6},
      {nome: "Bukayo Saka", camisa: 7, idade: 21, nacionalidade: "Britânico e Nigeriano", timesId: 5, posicionamentosId: 3},
      {nome: "Harry Edward Kane", camisa: 10, idade: 29, nacionalidade: "Inglês", timesId: 5, posicionamentosId: 7},
      {nome: "Marcus Rashford", camisa: 10, idade: 25, nacionalidade: "Inglês", timesId: 5, posicionamentosId: 7},
      {nome: "Alireza Safar Beiranvand", camisa: 1, idade: 30, nacionalidade: "Iraniano", timesId: 6, posicionamentosId: 1},
      {nome: "Amir Abedzadeh", camisa: 1, idade: 29, nacionalidade: "Iraniano", timesId: 6, posicionamentosId: 1},
      {nome: "Morteza Pouraliganji", camisa: 24, idade: 30, nacionalidade: "Iraniano", timesId: 6, posicionamentosId: 4},
      {nome: "Seyed Majid Hosseini", camisa: 5, idade: 26, nacionalidade: "Iraniano", timesId: 6, posicionamentosId: 4},
      {nome: "Ramin Rezaeian", camisa: 24, idade: 32, nacionalidade: "Iraniano", timesId: 6, posicionamentosId: 2},
      {nome: "Ehsan Hajy Safi", camisa: 28, idade: 32, nacionalidade: "Iraniano", timesId: 6, posicionamentosId: 6},
      {nome: "Rouzbeh Cheshmi", camisa: 4, idade: 29, nacionalidade: "Iraniano", timesId: 6, posicionamentosId: 4},
      {nome: "Saeed Ezatolahi Afagh", camisa: 18, idade: 26, nacionalidade: "Iraniano", timesId: 6, posicionamentosId: 6},
      {nome: "Karim Ansarifard", camisa: 10, idade: 32, nacionalidade: "Iraniano", timesId: 6, posicionamentosId: 7},
      {nome: "Sardar Azmoun", camisa: 9, idade: 27, nacionalidade: "Iraniano", timesId: 6, posicionamentosId: 7},
      {nome: "Seyed Saman Ghoddoos", camisa: 93, idade: 29, nacionalidade: "Iraniano", timesId: 6, posicionamentosId: 6},
      {nome: "Sean Johnson", camisa: 1, idade: 33, nacionalidade: "Norte Americano", timesId: 7, posicionamentosId: 1},
      {nome: "Timothy Michael Ream", camisa: 13, idade: 35, nacionalidade: "Norte Americano", timesId: 7, posicionamentosId: 4},
      {nome: "Sergiño Gianni Dest", camisa: 21, idade: 22, nacionalidade: "Neerlandês Norte Americano", timesId: 7, posicionamentosId: 2},
      {nome: "Tyler Shaan Adams", camisa: 20, idade: 23, nacionalidade: "Norte Americano", timesId: 7, posicionamentosId: 6},
      {nome: "Weston James Earl McKennie", camisa: 8, idade: 24, nacionalidade: "Norte Americano", timesId: 7, posicionamentosId: 6},
      {nome: "Giovanni Alejandro Reyna", camisa: 7, idade: 20, nacionalidade: "Norte Americano", timesId: 7, posicionamentosId: 7},
      {nome: "Christian Mate Pulisic[", camisa: 10, idade: 24, nacionalidade: "Norte Americano", timesId: 7, posicionamentosId: 7},
      {nome: "Joshua Thomas Sargent", camisa: 19, idade: 22, nacionalidade: "Norte Americano", timesId: 7, posicionamentosId: 7},
      {nome: "Wayne Robert Hennessey", camisa: 13, idade: 35, nacionalidade: "Galês", timesId: 8, posicionamentosId: 1},
      {nome: "Ethan Kwame Colm Raymond Ampadu", camisa: 4, idade: 22, nacionalidade: "Galês", timesId: 8, posicionamentosId: 4},
      {nome: "Benjamin Thomas Davies", camisa: 33, idade: 29, nacionalidade: "Galês", timesId: 8, posicionamentosId: 2},
      {nome: "Neco Shay Williams", camisa: 7, idade: 21, nacionalidade: "Galês", timesId: 8, posicionamentosId: 2},
      {nome: "Aaron James Ramsey", camisa: 16, idade: 31, nacionalidade: "Galês", timesId: 8, posicionamentosId: 6},
      {nome: "Joseph Michael Allen", camisa: 7, idade: 32, nacionalidade: "Galês", timesId: 8, posicionamentosId: 5},
      {nome: "Gareth Frank Bale", camisa: 11, idade: 33, nacionalidade: "Galês", timesId: 8, posicionamentosId: 7},
      {nome: "Damián Emiliano Martínez Romero", camisa: 1, idade: 30, nacionalidade: "Argentino", timesId: 9, posicionamentosId: 1},
      {nome: "Franco Armani", camisa: 1, idade: 36, nacionalidade: "Argentino", timesId: 9, posicionamentosId: 1},
      {nome: "Gonzalo Ariel Montiel", camisa: 2, idade: 25, nacionalidade: "Argentino", timesId: 9, posicionamentosId: 2},
      {nome: "Cristian Gabriel Romero", camisa: 17, idade: 24, nacionalidade: "Argentino", timesId: 9, posicionamentosId: 4},
      {nome: "Lisandro Martínez", camisa: 6, idade: 24, nacionalidade: "Argentino", timesId: 9, posicionamentosId: 3},
      {nome: "Leandro Daniel Paredes", camisa: 32, idade: 28, nacionalidade: "Argentino", timesId: 9, posicionamentosId: 5},
      {nome: "Enzo Jeremías Fernández", camisa: 13, idade: 21, nacionalidade: "Argentino", timesId: 9, posicionamentosId: 6},
      {nome: "Rodrigo Javier de Paul", camisa: 5, idade: 28, nacionalidade: "Argentino", timesId: 9, posicionamentosId: 6},
      {nome: "Alejandro Darío Gómez", camisa: 24, idade: 34, nacionalidade: "Argentino", timesId: 9, posicionamentosId: 7},
      {nome: "Ángel Martín Correa Martínez", camisa: 10, idade: 27, nacionalidade: "Argentino", timesId: 9, posicionamentosId: 7},
      {nome: "Paulo Bruno Exequiel Dybala", camisa: 21, idade: 29, nacionalidade: "Argentino", timesId: 9, posicionamentosId: 7},
      {nome: "Lionel Andrés Messi Cuccittini ", camisa: 30, idade: 35, nacionalidade: "Argentino", timesId: 9, posicionamentosId: 7},
      {nome: "Julián Álvarez", camisa: 19, idade: 22, nacionalidade: "Argentino", timesId: 9, posicionamentosId: 7},
      {nome: "Lautaro Javier Martínez", camisa: 10, idade: 25, nacionalidade: "Argentino", timesId: 9, posicionamentosId: 7},
      {nome: "", camisa: 10, idade: 28, nacionalidade: "Argentino", timesId: 9, posicionamentosId: 1},

    ])
  }
}