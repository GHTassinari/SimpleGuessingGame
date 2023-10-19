let result = prompt("Guess the number from 0 to 10:");
const randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

while (Number(result) != randomNumber) {
  result = prompt("You didn't get it right, guess it again: ");
  xAttempts++;
}

alert(
  `Congratulations! You guessed the number ${randomNumber} after ${xAttempts} attempts!`
);
