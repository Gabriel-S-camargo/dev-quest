// const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
//     const mesAtual = 2
//     let AnoDeNascimento = 2023 - idade
//     if(mesDeNascimento > mesAtual) AnoDeNascimento--
//     imprimir (AnoDeNascimento)
// }

// let imprimiranoDeNascimento = AnoDeNascimento => {
//     console.log('Seu ano de nascimento é: ' + AnoDeNascimento)

// }

// calcularAnoDeNascimento (18, 2, imprimiranoDeNascimento) 

// function dobrar(numero){
//     return numero * 2
// }

// console.log(dobrar(2))


function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)

let triplicar = multiplicar(3)

let quadruplicar = multiplicar(4)

console.log(dobrar(3))
console.log(triplicar(3))
console.log(quadruplicar(3))