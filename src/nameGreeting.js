import { FortuneCookie } from "./fortuneCookie.js"

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

const answer = await userInput.question("What is your name? ")

console.log("Hey, " + answer + "! Down below is a wisdom for you");

userInput.close();


const fortuneCookie = new FortuneCookie()
let wisdom = await fortuneCookie.getFortuneCookie()
console.log("Wisdom: " + wisdom.fortune)


