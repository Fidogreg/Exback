let n1 = parseInt(prompt("Digite o primeiro número:"));
let n2 = parseInt(prompt("Digite o segundo número:"));
let n3 = parseInt(prompt("Digite o terceiro número:"));

let maiorNumero = n1;

if (n2 > maiorNumero) {
  maiorNumero = n2;
}
if (n3 > maiorNumero) {
  maiorNumero = n3;
}
console.log("O maior número é:", maiorNumero);