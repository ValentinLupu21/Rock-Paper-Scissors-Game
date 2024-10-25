let playerChoice = prompt(`Choose your pick: rock, paper, scissors`).toLowerCase();
playerChoice = wrongPlayerChoice(playerChoice);
console.log(playerChoice);

const computer = computerChoice();
const oneGame = playRound(playerChoice, computer);

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
        console.log("Player wins!");
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("Player wins!");
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("Player wins!");
    } else if (humanChoice === "rock" && computerChoice === "rock"){
        console.log("Draw");
    } else if (humanChoice === "paper" && computerChoice === "paper"){
        console.log("Draw");
    } else if (humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("Draw");
    } else {
        console.log(`Computer "${computerChoice}" wins against Player "${humanChoice}"`)
    } return result;
}
