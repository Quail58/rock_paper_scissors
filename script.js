
// a function that picks the computers hand randomly

function computerPlay(){
    // creates an Array of choices
    let choices = ["rock", "paper", "scissors"]
    // randomly picks from the Array
    var choice = choices[Math.floor(Math.random() * choices.length)];
    return choice

}

