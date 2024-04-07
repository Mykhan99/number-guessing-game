#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number 1 TO 6: ",
    }
]);
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Computer Generated Number:"),
    console.log(randomNumber);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congradulation you guessed the right number.");
}
else {
    console.log("You guessed wrong nnumber.");
}
