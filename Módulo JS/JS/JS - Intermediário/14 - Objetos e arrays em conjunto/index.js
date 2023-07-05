// let jogo1 = {
//     nome: 'Final Fantasy'
// }

// let jogo2 = {
//     nome: 'Fallout'
// }

// let jogo3 = {
//     nome: 'fifa'
// }


// let videoGame ={
//     nome: 'xbox' ,
//     valor: 3000 ,
//     jogos: [jogo1, jogo2]
// }
// videoGame.jogos.push(jogo3)

// console.log (videoGame) 

let cliente = {
    nome: 'Ricardo' , 
    ultimoPedido: {
        produto: 'xbox' , 
        valor: 3000 , 
        jogos: [
            {
                nome:'Fifa'
            }
        ]
    }
}

console.log (cliente.ultimoPedido.jogos[0].nome)