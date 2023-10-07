let maximumNumber = parseInt(prompt('Enter a maximum  number:'));



let targetNumber = Math.floor(Math.random() * maximumNumber + 1);

let guess = prompt('Enter your first guess! or (Type "q" to quit):');
let attempts = 1;

while (parseInt(guess) !== targetNumber) {
  if (guess === 'q') break;
  guess = parseInt(guess);
  if (guess > targetNumber) {
    guess = prompt('Too high! Enter a new guess:');
    attempts++;
  } else if (guess < targetNumber) {
    guess = prompt('Too low! Enter a new guess:');
    attempts++;
  } else {
    guess = prompt('Invalid guess. Please enter a number or type "q" to quit:');
  }

}

if (guess === 'q') {
  console.log('Okay! You quit.');
} else {
  console.log(`You chose ${targetNumber} & you win!`);
  console.log(`You got it! You took ${attempts} attempt(s)`);
}