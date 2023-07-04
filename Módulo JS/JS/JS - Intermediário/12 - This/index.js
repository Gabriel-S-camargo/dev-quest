'use strict'

// console.log(window)
// console.log(window === this)

// this.name = 'Ricardo'

// function saudar() {
//     console.log('this no contexto da funcao', this)
//     console.log ('ola ' + this.name )
// }

// saudar()

// let usuario = {
//     nome: 'Ricardo',
//     saudar:function (){
//         console.log('this no contexto de método', this)

//         console.log('This no contexto de método', this.nome)
//     }
// } 

// usuario.saudar() 

let comida = {
    nome: 'Brócolis',
    temperatura: 0,
    cozinhar: function(temperaturaDeCozimento){
        this.temperatura = temperaturaDeCozimento
    }
}


console.log(comida)

comida.cozinhar (100)