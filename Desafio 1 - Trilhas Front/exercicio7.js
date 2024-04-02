// let preco1 = 2.50;
// let preco2 = 3.75;
// let preco3 = 1.99;
// let total = preco1 + preco2 + preco3;

// console.log (`O valor total é: ${total}`);

let precos = [2.50, 3.75, 1.99];
let valorTotal = 0;
for (i = 0; i < precos.length; i++) {
  valorTotal = valorTotal + precos[i]
}

console.log (`O valor total é: ${valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);


// let soma = precos.reduce(function (valorTotal, valorAtual) {
//   return valorTotal + valorAtual;
// }, 0);

// console.log (`O valor total é: ${soma}`);