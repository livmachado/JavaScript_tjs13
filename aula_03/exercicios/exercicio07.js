const read = require("readline-sync");

console.log("============================================");
console.log("                CALCULADORA                 ");
console.log("============================================");
console.log("1 - Soma          ");
console.log("2 - Subtracao     ");
console.log("3 - Multiplicacao ");
console.log("4 - Divisao       ");
console.log("============================================");
console.log("                                            ");

let numero1 = read.questionFloat("Digite o 1 numero  ").toFixed(1)
let numero2 = read.questionFloat("Digite o 2 numero  ").toFixed(1)
let operacao= read.questionInt("Operacao: ")

switch (operacao) {
    case 1:
        let soma= numero1+numero2
        console.log(`\n${numero1} + ${numero2} = ${soma.toFixed(1)}`)
        break;
    case 2:
        let subtracao= numero1-numero2
        console.log(`\n${numero1} - ${numero2} = ${subtracao.toFixed(1)}`)
    break;
    case 3:
        let multiplicacao= numero1*numero2
        console.log(`\n${numero1} X ${numero2} = ${multiplicacao.toFixed(1)}`)
    break;  
    case 4:
        let divisao= numero1/numero2
        console.log(`\n${numero1} / ${numero2} = ${divisao.toFixed(1)}`)
    break;  
    default:
        console.log("\nOperacao Invalida!");
}