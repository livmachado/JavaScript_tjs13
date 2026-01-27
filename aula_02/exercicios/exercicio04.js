const read=require("readline-sync");

console.log("\nDiferença do produto entre o numero 1 e numero 2\n pelo produto entre o numero 3 e o numero 4\n")

let numero1 = read.questionFloat("Numero 1: ")
let numero2 = read.questionFloat("Numero 2: ")
let numero3 = read.questionFloat("Numero 3: ")
let numero4 = read.questionFloat("Numero 4: ")

let diferenca= (numero1*numero2)-(numero3*numero4)

console.log(`\nDiferença: ${diferenca.toFixed(1)}`)