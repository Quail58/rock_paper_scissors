
// a function that picks the computers hand randomly

function computerPlay(){
    // creates an Array of choices
    let choices = ["rock", "paper", "scissors"]
    // randomly picks from the Array
    var choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

// a function that asks for a players input
function playerHand(){
    let player_choice = prompt("Pick: Rock, Paper, Scissors");
    return player_choice.toLowerCase();        
}

