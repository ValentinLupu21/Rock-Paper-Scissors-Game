
let playerChoice = prompt(`Choose your pick: rock, paper, scissors`).toLowerCase();
playerChoice = wrongPlayerChoice(playerChoice);
console.log(playerChoice);

const computer = computerChoice();

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
        value = prompt(`Choose again: rock, paper, scissors`);
        if (value === null) {
            return null;
            }
    }
    return value;
}