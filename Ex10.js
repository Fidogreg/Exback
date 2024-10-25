const saldoMedio = parseFloat(prompt("Digite o seu saldo médio do último ano:"));

let credito;
if (saldoMedio <= 200) {
  credito = 0;
} else if (saldoMedio <= 400) {
  credito = saldoMedio * 0.2;
} else if (saldoMedio <= 600) {
  credito = saldoMedio * 0.3;
} else {
  credito = saldoMedio * 0.4;
}

console.log("Para um saldo médio de R$" +saldoMedio+" , o valor do crédito especial é de R$" +credito+".");