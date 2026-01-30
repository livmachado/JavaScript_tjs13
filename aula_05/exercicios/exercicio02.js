const leia = require("readline-sync");

let numeros= Array(10);
let numerosPares=0; 
let numerosImpares=0;

for(i=0; i<10; i++){
    numeros[i]= leia.questionInt(`Digite o ${i+1} numero do intervalo: `);
    if(numeros[i]%2==0){
        numerosPares+=1
    } else {
        numerosImpares+=1
    }
}

console.log("\nTotal de números pares: ", numerosPares)
console.log("Total de números impares: ", numerosImpares)
