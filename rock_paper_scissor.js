function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log("Player choice:", playerChoice);
    console.log("Computer choice:", computerChoice);

    if (!choices.includes(playerChoice)) {
        return "Invalid choice! Please choose 'rock', 'paper', or 'scissors'.";
    }

    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "Player wins!";
    } else {
        return "Computer wins!";
    }
}

// Example usage:
const playerChoice = "rock"; // You can change the player's choice here
console.log(playGame(playerChoice));
