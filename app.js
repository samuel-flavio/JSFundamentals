alert("Bem vindo ao Jogo de Adivinhação!");
let numeroSecreto = parseInt(Math.random() * 100) + 1;
let tentativas = 0;
let acertou = false;
while (!acertou) {
    let palpite = parseInt(prompt("Digite um número entre 1 e 100:"));
    tentativas++;
    if (palpite === numeroSecreto) {
        acertou = true;
    }
    else if (palpite < numeroSecreto) {
        alert("Tente um número maior!");
    }   else {
        alert("Tente um número menor!");
    }
}
let palavraTentativas = tentativas === 1 ? "tentativa" : "tentativas";
alert("Parabéns! Você acertou o número " + numeroSecreto + " em " + tentativas + " " + palavraTentativas + "!");
console.log("Fim do jogo.");