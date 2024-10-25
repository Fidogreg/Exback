const valor = parseFloat(prompt("Digite o valor a ser sacado:"));

let valorsobra = valor;
let notas100 = Math.floor(valorsobra / 100);
valorsobra %= 100;
let notas50 = Math.floor(valorsobra / 50);
valorsobra %= 50;
let notas20 = Math.floor(valorsobra / 20);
valorsobra %= 20;
let notas10 = Math.floor(valorsobra / 10);
valorsobra %= 10;
let notas5 = Math.floor(valorsobra / 5);
valorsobra %= 5;
let notas1 = valorsobra;

console.log("Notas de 100:", notas100);
console.log("Notas de 50:", notas50);
console.log("Notas de 20:", notas20);
console.log("Notas de 10:", notas10);
console.log("Notas de 5:", notas5);
console.log("Notas de 1:", notas1);