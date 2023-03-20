//Get user's selection of either rock paper scissors
//Have program make its' own random selection of either rock paper scissors
//Evaluate the winner by comparing the two selections
//Record who won
//Once one player gets 3 wins, end the game and declare that player the winner

let playerChoice = "ROCK";
playerChoice = playerChoice.toLowerCase();
const computerChoice = getComputerChoice();

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const finalChoice = choices[randomIndex];
    return finalChoice;
}

console.log(playerChoice)
console.log(computerChoice)