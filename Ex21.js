const numeroid = parseInt(prompt("Digite o número de identificação do aluno:"));
const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));
const mediaex = parseFloat(prompt("Digite a média dos exercícios:"));

const mediaapv = (nota1 + nota2 * 2 + nota3 * 3 + mediaex) / 7;

let conceito;
if (mediaapv >= 9) {
    conceito = "A";
} else if (mediaapv >= 7.5) {
    conceito = "B";
} else if (mediaapv >= 6) {
    conceito = "C";
} else if (mediaapv >= 4) {
    conceito = "D";
} else {
    conceito = "E";
}

const situacao = (conceito === "A" || conceito === "B" || conceito === "C") ? "APROVADO" : "REPROVADO";

console.log("Número de identificação:", numeroid);
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Nota 3:", nota3);
console.log("Média dos exercícios:", mediaex);
console.log("Média de aproveitamento:",+mediaapv);
console.log("Conceito:", conceito);
console.log("Situação:", situacao);
