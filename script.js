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
// undefined quer dizer que a variável existe, mas não tem valor, não iniciado


let endereco = null;
console.log("Endereço: " , endereco);
//console.log("multiplicação: ", endereco * 2);

let telefone;
console.log("Telefone: ", telefone);
//console.log("multiplicação: ", telefone * 2);

//se esse valor for
if (nome) {
    console.log("multiplicação: ", nome * 2);
    //nao se multiplica string
} else {
    console.log("nome não existe");
}
//COERÇÃO IMPLICITA DE TIPOS
//Exemplos de valores que são tratados como false em contextos booleanos
//Not a Number (NaN)
//null e undefined => sao tratados com false em contextos booleanos
//Strings e Numeros => são tratados como true em contextos booleanos, exceto o 0 e string
//exceto o 0 e string vazia ("") => é tratado como false em contextos booleanos

//em contextos de interação diferentes tipos, o JavaScript tenta converter um tipo comum (coerção de tipos)


console.log("5" + 1); //string 51
console.log("5" - 1); //number 4
console.log("5" * 2); //number 10
console.log("5" / 2); //number 2.5

let numero = "1";

let numeroString = String(numero); 

let stringNumero = "123";
let stringNumeroNumero = Number(stringNumero);

let segundoNumero = (10).toString();

console.log(typeof numero, numero);
console.log(typeof numeroString, numeroString);
console.log(typeof stringNumero, stringNumero);
console.log(typeof stringNumeroNumero, stringNumeroNumero);

let stringInvalida = "Lucas";
let stringInvalidaNumero = Number(stringInvalida);
console.log(typeof stringInvalida, stringInvalida);
console.log(typeof stringInvalidaNumero, stringInvalidaNumero);


//let, const, var

// let e usado para declarar variaveis que podem mudar de valor
// const não pode ser declarada sem valor inicial

//ex

const pi = 3.14; //constante
const horasDoDia = 24;


console.log("Horas do dia: ", horasDoDia);
console.log("PI: ", pi);

//var e usado para declarar variaveis, que podem mudar de valor
//var tem escopo global ou de função

for (var i = 0; i < 5; i++) {
    var nomeVar = "Lucas";
    console.log("Nome var: ", nomeVar);
    console.log("i dentro do for: ", i);
}

for (var i = 0; i < 5; i++) {
    var nomeVar = "Teste ";
    console.log("Nome var: ", nomeVar);
    console.log("i dentro do for: ", i);
}

let count = 0;
count ++;
count ++;
count --;
console.log("Contador: ", count);


// ESTRUTURAS DE REPETIÇÃO
// for, while, do while
// for - quando sabemos o número de repetições
// while - quando não sabemos o número de repetições
// do while - executa pelo menos uma vez, depois verifica a condição

