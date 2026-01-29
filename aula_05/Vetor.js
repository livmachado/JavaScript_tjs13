const read= require("readline-sync")

let numeros= [10, 25, 5, 45, 85, 95];
let cores= Array(5);

for(let i= 0; i<numeros.length; i++){
    console.log(`numeros[${i}] = ${numeros[i]}`)
}

console.log("O tamanho do vetor é: ", numeros.length)

console.table(numeros);

for(let i= 0; i<cores.length; i++){
    cores[i]= read.question("Digite o nome de uma cor: ")
}

console.table(cores);
console.table(numeros.sort((a,b) => b-a));
console.table(cores.sort()); //ordem alfabetica 

console.log("Qual eh a posicao do elemnto 5 no vetor numeros: ", numeros.indexOf(5))