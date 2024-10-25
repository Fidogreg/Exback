let indicepol = parseFloat(prompt("Digite o índice de poluição:"));

if (indicepol >= 0.5) {
    console.log("Todos os grupos de indústrias devem ser notificados a paralisarem suas atividades.");
} else if (indicepol >= 0.4) {
    console.log("Os grupos 1 e 2 devem ser notificados a paralisarem suas atividades.");
} else if (indicepol >= 0.3) {
    console.log("O grupo 1 deve ser notificado a paralisarem suas atividades.");
} else {
    console.log("O índice de poluição está dentro dos limites aceitáveis.");
}