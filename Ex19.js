const ipi = parseFloat(prompt("Digite a porcentagem do IPI:"));
const codigopeca1 = prompt("Digite o código da peça 1:");
const valorpeca1 = parseFloat(prompt("Digite o valor unitário da peça 1:"));
const quantidadepeca1 = parseInt(prompt("Digite a quantidade da peça 1:"));
const codigopeca2 = prompt("Digite o código da peça 2:");
const valorpeca2 = parseFloat(prompt("Digite o valor unitário da peça 2:"));
const quantidadepeca2 = parseInt(prompt("Digite a quantidade da peça 2:"));

const valortotalsipi = (valorpeca1 * quantidadepeca1) + (valorpeca2 * quantidadepeca2);

const valoripi = valortotalsipi * (ipi / 100);

const valortotalcmipi = valortotalsipi + valoripi;

// Imprimindo o resultado
console.log("O valor total a ser pago é:",+valortotalcmipi);