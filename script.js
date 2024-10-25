const computer = computerChoice();

function computerChoice () {
    let choice = Math.trunc(Math.random() * 3);
    if (choice === 0) {
        choice = console.log(`Computer chose rock`);
    } else if (choice === 1) {
        choice = console.log(`Computer chose paper`);
    } else if (choice === 2) {
        choice = console.log(`Computer chose scissors`);
    } else {
        return -1;
    }
}