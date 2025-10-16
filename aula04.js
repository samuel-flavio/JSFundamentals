//Atividade 1: Boas Vindas
console.log("Boas Vindas!");

//Atividade 2: Variáveis e uso do console
let nome = "Samuel";
console.log("Olá " + nome);

//Atividade 3: Variáveis e uso do alert
alert("Olá " + nome + ", seja bem vindo(a)!");

//Atividade 4: Uso do prompt e concatenação
let linguagem = prompt("Qual sua linguagem de programação favorita?");
console.log("A minha linguagem favorita é " + linguagem);

//Atividade 5: Operadores Aritméticos e concatenação
let valor1 = 10;
let valor2 = 20;
let resultado = valor1 + valor2;
console.log("O resultado da soma entre " + valor1 + " e " + valor2 + " é igual a " + resultado);

//Atividade 6: Subtração
resultado = valor1 - valor2;
console.log("O resultado da subtração entre " + valor1 + " e " + valor2 + " é igual a " + resultado);


//Atividade 7: Condicionais
let idade = prompt("Qual sua idade?");
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

//Atividade 8: Condicionais com múltiplas condições
let numero = prompt("Digite um número:");
if (numero > 0) {
    console.log("O número é positivo.");
}   else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

//Atividade 9 : Laços de Repetição
let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

//Atividade 10: condicionais
let nota = prompt("Digite sua nota (0 a 10):");
if (nota >= 7) {
    console.log("Aprovado");
}   else {
    console.log("Reprovado");
}

//Atividade 11: math.random
let numeroAleatorio = Math.random() * 10;
console.log("Número aleatório é: " + numeroAleatorio);

//Atividade 12: math.random
numeroAleatorio = parseInt(Math.random()*10+1);
console.log("Número aleatório entre 1 e 10: " + numeroAleatorio);

//Atividade 13: math.random
numeroAleatorio = parseInt(Math.random()*1000+1);
console.log("Número aleatório entre 1 e 1000: " + numeroAleatorio);