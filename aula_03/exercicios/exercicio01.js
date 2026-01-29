const read=require("readline-sync");

let numeroA = read.questionInt("Digite o primeiro numero: ");
let numeroB = read.questionInt("Digite o segundo numero: ");
let numeroC = read.questionInt("Digite o terceiro numero: ");

if (numeroA+numeroB > numeroC){
    console.log("A Soma de A + B é Maior do que C")
} else if (numeroA+numeroB === numeroC){
    console.log("A Soma de A + B é Igual a C")
} else {
    console.log("A Soma de A + B é Menor do que C")
    
}