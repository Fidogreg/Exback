const horaini = parseInt(prompt("Digite a hora de início do jogo:"));
const minutoini = parseInt(prompt("Digite os minutos de início do jogo:"));

const horafim = parseInt(prompt("Digite a hora de término do jogo:"));
const minutofim = parseInt(prompt("Digite os minutos de término do jogo:"));

const inicioemmin = horaini * 60 + minutoini;
const fimemmin = horafim * 60 + minutofim;

let duracaomin;
if (fimemmin >= inicioemmin) {
    duracaoemmin = fimemmin - inicioemmin;
} else {
  
    duracaoemmin = (fimemmin + 1440) - inicioemmin;
}

const horas = Math.floor(duracaoemmin / 60);
const minutos = duracaoemmin % 60;

console.log("A duração do jogo foi de", horas, "horas e", minutos, "minutos.");