let frase = prompt("Digite uma frase:");
frase = frase.trim();
let numeroDePalavras = frase.split(" ").length;

console.log(`O número de palavras na frase é: ${numeroDePalavras}`);