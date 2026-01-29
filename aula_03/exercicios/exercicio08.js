const read = require("readline-sync");

console.log("============================================");
console.log("              Conta Bancaria                ");
console.log("============================================");
console.log("1 - Saldo    ");
console.log("2 - Saque    ");
console.log("3 - Deposito ");
console.log("============================================");
console.log("                                            ");

let saldo = 1000
let saldoFormatado= new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(saldo)
let operacao= read.questionInt("Operacao: ")
let valor;

switch (operacao) {
    case 1:
        console.log("\nOperacao - Saldo")
        console.log("Saldo: ", saldoFormatado )
        break;
        case 2:
            valor= read.questionFloat("Valor: ")
            console.log("\nOperacao - Saque")
        if(saldo > valor){
            novoSaldo= saldo - valor
            console.log("Novo Saldo: ", new Intl.NumberFormat('pt-BR',{
                style: 'currency',
                currency: 'BRL',
            }).format(novoSaldo))
        } else {
            console.log("Saldo Insuficiente!")
        }
    break;
    case 3:
        valor= read.questionFloat("Valor: ")
        novoSaldo= saldo + valor
        console.log("\nOperacao - Deposito")
        console.log("Novo Saldo: ", new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL',
        }).format(novoSaldo))

    break;  
    default:
        console.log("\nOperacao Invalida!");
}