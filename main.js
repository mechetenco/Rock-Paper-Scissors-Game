// mechetenco
// rock-paper-scissors-game logic

// function to get computer choice
function getComputerChoice() {
    let choice = "No Choice";
    // generating random number between 0-2
    let number = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    // if statements to assign numbers to a choice
    if (number === 0) {
        choice = "rock";
        console.log("Computer Played "+ choice +".")
        return choice;
    }
    else if (number === 1) {
        choice = "paper";
        console.log("Computer Played "+ choice +".")
        return choice;
    }
    else {
        choice = "scissors";
        console.log("Computer Played: "+ choice)
        return choice;
    }
}
// function play one round 
function playOneRound(playerSelection, computerSelection){
    let winner = "Nobody";
    // if statements to determine a winner
    if (playerSelection === "rock" && computerSelection === "scissors") {
        winner = "Player";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        winner = "Computer";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        winner = "Computer";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        winner = "Player";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        winner = "Computer";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        winner = "Player";
    }
    else if (playerSelection === computerSelection) {
        winner = "Draw";
    }
    // returning winner of the round
    return winner;
}
// function to validate player turn
function validatingPlayerTurn(playerChoice) {
    while (playerChoice !== "paper" && playerChoice !== "rock" && playerChoice !== "scissors") {
        alert("Oops. Invalid Choice. Tray Again.")
        playerChoice = prompt("Enter Choice: ").toLowerCase();
    }
    console.log("You Played: " + playerChoice);
    return playerChoice;
    
}
 

function playGame (){
    // initializing variables for the game
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    let totalWinner = "No One";
    // for loop to play 5 rounds
    for(let i = 0; i < 5; i++) {
        // getting player turn
        let playerTurn = prompt("Enter Choice: ");
         // making the player choice all lower case
        let playerChoice = playerTurn.toLowerCase();
        // initializing winner then assigning it to the winner of the round
        let winner = "No One";
        // playing one round and using the player validation function and get computer choice function as parameters
        winner = playOneRound(validatingPlayerTurn(playerChoice), getComputerChoice());
        // adding total wins for player and computer
        if (winner === "Player") {
            playerWins += 1;
        }
        else if (winner === "Computer") {
            computerWins += 1;
        }
        else {
            draws += 1;
        }
        console.log("Winner for this round: " + winner);
        console.log("Total Player Wins; " + playerWins);
        console.log("Total Computer Wins; " + computerWins);
        console.log("Total Draws: " + draws + "\n\n");
    }
    // getting total winner by comparing wins for both player and computer then returning that winner
    if (playerWins > computerWins) {
        totalWinner = "Player";
        console.log("Winner of the Game is: " + totalWinner);
        return 0;
    }
    else if (computerWins > playerWins) {
        totalWinner = "Computer";
        console.log("Winner of the Game is: " + totalWinner);
        return 0;
    }
    else {
        totalWinner = "Draw";
        console.log("Winner of the Game is: " + totalWinner);
        return 0;
    }
}

// calling playGame method which plays 5 rounds and announces the overall winner
playGame();