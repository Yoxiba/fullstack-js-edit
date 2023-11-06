// Change heading:

const prompt = require("prompt-sync")();

const inputcelcios = prompt("Digite o valor de celcios ");

const peso = parseFloat(inputpeso);// tofixed ele adicona um ponto e casas decimais, 
const altura = parseFloat(inputaltura);//parsefloat, numero por fatores 
const imc = altura / Math.pow(peso, 2);

console.log("IMC:" + imc);




