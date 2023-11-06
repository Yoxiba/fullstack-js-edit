// Change heading:

const prompt = require("prompt-sync")();

const inputX = prompt("Digite o valor de x ");
const inputY = prompt("Digite o valor de y ");

const x = parseInt(inputX, 10);// o valor 10 é para indicar que é decimal, se nao tiver isto ira da NAN em X9.
const y = parseInt(inputY, 10);// parseint é numero inteiro.

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);