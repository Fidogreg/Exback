const codigoprdt = prompt("Digite o código do produto que deseja:\n1 - ABCD=5.30\n2 - XYPK=6.00\n3 - KLMP=3.20\n4 - QRST=2.50");
let quantidade = parseInt(prompt("Diga a quantidade de produtos que você deseja:"));

if(codigoprdt == 'ABCD'){

    let precototal = (quantidade * 5.30);

    console.log("O preço total a pagar é R$"+ precototal);

}else {
  console.log("Código de produto inválido");
}
if(codigoprdt == 'XYPK' ){

    let precototal = (quantidade * 6.00);

    console.log("O preço total a pagar é R$"+ precototal);

}else {
  console.log("Código de produto inválido");
}
if(codigoprdt == 'KLMP'){

    let precototal = (quantidade * 3.20);

    console.log("O preço total a pagar é R$"+ precototal);
    
}else {
  console.log("Código de produto inválido");
}
if(codigoprdt == 'QRST'){

    let precototal = (quantidade * 2.50);

    console.log("O preço total a pagar é R$"+ precototal);

} else {
  console.log("Código de produto inválido.");
}