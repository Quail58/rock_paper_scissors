
// a function that picks the computers hand randomly

function computerPlay(){
    // creates an Array of choices
    let choices = ["rock", "paper", "scissors"]
    // randomly picks from the Array
    var computer_choice = choices[Math.floor(Math.random() * choices.length)];
    return computer_choice;
}

// a function that asks for a players input
function playerHand(){
    let player_choice = prompt("Pick: Rock, Paper, Scissors");
    return player_choice.toLowerCase();        
}

// a function that plays one round of rock paper scissors
function round(playerSelection, computerSelection){
    let play = true;
    while (play) {
        if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "paper"){
            alert("It's a tie!");
            play = false;
        } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
            alert("Player wins!");
            play = false;
        } else {
            alert("Computer wins!");
            play = false;
        }
    }
}

// plays the game
const playerSelection = playerHand();
const computerSelection = computerPlay();
console.log(round(playerSelection, computerSelection))