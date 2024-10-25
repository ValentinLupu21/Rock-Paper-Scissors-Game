let playerWins = 0;
let computerWins = 0;


function game(){

    let playerChoice = prompt(`Choose your pick: rock, paper, scissors`).toLowerCase();
    playerChoice = wrongPlayerChoice(playerChoice);

    const computer = computerChoice();
    const oneGame = playRound(playerChoice, computer);

    playerWins += playerWonGames(oneGame);
    computerWins += computerWonGames(oneGame);
    console.log(`Player wins: ${playerWins} Computer wins: ${computerWins}`);

    function computerChoice () {
        let choice = Math.trunc(Math.random() * 3);
        if (choice === 0) {
            choice = console.log(`Computer chose rock`);
            return "rock";
        } else if (choice === 1) {
            choice = console.log(`Computer chose paper`);
            return "paper";
        } else if (choice === 2) {
            choice = console.log(`Computer chose scissors`);
            return "scissors";
        } else {
            return -1;
        }
    }

    function wrongPlayerChoice (value) {
        while (value !== "rock" && value !== "paper" && value !== "scissors"){
            value = prompt(`Choose again: rock, paper, scissors!`);
            if (value === null) {
                return null;
                }
        }
        return value;
    }

    function playRound (humanChoice, computerChoice) {
        let result;
        if(humanChoice === "rock" && computerChoice === "scissors"){
            result = 1;
            console.log("Player wins!");
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            result = 1;
            console.log("Player wins!");
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
            result = 1;
            console.log("Player wins!");
        } else if (humanChoice === "rock" && computerChoice === "rock"){
            result = 2;
            console.log("Draw");
        } else if (humanChoice === "paper" && computerChoice === "paper"){
            result = 2;
            console.log("Draw");
        } else if (humanChoice === "scissors" && computerChoice === "scissors"){
            result = 2;
            console.log("Draw");
        } else {
            result = 3;
            console.log(`Computer "${computerChoice}" wins against Player "${humanChoice}"`)
        } return result;
    }

    function playerWonGames (value) {
        let playerWins = 0;
        if(value === 1) {
            playerWins = playerWins + 1;
        } else {
            playerWins = playerWins + 0;
        } return playerWins;
    }

    function computerWonGames (value) {
        let computerWins = 0;
        if(value === 3) {
            computerWins = computerWins + 1;
        } else {
            computerWins = computerWins + 0;
        } return computerWins;
    }

    const repeat = confirm(`Do you want to play again?`);

    if (repeat === true){
        game();
    }
}

game();