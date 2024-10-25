let codAluno = prompt("Digite o código do aluno:");
let not1 = parseFloat(prompt("Digite a primeira nota:"));
let not2 = parseFloat(prompt("Digite a segunda nota:"));
let not3 = parseFloat(prompt("Digite a terceira nota:"));

let maiorNota = not1;
if (not2 > maiorNota) {
    maiorNota = not2;
}
if (not3 > maiorNota) {
    maiorNota = not3;
}

let mediapon = (maiorNota * 4 + (not1 + not2 + not3 - maiorNota) * 3) / 10;

if (mediapon >= 5) {
  console.log("Código do aluno:", codAluno);
  console.log("Notas:", not1, not2, not3);
  console.log("Média ponderada:", mediapon);
  console.log("APROVADO");
} else {
  console.log("Código do aluno:", codAluno);
  console.log("Notas:", not1, not2, not3);
  console.log("Média ponderada:", mediapon);
  console.log("REPROVADO");
}