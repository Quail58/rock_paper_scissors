
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
    let playerSelection = a;
    let computerSelection = computerPlay();
    round(playerSelection, computerSelection);
    let player_score = document.getElementById('player_score');
    player_score.innerHTML = playerScore;
    let computer_score = document.getElementById('computer_score');
    computer_score.innerHTML = computerScore;
}

// a function that plays one round of rock paper scissors
function round(playerSelection, computerSelection){
        if( (playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "paper") ){
            console.log("It's a tie!");
        } else if ( (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") ){
            console.log("Player wins this round!");
            playerScore++;
        } else {
            console.log("Computer wins this round!");
            computerScore++;
        }  
}

// plays a game of rock paper scissors best  3 out of 5
// function gameOn(){
//     for (let i = 0; i < 1000; i++){
//         playerSelection = playerHand();
//         computerSelection = computerPlay();
//         round(playerSelection, computerSelection);
//         console.log("Player hand: " + playerSelection);
//         console.log("Copmuter hand: " + computerSelection);
//         console.log("Player Score: " + playerScore);
//         console.log("Computer Score: " + computerScore);
    
//         if(playerScore === 3){
//             console.log("Player wins the game!");
//             break;
//         } else if(computerScore === 3){
//             console.log("Computer wins the game!");
//             break;        
//         } else {
//             console.log("Player score: " + playerScore + " Computer Score:" + computerScore);
//             console.log("Pick again");
//         }
//     }    
// }

// plays the game
let playerScore = 0;
let computerScore = 0;