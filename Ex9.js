const altura = parseFloat(prompt("Digite sua altura: "));
const genero = prompt("Qual o seu gênero? Digite 1 para masculino ou 2 para feminino: ");

if(genero == 1){

    let pesoideal = (72.7*altura)-58;

    console.log("o peso Ideal para a sua altura seria : "+pesoideal+ " kg.");

}
if(genero == 2){

    let pesoideal = (62.1*altura)-44.7;

    console.log("O peso ideal para a sua altura seria : " +pesoideal + " kg.");
}