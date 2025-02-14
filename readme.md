# 🎯 Guess Game CLI - A Fun Number Guessing Game 🎯

[![NPM Version](https://img.shields.io/npm/v/@faisalkhandev/guess-game.svg?style=flat-square)](https://www.npmjs.com/package/@faisalkhandev/guess-game)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

🚀 **Guess Game CLI** is a simple and interactive **number guessing game** for the terminal, built with **Node.js**. Play directly in your terminal by guessing a number between 1 and 10! 🕹️

## **✨ Features**

✅ Fun and interactive CLI experience  
✅ Supports both `--guess` and `-g` flags  
✅ Built using `Commander.js`  
✅ Lightweight and fast  
✅ Cross-platform (Windows, macOS, Linux)

---

## **📌 Installation**

Install the package globally using npm:

npm install @faisalkhandev/guess-game

Or use it directly with npx (no installation required):

npx @faisalkhandev/guess-game --guess 5

🎮 How to Play

Simply run the command:

guess --guess <number>

or use the short version:

guess -g <number>

## Example

guess --guess 7
or
guess -g 7

If you guess the correct number, you win! Otherwise, the correct answer will be revealed.

## 📦 Usage in a Project

You can also use it in a Node.js project:

const guessGame = require("@faisalkhandev/guess-game");
guessGame();

## 🛠️ Development

If you want to contribute or modify the game:

git clone https://github.com/faisalkhandev/guessGamePackage.git

cd guessGamePackage

npm install

node guess.js --guess 5

📝 License
This project is licensed under the MIT License.

📌 Created by Faisal Khan Dev 🚀
