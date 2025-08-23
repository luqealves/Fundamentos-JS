contador = 0;
// Tipos de dados primitivos    
console.log("Olá, mundo!");

// string
let nome = "Lucas Alves";
console.log("Meu nome é " + nome);

// number
let idade = 29;
console.log("voce tem " + idade + " anos");

// boolean
let eMaiorDeIdade = idade >=18;
console.log("É maior de idade? " + eMaiorDeIdade);

//null e undefined
// quer dizer que a variável existe, mas não tem valor, não iniciado
let endereco = null;
console.log("Endereço: " , endereco);
//console.log("multiplicação: ", endereco * 2);

let telefone;
console.log("Telefone: ", telefone);
//console.log("multiplicação: ", telefone * 2);


if (endereco) {
    console.log("multiplicação: ", endereco * 2);
} else {
    console.log("Telefone não existe");
}