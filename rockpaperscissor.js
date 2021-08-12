const rpsArray = ["Rock", "Paper", "Scissors"];

function computerPlay () {
    return rpsArray[~~(Math.random() * rpsArray.length)];
}

function playRound (playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "paper") || 
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")) {
        return("You Lose! " + computerSelection + " beat " + playerSelection);
    } else if ((playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper")){
        return("You WIN!");
    } else if (playerSelection == computerSelection) {
        return("Tie Game!");
    } else {
        return("Please try again");
    }
}

let user = window.prompt ("Enter your RPS: ");
let userInput = user.toLowerCase();
let computerInput = computerPlay().toLowerCase();
let output = playRound(userInput, computerInput);
alert(output + " You put: " + userInput + " Comp put: " + computerInput);