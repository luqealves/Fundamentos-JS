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
let endereco = null;
console.log("Endereço: " , endereco);

console.log("multiplicação: ", endereco * 3);

let telefone;
console.log("Telefone: ", telefone);

console.log("multiplicação: ", telefone * 3);

// Operadores
let a = 10, b = 5;
console.log("Soma:", a + b); // Operador aritmético
console.log("Maior que:", a > b); // Operador de comparação
console.log("E lógico:", a > 0 && b > 0); // Operador lógico

// Coerção de tipos
console.log("Coerção implícita:", '5' - 3); // Resultado: 2
console.log("Coerção explícita:", Number('5') + 3); // Resultado: 8

// Controle de fluxo
let idadeUsuario = 20;
if (idadeUsuario < 18) {
    console.log("Menor de idade");
} else if (idadeUsuario === 18) {
    console.log("Tem 18 anos");
} else {
    console.log("Maior de idade");
}

// Convertendo os valores de entrada para números
let num1 = parseFloat(prompt("Digite o primeiro número:")); // Conversão para número de ponto flutuante
let num2 = parseFloat(prompt("Digite o segundo número:")); // Conversão para número de ponto flutuante
let resultado = 0;

// Convertendo a opção para número inteiro
let opcao = parseInt(prompt("Escolha a operação: 1-Multiplicação, 2-Divisão, 3-Soma, 4-Subtração")); // Conversão para número inteiro

// Usando switch para realizar a operação escolhida
switch (opcao) {
    case 1:
        console.log("Multiplicação: ");
        resultado = num1 * num2; // Multiplicação
        console.log(resultado);
        break;
    case 2:
        console.log("Divisão: ");
        resultado = num1 / num2; // Divisão
        console.log(resultado);
        break;
    case 3:
        console.log("Soma: ");
        resultado = num1 + num2; // Soma
        console.log(resultado);
        break;
    case 4:
        console.log("Subtração: ");
        resultado = num1 - num2; // Subtração
        console.log(resultado);
        break;
    default:
        console.log("Opção inválida"); // Caso a opção não seja válida
}
// Operador ternário
let podeDirigir = idade >= 18 ? "Sim" : "Não";
console.log("Pode dirigir?", podeDirigir);

// Tratamento de erro
try {
    let resultado = 10 / 0;
    console.log("Resultado:", resultado);
} catch (erro) {
    console.log("Erro:", erro.message);
}

// Estruturas de repetição
for (let i = 0; i < 5; i++) {
    console.log("For loop:", i);
}

while (contador < 3) {
    console.log("While loop:", contador);
    contador++;
}

do {
    console.log("Do...while loop:", contador);
    contador--;
} while (contador > 0);

let array = ["a", "b", "c"];
for (let elemento of array) {
    console.log("For...of loop:", elemento);
}

let objeto = { nome: "Lucas", idade: 29 };
for (let chave in objeto) {
    console.log("For...in loop:", chave, "=", objeto[chave]);
}