
// a function that picks the computers hand randomly

function computerPlay(){
    // creates an Array of choices
    let choices = ["rock", "paper", "scissors"]
    // randomly picks from the Array
    var computer_choice = choices[Math.floor(Math.random() * choices.length)];
    return computer_choice;
}

// a function that asks for a players input
function playerHand(a){
    console.log(a);
    return a;
}

// a function that plays one round of rock paper scissors
function round(playerSelection, computerSelection){
        if( (playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "paper") ){
            alert("It's a tie!");
        } else if ( (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") ){
            alert("Player wins this round!");
            playerScore++;
        } else {
            alert("Computer wins this round!");
            computerScore++;
        }  
}

// plays a game of rock paper scissors best out of 5
function gameOn(){
    for (let i = 0; i < 1000; i++){
        playerSelection = playerHand();
        computerSelection = computerPlay();
        round(playerSelection, computerSelection);
        console.log("Player hand: " + playerSelection);
        console.log("Copmuter hand: " + computerSelection);
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    
        if(playerScore === 3){
            alert("Player wins the game!");
            break;
        } else if(computerScore === 3){
            alert("Computer wins the game!");
            break;        
        } else {
            alert("Player score: " + playerScore + " Computer Score:" + computerScore);
            alert("Pick again");
        }
    }
    
}

// plays the game
let playerScore = 0;
let computerScore = 0;
//console.log(gameOn());