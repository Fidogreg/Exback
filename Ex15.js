const ladoA = parseInt(prompt("Digite o valor do lado A:"));
const ladoB = parseInt(prompt("Digite o valor do lado B:"));
const ladoC = parseInt(prompt("Digite o valor do lado C:"));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  
  const semi = (ladoA + ladoB + ladoC) / 2;
  const area = Math.sqrt(semi * (semi - ladoA) * (semi - ladoB) * (semi - ladoC));

  console.log("Os lados formam um triângulo e sua área é:", area);
} else {
  console.log("Os lados", ladoA, ladoB, ladoC, "não formam um triângulo.");
}