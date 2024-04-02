let numeros = [23, 16, 11, 8, 19, 14, 5, 21];

function verificarSeEhPrimo(numeroAtual) {
  for (let numeroAbaixo = numeroAtual - 1; numeroAbaixo > 1; numeroAbaixo--) {
    if (numeroAtual % numeroAbaixo == 0) {
      return false;
    }
  }
  return true;
}

function percorrerLista(numeros) {
  let saoPrimos = [];
  for (let i = 0; i < numeros.length; i++) {
    let numeroAtual = numeros[i];
    let numeroAtualEhPrimo = verificarSeEhPrimo(numeroAtual);
    if (numeroAtualEhPrimo == true) {
      saoPrimos.push(numeroAtual);
    }
  }
  console.log(`Números primos: ${saoPrimos}`);
}

percorrerLista(numeros);