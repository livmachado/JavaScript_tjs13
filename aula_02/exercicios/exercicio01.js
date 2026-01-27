const read=require("readline-sync");

let salario = read.questionFloat("Digite o Salario: \n");
let abono = read.questionFloat("\nDigite o Abono:\n");

let novoSalario = salario + abono

console.log(`Novo Salário: ${novoSalario}`)