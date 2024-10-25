const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));
const nota3 = parseFloat(prompt("Digite a terceira nota: "));

const tpmedia= parseInt(prompt("Escolha o tipo de média:\n1 - Aritmética\n2 - Ponderada (3, 3, 4)\n3 - Harmônica"));


if(tpmedia == 1){

    let aritmetica = (nota1 + nota2 + nota3/ 3);
    
    console.log("a media aritmética desse aluno é: "+ aritmetica);
    
}
if(tpmedia == 2){

    let ponderada = ((nota1*3)+(nota2*3)+(nota3*4)/10);

    console.log("a media ponderada desse aluno é: "+ ponderada);

}
if(tpmedia == 3){

    let harmônica = (3/(1/nota1)+(1/nota2)+(1/nota3));

    console.log("a media harmônica desse aluno é: "+ harmônica);

}