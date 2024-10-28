let playerWins = 0;
let computerWins = 0;

function game() {

    let playerChoice = prompt(`Choose your pick: rock, paper, scissors`);
    if (playerChoice === null) return;
    playerChoice = playerChoice.toLowerCase();
    playerChoice = wrongPlayerChoice(playerChoice);
    if (playerChoice === null) return;

    const computer = computerChoice();
    const oneGame = playRound(playerChoice, computer);

    playerWins += playerWonGames(oneGame);
    computerWins += computerWonGames(oneGame);
    console.log(`Player wins: ${playerWins} Computer wins: ${computerWins}`);

    const setWinner = firstFive(playerWins, computerWins);

    if (setWinner) {
        console.log("Game finished");
        return;
    }

    let repeat = confirm(`Do you want to play again?`);
    if (repeat) {
        game();
    }

    function computerChoice() {
        let choice = Math.trunc(Math.random() * 3);
        if (choice === 0) {
            console.log(`Computer chose rock`);
            return "rock";
        } else if (choice === 1) {
            console.log(`Computer chose paper`);
            return "paper";
        } else {
            console.log(`Computer chose scissors`);
            return "scissors";
        }
    }

    function wrongPlayerChoice(value) {
        while (value !== "rock" && value !== "paper" && value !== "scissors") {
            value = prompt(`Choose again: rock, paper, scissors!`);
            if (value === null) {
                return null;
            }
        }
        return value;
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper") {
            console.log("Player wins!");
            return 1;
        } else if (humanChoice === computerChoice) {
            console.log("Draw");
            return 2;
        } else {
            console.log(`Computer "${computerChoice}" wins against Player "${humanChoice}"`);
            return 3;
        }
    }

    function playerWonGames(value) {
        return value === 1 ? 1 : 0;
    }

    function computerWonGames(value) {
        return value === 3 ? 1 : 0;
    }

    function firstFive(playerWins, computerWins) {
        if (playerWins === 5) {
            console.log(`Player wins the game with ${playerWins} victories`);
            return true;
        } else if (computerWins === 5) {
            console.log(`Computer wins the game with ${computerWins} victories`);
            return true;
        }
        return false;
    }
}

game();
