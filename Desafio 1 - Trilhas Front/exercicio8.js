let multa = 0.50;
let atraso = 7;
let total = multa * atraso;

console.log(`Você deverá pagar: ${total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);