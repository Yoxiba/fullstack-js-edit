// Change heading:

const prompt = require("prompt-sync")();

const inputpeso = prompt("Digite o valor de pesso ");
const inputaltura = prompt("Digite o valor de altura ");

const peso = parseFloat(inputpeso);// o valor 10 é para indicar que é decimal, se nao tiver isto ira da NAN em X9.
const altura = parseFloat(inputaltura);//parsefloat, numero por fatores 
const imc = altura / Math.pow(peso, 2);

console.log("IMC:" + imc);




