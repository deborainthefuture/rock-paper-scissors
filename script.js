function getComputerChoice(array) {
    const word = Math.floor(Math.random() * array.length);
    return array[word].toLowerCase();
}

const wordsGame = [
    'Rock',
    'Paper',
    'Scissors'
];

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

function playGame(n) {
    let player = 0;
    let machine = 0;

    for(let i = 0; i < n; i++) {
        let computerChoice = getComputerChoice(wordsGame);
        console.log(computerChoice);
        let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

        let result = playRound(playerChoice, computerChoice);

        if(result === 1) {
            player++;
            alert("You won this round!");
        } else if(result === -1) {
            machine++;
            alert("Machine won this round!")
        } else {
            alert("Oops! It's a tie!");
        }
    }

    if(player > machine) {
        alert("You won the game!");
    } else if (machine > player) {
        alert("Sorry, machine won the game!");
    } else {
        alert("The game ended in a tie!");
    }
}

playGame(5);