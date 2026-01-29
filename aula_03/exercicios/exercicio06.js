const read = require("readline-sync");

console.log("============================================");
console.log("                   CARGOS                   ");
console.log("============================================");
console.log("1 - Gerente        | 10%                    ");
console.log("2 - Vendedor       |  7%                    ");
console.log("3 - Supervisor     |  9%                    ");
console.log("4 - Motorista      |  6%                    ");
console.log("5 - Estoquista     |  5%                    ");
console.log("6 - Tecnico de TI  |  8%                    ");
console.log("============================================");
console.log("                                            ");


let nome = read.question("Nome do colaborador:");
let codCargo = read.questionInt("Cargo:");
let salario = read.questionFloat("Salario:");
let reajuste, cargo, novoSalario;

switch (codCargo) {
    case 1:
        cargo= "Gerente"
        reajuste= 0.1
    break;
    case 2:
        cargo="Vendedor"
        reajuste= 0.07
    break;
    case 3:
        cargo="Supervisor"
        reajuste= 0.09
    break;  
    case 4:
        cargo="Motorista"
        reajuste= 0.06
    break;  
    case 5:
        cargo="Estoquista"
        reajuste= 0.05
    break;  
    case 6:
        cargo="Tecnico de TI"
        reajuste= 13.00
    break;  
    default:
        console.log("Operacao Invalida!");
}

novoSalario= salario + (reajuste*salario)
console.log("\nNome do Colaborador: ", nome)
console.log("Cargo: ", cargo)
console.log("Salario: ", 
    new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(novoSalario))