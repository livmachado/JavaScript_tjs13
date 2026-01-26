const leia=require("readline-sync")

let mensagem = leia.question("Digite uma mensagem: \n")

console.log(mensagem);

let numero1= leia.questionInt("Digite o primeiro numero: \n")
let numero2= leia.questionInt("Digite o segundo numero: \n")

let soma = numero1 + numero2

console.log("\nSoma: ", soma)