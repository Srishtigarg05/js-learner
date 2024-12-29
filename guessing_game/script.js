// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize turn counter
let turns = 0;

// Function to handle the game logic
function playGame() {
    // Fetch the user input and result display element
    const guessInput = parseInt(document.getElementById("guessInput").value);
    const result = document.getElementById("result");

    // Check if input is valid
    if (isNaN(guessInput) || guessInput < 1 || guessInput > 100) {
        result.innerText = "Please enter a valid number between 1 and 100!";
        return;
    }

    // Increment turn counter
    turns++;

    // Compare guess with the random number
    if (guessInput < randomNumber - 10) {
        result.innerText = "Too low! Try again.";
    } else if (guessInput > randomNumber + 10) {
        result.innerText = "Too high! Try again.";
    } else if (guessInput === randomNumber) {
        result.innerText = `Congratulations! You guessed it in ${turns} turns.`;
        return; // End the game
    } else {
        result.innerText = "You're very close!";
    }

    // Check if turns exceeded the limit
    if (turns >= 10) {
        result.innerText = `Game Over! The correct number was ${randomNumber}.`;
    }
}

// Attach event listener to the button
document.getElementById("submitGuess").addEventListener("click", playGame);
