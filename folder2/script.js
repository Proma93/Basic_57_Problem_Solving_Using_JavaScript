/*7. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".*/

const num = Math.ceil(Math.random() * 10);
console.log(num);
const guess_number = prompt('Guess the number between 1 to 10');
if (guess_number == num)
console.log('Good Work');
else 
console.log('Not Matched, the number was: ' + guess_number);
console.log("-----7th exercise is done-----")
