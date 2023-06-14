// dice-roller function
// accpet number from user
// need forloop to detrmine how many random number out
const prompt = require("prompt-sync")();
let num = prompt("plesae give number");
const rollDice = function (num1) {
  let newArray = [];

  for (let i = 0; i < num1; i++) {

    newArray[i] = Math.random();

  }
  return newArray;
}
console.log(rollDice(num));
 //console.log(rollDice(num));d