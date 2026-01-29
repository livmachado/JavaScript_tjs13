const read = require("readline-sync");

let nome = read.question("Digite o Nome do doador: ");
let idade = read.questionInt("Digite a Idade do doador: ");
let ehDoador = read.question('Primeira doacao de sangue? [S/N] ', {
    trueValue: 's',
    falseValue: 'n'
});

if (idade>=18 && idade<=69){
    if(idade>=60){
        ehDoador? console.log(`${nome} não está apto para doar sangue!`): console.log(`${nome} está apto para doar sangue!`);
    } else {
        console.log(`${nome} está apto para doar sangue!`)
    }
} else {
    console.log(`${nome} não está apto para doar sangue!`)
}
