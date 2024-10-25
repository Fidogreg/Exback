const codigoprdt = parseInt(prompt("Digite o código do produto que deseja:\n1 - 1001=5.32\n2 - 1324=.6.45\n3 - 6548=2.37\n4 - 0987=5.32\n5 - 7623=6.45"));
let quantidade = parseInt(prompt("Diga a quantidade de produtos que você deseja:"));

if(codigoprdt == 1001){

    let precototal = (quantidade * 5.32);

    console.log("O preço total a pagar é R$"+ precototal);

}if(codigoprdt == 1324 ){

    let precototal = (quantidade * 6.45);

    console.log("O preço total a pagar é R$"+ precototal);

}if(codigoprdt == 6548){

    let precototal = (quantidade * 2.37);

    console.log("O preço total a pagar é R$"+ precototal);
    
}if(codigoprdt == 0987){

    let precototal = (quantidade * 5.32);

    console.log("O preço total a pagar é R$"+ precototal);

}if(codigoprdt == 7623){

    let precototal = (quantidade * 6.45);
    console.log("O preço total a pagat é R$"+ precototal);
}