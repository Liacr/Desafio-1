let palavra = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
let maiusculas = palavra.match(/[A-Z]/g).length;

console.log (`Letras maiúsculas: ${maiusculas}`);