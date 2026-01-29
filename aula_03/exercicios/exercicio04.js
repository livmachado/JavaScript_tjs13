const read = require("readline-sync");

console.log("============================================");
console.log("           ADIVINHA O ANIMAL                ");
console.log("============================================");
console.log("Escolha um animal:                          ");
console.log("   Águia | Lagarta | Pomba | Sanguessuga |  ");
console.log("     Homem | Vaca | Pulga | Minhoca         ");
console.log("============================================");
console.log("                                            ");



let caracteristica1 = read.question("Seu animal eh Vertebrado ou Invertebrado? ").toLowerCase();
let caracteristica2, caracteristica3

if(caracteristica1 === "invertebrado"){
    caracteristica2= read.question("Seu animal eh Inseto ou Anelideo? ").toLowerCase();
    if(caracteristica2 === "inseto"){
        caracteristica3= read.question("Seu animal eh Hematofago ou Herbivoro? ").toLowerCase();
        if (caracteristica3 === "hematofago"){
            console.log("Seu animal eh Pulga");
        } else{
            console.log("Seu animal eh Lagarta");
        }
    } else {
        caracteristica3= read.question("Seu animal eh Hematofago ou Onivoro? ").toLowerCase();
        if (caracteristica3 === "onivoro"){
            console.log("Seu animal eh Minhoca");
        } else{
            console.log("Seu animal eh Sanguessuga");
        }
    }
} else {
    caracteristica2= read.question("Seu animal eh Ave ou Mamifero? ").toLowerCase();
    if (caracteristica2==="mamifero"){
        caracteristica3= read.question("Seu animal eh Onivoro ou Herbivoro? ").toLowerCase();
        if (caracteristica3=== "onivoro"){
            console.log("Seu animal eh Homem")
        } else {
            console.log("Seu animal eh Vaca")
        }
    } else {
        caracteristica3= read.question("Seu animal eh Carnivoro ou Onivoro? ").toLowerCase();
        if (caracteristica3=== "carnivoro"){
            console.log("Seu animal eh Aguia")
        } else {
            console.log("Seu animal eh Pomba")
        }
    }
}