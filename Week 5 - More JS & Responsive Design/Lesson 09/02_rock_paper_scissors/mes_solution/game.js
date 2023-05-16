


// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
    //define choices
    possibleChoices = ["rock", "paper", "scissors"];
    
    // create random number between 1 and 3
    myIndex = Math.floor(Math.random() * 3);

    //return computer choice
    return possibleChoices[myIndex];
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.*/
function compare(me, opponent) {
    //target the id computerSelection and put what the computer chose in the text
    document.querySelector("#computerSelection").innerHTML = opponent;

    //target the decision and display who wins

    let result = "";

    if(me == "rock"){
        if(opponent == "rock"){
            result = "Tie";
        } else if(opponent == "paper"){
            result = "Computer wins";
        } else{
            result = "I win!";
        }
    } else if(me == "paper") {
        if(opponent == "rock"){
            result = "I win!";
        } else if(opponent == "paper"){
            result = "Tie";
        } else{
            result = "Computer wins";
        }
    } else {
        if(opponent == "rock"){
            result = "Computer wins";
        } else if(opponent == "paper"){
            result = "I win!";
        } else{
            result = "Tie";
        }
    }

    document.querySelector("#decision").innerHTML = result;
    document.querySelector("#computerSelection").innerHTML = opponent;
};



document.addEventListener('DOMContentLoaded', function(event) {
    // When I click on scissors
    document.querySelector("#scissors").addEventListener('click', function(e) {
        compare("scissors", computerChoice());
    });

    // When I click on paper
    document.querySelector("#paper").addEventListener('click', function(e) {
        compare("paper", computerChoice());
    });

    // When I click on rock
    document.querySelector("#rock").addEventListener('click', function(e) {
        compare("rock", computerChoice());
    });
});
