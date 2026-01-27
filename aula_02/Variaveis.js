"use strict"
//console.log(bonus)

let nome = 'Lívia';
let profissao="Pessoa Desenvolvedora"
let salarioBruto = 3500.90
const bonus= 0.05;
let numero;

console.log(numero);
console.log("O tipo da variável é", typeof(nome));

if(salarioBruto > 1000){
    let mensagem = "Salário > 1000";
    console.log(mensagem)
}

console.log("Salário Liquído: ",
    new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(salarioBruto + (bonus * salarioBruto))
)