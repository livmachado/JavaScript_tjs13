const read=require("readline-sync");

console.log("\nCalculadora de salário líquido")

let salarioBruto = read.questionFloat("Salario Bruto: ")
let adicionalNoturno = read.questionFloat("Adicional Noturno: ")
let horasExtras = read.questionFloat("Horas Extras: ")
let qntHorasExtras = 5
//let qntHorasExtras= read.questionInt("Quantidade de horas extras: ")
let descontos = read.questionFloat("Descontos: ")

let salarioLiquido= salarioBruto + adicionalNoturno + (horasExtras*qntHorasExtras) - descontos

console.log(`\nSalário Líquido: ${salarioLiquido.toFixed(2)}`)