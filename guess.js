#!/usr/bin/env node


const { program } = require("commander");

program
    .option('-g, --guess <guess>', 'Your guess number');

program.parse(); // Takes input from the user

const readUserInput = program.opts();

const userGuess = parseInt(readUserInput.guess); // Convert input to a number

const generateRandomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1-10

if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    console.log("❌ Please enter a **valid number** between 1 and 10!");
    process.exit(1);
}

if (userGuess === generateRandomNumber) {
    console.log("✔  Correct! You guessed the right number!");
} else {
    console.log(`❌ Wrong guess! The correct number was ${generateRandomNumber}.`);
}

console.log("developed by faisalkhandev");