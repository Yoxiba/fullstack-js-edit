const prompt = require("prompt-sync")();

const userInput = prompt("mete um numero");
const number = parseInt(userInput, 10);


if (number % 2 === 0) {
    console.log(  "O numero é par" );
} else {
    console.log( "O numero é impar" );
}



