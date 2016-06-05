/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random1 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/


// Create Variables for random1, random 2, diceID1, diceID2 and buton

var random1 = '',
    random2 = '',
    diceID1 = document.getElementById('first-die'),
    diceID2 = document.getElementById('second-die');
    diceButton = document.getElementById('roll-dice');

// Create a function to generate random numbers between 1 and 6
function randomDice() {
  return Math.floor(Math.random() * 6) + 1;
}



// diceRoll function
var rollDice = function() {

  // Add random number to variables
  var firstDie = 'dice-' + randomDice();
  var secondDie = 'dice-' + randomDice();

  // Update the first dice class
  diceID1.className = firstDie;

  // Update the second dice class
  diceID2.className = secondDie;


};


// Check to see if the Dice roll has been hit #roll-dice

diceButton.addEventListener("click", rollDice, false);
