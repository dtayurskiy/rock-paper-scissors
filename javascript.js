//Get user's selection of either rock paper scissors
//Have program make its' own random selection of either rock paper scissors
//Evaluate the winner by comparing the two selections
//Record who won
//Once one player gets 3 wins, end the game and declare that player the winner


const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let playerCounter = 0;
let computerCounter = 0;
let roundCounter = 0;

rock.addEventListener('click', function(e) {
    playGame("Rock");
    checkGameOver();
});
paper.addEventListener('click', function(e) {
    playGame("Paper");
    checkGameOver();
});
scissors.addEventListener('click', function(e) {
    playGame("Scissors");
    checkGameOver();
});


//Have program randomly pick between rock, paper, or scissors
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const finalChoice = choices[randomIndex];
    return finalChoice;
}

function displayResult(content) {
    document.getElementById("result").innerHTML = content;
}

//Determine result of the game by comparing the selection of the player to that of the computer
function playRound(player, computer) {
    let result;
            
    if (player === computer) {
        result = "draw";
        //displayResult(result);
        //p.textContent = 'Draw!';
        //results.appendChild(p);
        //console.log(result)

    }
    else if (player === "Rock" && computer === "Paper" || player === "Paper" && computer === "Scissors" || player === "Scissors" && computer === "Rock") {
        result = "computer win";
        //displayResult(result);
        //p.textContent = `Computer Wins! ${computer} beats ${player}`;
    }
    else if (computer === "Rock" && player === "Paper" || computer === "Paper" && player === "Scissors" || computer === "Scissors" && player === "Rock") {
        result = "player win";
        //displayResult(result);
        //p.textContent = `You Win! ${player} beats ${computer}`;
    }
    else {
        result ="invalid";
    }
   
    return result;
}

//Continue playing rounds until one player reaches three wins
function playGame(playerChoice) {
    let message;

    if (playerCounter < 3 && computerCounter < 3) {
        let computerChoice = getComputerChoice();
        const resultMessage = "";

        if (playRound(playerChoice, computerChoice) === "computer win") {
            computerCounter++;
            roundCounter++;
            message = "Round " + roundCounter + ":<br>Computer wins! " + computerChoice + " beats " + playerChoice + "<br>Current Score: Player:" + playerCounter + " Computer:" + computerCounter;
            
            displayResult(message);
            displayGameResult(resultMessage);
        }
        else if (playRound(playerChoice, computerChoice) === "player win") {
            playerCounter++;
            roundCounter++;
            message = "Round " + roundCounter + ":<br>Player wins! " + playerChoice + " beats " + computerChoice + "<br>Current Score: Player:" + playerCounter + " Computer:" + computerCounter;
            
            displayResult(message);
            displayGameResult(resultMessage);
        }
        else if (playRound(playerChoice, computerChoice) === "draw") {
            roundCounter++;
            message = "Round " + roundCounter + ":<br>Draw! " + "<br>Current Score: Player:" + playerCounter + " Computer:" + computerCounter;
            
            displayResult(message);
            displayGameResult(resultMessage);
        }
        else {
            gameOver = true;
            message = "Something went wrong, game ended :("
            
            displayResult(message);
            displayGameResult(resultMessage);
        }
    }
    else {
        message = "Something went wrong, game ended :("
        
        displayResult(message);
        displayGameResult(resultMessage);
    }
}

function checkGameOver() {
    let message = "";
    if (computerCounter === 3) {
        message = "Game Over! Computer Wins! Click to play again.";
        displayGameResult(message);
        resetGame();
    }
    else if (playerCounter === 3) {
        message = "Game Over! Player Wins! Click to play again.";
        displayGameResult(message);
        resetGame();
    }
}

function displayGameResult(message) {
    document.getElementById("gameResult").innerHTML = message;
}

function resetGame() {
    playerCounter = 0;
    computerCounter = 0;
    roundCounter = 0;
}

