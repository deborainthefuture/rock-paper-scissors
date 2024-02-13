function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choice = Math.floor(Math.random() * choices.length);

    return choices[choice].toLowerCase();
}

let player = 0;
let machine = 0;
let roundCounter = 0;

function displayMessage(msg) {
    const message = document.getElementById('game-msg');
    message.textContent = msg;
}

function updateScoreCount() {
    const scoreCount = document.getElementById("score");
    scoreCount.textContent = `Player: ${player}, Machine: ${machine}`;
}

function updateRoundCount() {
    const rounds = document.getElementById("round-counter");
    rounds.textContent = `Round: ${roundCounter}`
}

const buttons = document.querySelectorAll(" button");
buttons.forEach(btn => btn.addEventListener("click", function() {
    if(roundCounter < 5) {
        const playerChoice = this.id;
        const computerChoice = getComputerChoice();
        console.log(computerChoice);

        const result = playRound(playerChoice, computerChoice);

        let roundMessage = "";
        if(result === 1) {
            player++;
            roundMessage = "You won this round!";
        } else if(result === -1) {
            machine++;
            roundMessage = "Machine won this round!";
        } else {
            roundMessage = "Oops! It's a tie!";
        }
        roundCounter++;
        displayMessage(roundMessage);
        updateScoreCount();
        updateRoundCount();
        checkWinner();
    } else {
        displayMessage("Game over. Refresh the page to start a new round.")
    }
}));

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return 0;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
        ) {
            return 1; 
        } else {
            return -1;
        }
}

function checkWinner() {
    if(roundCounter === 6) {
        if(player > machine) {
            displayMessage("You won the game!");
        } else if (machine > player) {
            displayMessage("Sorry, machine won the game!");
        } else {
            displayMessage("The game ended in a tie!");
        }
    }
}
