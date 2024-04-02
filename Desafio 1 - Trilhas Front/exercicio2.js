let sorteio = [15, 8, 90, 75, 102, 6, 2];
//let menor = Math.min(15, 8, 90, 75, 102, 6, 2);
//let maior = Math.max(15, 8, 90, 75, 102, 6, 2);
let menor = Math.min(...sorteio);
let maior = Math.max(...sorteio);

console.log(`Menor número: ${menor}`);
console.log(`Maior número: ${maior}`);