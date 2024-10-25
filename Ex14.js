const codcargo = prompt("Digite o código do seu cargo:\n1 - Gerente=101\n2 - Engenheiro=102\n3 - Técnico=103\n4 - Outro=104");
const salarioatual = parseFloat(prompt("Digite seu salário atual: "));

if(codcargo == 101){

     const salarionovo = (salarioatual+(dif));

    const dif = (salarioatual * 0.10);

    console.log("seu salario anterior era R$"+salarioatual);
    console.log("seu salário atual é R$"+salarionovo);
    console.log("A diferença é de R$"+dif);

}if(codcargo == 102){

    const salarionovo = (salarioatual+(dif));

    const dif = (salarioatual * 0.20);

    console.log("seu salário anterior era R$"+salarioatual);
    console.log("seu salário atual é R$"+salarionovo );
    console.log("A diferença é de R$"+dif);

}if(codcargo == 103){

    const salarionovo = (salarioatual+(dif));

    const dif = (salarioatual * 0.30);

    console.log("seu salário anterior era R$"+salarioatual);
    console.log("seu salário atual é R$"+salarionovo);
    console.log("A diferença é de R$"+dif);

}if(codcargo == 104){

    const salarionovo= (salarioatual+(dif));

    const dif = (salarioatual * 0.40);

    console.log("seu salário anterior era R$"+salarioatual);
    console.log("seu salário atual é R$"+salarionovo);
    console.log("A diferença é de R$"+ dif);
}