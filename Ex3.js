let a = parseFloat(prompt("Digite o primeiro número:"));
let b = parseFloat(prompt("Digite o segundo número:"));

if (a % b === 0 || b % a === 0) {
  console.log("São múltiplos");
} else {
  console.log("Não são múltiplos");
}