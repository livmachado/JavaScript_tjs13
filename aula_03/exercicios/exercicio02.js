const read=require("readline-sync");

let numero= read.questionInt("Digite um numero: ");

if(numero>0 && numero%2===0){
    console.log(`O Número ${numero} é par e positivo!`)
} else if (numero<0 && numero%2!==0){
    console.log(`O Número ${numero} é ímpar e negativo!`)
    
} else if(numero<0 && numero%2===0){
    console.log(`O Número ${numero} é par e negativo!`)
} else {
    console.log(`O Número ${numero} é ímpar e positivo!`)
}