const { read } = require("fs");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let computersNumber = Math.floor(Math.random() * 100);
let guessedNumber = 0;

function promtReadLine() {
    readline.question(`Give me a number from 1 to 100: `, (number) => {
        guessedNumber = Number(number);

        if (0 <= guessedNumber && guessedNumber <= 100) {
            if (guessedNumber == computersNumber) {
                console.log(`Well done my young paduan! Your guess is right! The number is ${guessedNumber}`);
                return readline.close();
            } else if (guessedNumber < computersNumber) {
                console.log('You picked up too low number! Try again!');
                promtReadLine();
            } else if (guessedNumber > computersNumber) {
                console.log('You picked up too high number! Try again!');
                promtReadLine();
            }
            } else   {
                console.log('You need to choose a number!');
                promtReadLine();
        }
    });
}
promtReadLine();
