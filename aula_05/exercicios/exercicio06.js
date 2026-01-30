const leia = require('readline-sync')

let numero;
let soma=0, multiplosDe3=0;


do {
    numero = leia.questionInt('Digite um numero: ')
    if (numero%3===0 && numero!==0){
        soma+=numero
        multiplosDe3++
    }    
} while (numero!==0)

let media= soma/multiplosDe3

console.log("A média de todos os números múltiplos de 3 é: ", media.toFixed(2))