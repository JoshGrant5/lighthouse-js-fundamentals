let prompt = require("prompt-sync")();
console.log("Number Guesser: I'm thinking of a random number from 0 to 100, let's see how many tries it takes you to figure it out!");
let number = Math.floor(Math.random() * 101);
let counter = 0; // counter for number of tries by the user
let guesses = []; // array for storing guesses so that multiple guesses of the same number are only counted as one try
answer = Number(prompt("Guess a number: "));
let playing = true; // condition for game loop

while (playing) {
  if (answer < number) {
    if (guesses.includes(answer)) {
      console.log("You've already guessed that number! Try again!")
      answer = prompt("Guess a number: ");
    } else {
      console.log('Too Low!');
      counter++;
      guesses.push(answer);
      answer = Number(prompt("Guess a number: "));
    }
  } else if (answer > number) {
    if (guesses.includes(answer)) {
      console.log("You've already guessed that number! Try again!")
      answer = Number(prompt("Guess a number: "));
    } else {
      console.log('Too High!');
      counter++;
      guesses.push(answer);
      answer = Number(prompt("Guess a number: "));
    }
  } else if (!Number.isInteger(answer)) {
    console.log('Not a number, try again!');
    answer = Number(prompt("Guess a number: "));
  } else if (answer === number) {
    counter++;
    console.log(`You got it! It only took you ${counter} guesses!`);
    let restart = prompt('Would you like to play again? (y/n): '); // ask user if they'd like to restart or end the game
    if (restart === 'y') {
      // reset game 
      number = Math.floor(Math.random() * 101);
      counter = 0; 
      guesses = [];
      answer = Number(prompt("Guess a number: "));
    } else {
      console.log('Thanks for playing!');
      playing = false;
    }
  };
}