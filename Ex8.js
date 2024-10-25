const cardapio = {
  100: 1.20,
  101: 1.30,
  102: 1.50,
  103: 1.20,
  104: 1.30,
  105: 1.00
};

const codigoItem = parseInt(prompt("Digite o código do item:"));
const quantidade = parseInt(prompt("Digite a quantidade:"));

const valorTotal = cardapio[codigoItem] * quantidade;

if (valorTotal) {
  console.log(`O valor total a ser pago é: R$ ${valorTotal.toFixed(2)}`);
} else {
  console.log("Item não encontrado no cardápio.");
}