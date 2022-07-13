
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
            alert("It's a tie!")
            play = false;
        } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
            alert("Player wins this round!");
            playerScore++;
            play = false;
        } else {
            alert("Computer wins this round!");
            computerScore++;
            play = false;
        }
    }
}

// trying to run a game that plays five times and picks a winner
function gameOn(){
    for (let i = 0; i < 5; i++){
        if (playerScore === 5){
            alert("Player Wins!");
        } else if (computerScore === 5){
            alert("Computer Wins!")
        } else {
            console.log(round(playerSelection, computerSelection))
        }
    }
}

// plays the game
let playerScore = 0;
let computerScore = 0;
let score = "Player Score: " + playerScore + "Computer Score: " + computerScore
const playerSelection = playerHand();
const computerSelection = computerPlay();
console.log(gameOn());