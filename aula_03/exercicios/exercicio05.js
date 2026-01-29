const read = require("readline-sync");

console.log("============================================");
console.log("       Vendinha da fulana          ");
console.log("============================================");
console.log("1 - Cachorro Quente | R$10.00               ");
console.log("2 - X-Salada        | R$15.00               ");
console.log("3 - X-Bacon         | R$18.00               ");
console.log("4 - Bauru           | R$12.00              ");
console.log("5 - Refrigerante    | R$8.00                ");
console.log("6 - Suco de laranja | R$13.00               ");
console.log("============================================");
console.log("                                            ");


let codigo = read.questionInt("Codigo do produto: ");
let qnt= read.questionInt("Quantidade: ")
let preco, produto

switch (codigo) {
    case 1:
        produto="Cachorro Quente"
        preco= 10.00
    break;
    case 2:
        produto="X-Salada"
        preco= 15.00
    break;
    case 3:
        produto="X-Bacon"
        preco= 18.00
    break;
    case 4:
        produto="Bauru"
        preco= 12.00
    break;
    case 5:
        produto="Refrigerante"
        preco= 8.00
    break;
    case 6:
        produto="Suco de laranja"
        preco= 13.00
    break;
    default:
        console.log("Operacao Invalida!");
}
    
console.log(`Produto: ${produto}`)
console.log('Valor total: ', 
    new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(preco*qnt)
)