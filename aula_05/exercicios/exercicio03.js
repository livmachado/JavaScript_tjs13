const leia = require("readline-sync");

let idade  =  leia.questionInt("Digite uma idade:")
let menorde21 = 0;
let maiorde50 =0;

while (idade>0){
    if(idade<21){
        menorde21+=1
    } else if (idade>50){
        maiorde50+=1
    }
    idade  =  leia.questionInt("Digite uma idade:")
}

console.log("Total de pessoas menores de 21 anos: ", menorde21)
console.log("Total de pessoas maiores de 50 anos: ", maiorde50)