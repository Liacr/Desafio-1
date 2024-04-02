let dataNascimentoEmString = prompt("Escreva sua data de nascimento no formato yyyy-MM-dd: ");

function calcularIdade() {
  let dataNascimento = new Date(dataNascimentoEmString);
  let dataHoje = new Date();

  let anoDiferenca = dataHoje.getFullYear() - dataNascimento.getFullYear();
  let mesDiferenca = dataHoje.getMonth() - dataNascimento.getMonth();
  let diaDiferenca = dataHoje.getDay() - dataNascimento.getDay();

  if (mesDiferenca > 0) {
    return anoDiferenca;
  } else if (mesDiferenca < 0) {
    return anoDiferenca - 1;
  } else {
    return diaDiferenca >= 0 ? anoDiferenca : anoDiferenca - 1;
    //  if (diaDiferenca >= 0) {
    //   idade = anoDiferenca;
    //  } else {
    //   idade = anoDiferenca - 1;
    //  }
  }
}
let idade = calcularIdade();
let palavraAno = idade > 1 ? "anos" : "ano";
console.log(`A sua idade é: ${idade} ${palavraAno}`);