const horaini = parseInt(prompt("Digite a hora de início do jogo (0-23):"));
const horafim = parseInt(prompt("Digite a hora de fim do jogo (0-23):"));

if (horaini < 0 || horaini > 23 || horafim < 0 || horafim > 23) {
  console.log("Hora inválida. Por favor, digite um número entre 0 e 23.");
} else {
  let duracao;
  if (horafim >= horaini) {
    duracao = horafim - horaini;
  } else {
    duracao = 24 - horaini + horafim;
  }

  console.log("A duração do jogo foi de", duracao, "horas.");
}