const rpsArray = ["Rock", "Paper", "Scissors"];

function computerPlay () {
    return rpsArray[~~(Math.random() * rpsArray.length)];
}

function playRound (playerSelection, computerSelection) {
    // playerSelection = playerSelection.toLowerCase();
    // computerSelection = computerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "paper") {
        return("You Lose! " + computerSelection + " beat " + playerSelection);
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return("You Lose! " + computerSelection + " beat " + playerSelection);
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return("You Lose! " + computerSelection + " beat " + playerSelection);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return("You WIN!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return("You WIN!");
    } else if (playerSelection == computerSelection) {
        return("Tie Game!");
    } else {
        return("Please try again");
    }
}

let user = window.prompt ("Enter your RPS: ");
let userInput = user.toLowerCase();
// let computerInput = computerPlay().toLowerCase();
let output = playRound(userInput, computerPlay().toLowerCase());
alert(output + " You put: " + userInput + " Comp put: " + computerInput);