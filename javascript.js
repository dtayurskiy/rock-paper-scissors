//Get user's selection of either rock paper scissors
//Have program make its' own random selection of either rock paper scissors
//Evaluate the winner by comparing the two selections
//Record who won
//Once one player gets 3 wins, end the game and declare that player the winner

let playerChoice = "scIssoRs";
playerChoice = playerChoice.toLowerCase();
const computerChoice = getComputerChoice();

//Have program randomly pick between rock, paper, or scissors
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const finalChoice = choices[randomIndex];
    return finalChoice;
}

//Determine result of the game by comparing the selection of the player to that of the computer
function playRound(player, computer) {
    let result;
    
    if (player === computer) {
        result = "It's a draw!"
    }
    else if (player === "rock" && computer === "paper" || player === "paper" && computer === "scissors" || player === "scissors" && computer === "rock") {
        result = "Computer wins! " + computer + " beats " + player;
    }
    else if (computer === "rock" && player === "paper" || computer === "paper" && player === "scissors" || computer === "scissors" && player === "rock") {
        result = "You win! " + player + " beats " + computer;
    }
    else {
        result ="Invalid selection, please choose between rock, paper, or scissors";
    }

    return result;
}

console.log(playRound(playerChoice, computerChoice))

