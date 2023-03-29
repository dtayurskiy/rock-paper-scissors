//Get user's selection of either rock paper scissors
//Have program make its' own random selection of either rock paper scissors
//Evaluate the winner by comparing the two selections
//Record who won
//Once one player gets 3 wins, end the game and declare that player the winner

//let playerChoice = "scIssoRs";
//playerChoice = playerChoice.toLowerCase();


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
        result = "draw"
    }
    else if (player === "rock" && computer === "paper" || player === "paper" && computer === "scissors" || player === "scissors" && computer === "rock") {
        result = "computer win";
    }
    else if (computer === "rock" && player === "paper" || computer === "paper" && player === "scissors" || computer === "scissors" && player === "rock") {
        result = "player win";
    }
    else {
        result = "invalid";
    }

    return result;
}

//Continue playing rounds until one player reaches three wins
function playGame() {
    let gameOver = false;
    let playerCounter = 0;
    let computerCounter = 0;
    let roundCounter = 0;
    let message;

    while (gameOver === false) {
        if (playerCounter < 3 && computerCounter < 3) {
            let computerChoice = getComputerChoice();
            let playerChoice = getComputerChoice();

            if (playRound(playerChoice, computerChoice) === "computer win") {
                computerCounter++;
                roundCounter++;
                message = "Round " + roundCounter + ":\nComputer wins! " + computerChoice + " beats " + playerChoice + "\nCurrent Score: Player:" + playerCounter + " Computer:" + computerCounter;
                
                console.log(message)
            }
            else if (playRound(playerChoice, computerChoice) === "player win") {
                playerCounter++;
                roundCounter++;
                message = "Round " + roundCounter + ":\nPlayer wins! " + playerChoice + " beats " + computerChoice + "\nCurrent Score: Player:" + playerCounter + " Computer:" + computerCounter;
                
                console.log(message)
            }
            else if (playRound(playerChoice, computerChoice) === "draw") {
                roundCounter++;
                message = "Round " + roundCounter + ":\nDraw! " + "\nCurrent Score: Player:" + playerCounter + " Computer:" + computerCounter;
                
                console.log(message)
            }
            else {
                gameOver = true;
                message = "Something went wrong, game ended."
                
                console.log(message)
            }
        }
        else if (computerCounter === 3) {
            gameOver = true;
            message = "Game Over!\nComputer Wins!\nFinal Score: Player:" + playerCounter + " Computer:" + computerCounter;
            
            console.log(message)
        }
        else if (playerCounter === 3) {
            gameOver = true;
            message = "Game Over!\nPlayer Wins!\nFinal Score: Player:" + playerCounter + " Computer:" + computerCounter;
            
            console.log(message)
        }
        else {
            gameOver = true;
            message = "Something went wrong, game ended."
            
            console.log(message)
        }
    }
}

playGame()

