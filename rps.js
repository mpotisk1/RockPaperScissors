console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

let computerChoice = "";
let humanChoice = "";
let roundNum = 0;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scisButton = document.getElementById('scissors');

rockButton.onclick = () => {humanChoice = "rock", playRound()};
paperButton.onclick = () => {humanChoice = "paper", playRound()};
scisButton.onclick = () => {humanChoice = "scissors", playRound()};



function getComputerChoice(){
    let computerNumChoice = 0;
    computerNumChoice = Math.floor(Math.random() * 10);
    if (computerNumChoice === 0){
        return getComputerChoice()
    }
    else if (computerNumChoice === 1 ||
        computerNumChoice === 2 ||
        computerNumChoice === 3
    ){
        computerChoice = "rock";
    }
    else if (computerNumChoice === 4 || 
        computerNumChoice === 5 ||
        computerNumChoice === 6){
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors"
    };

   // console.log(computerChoice);
    return computerChoice;
};



function playRound(){
     //humanChoice = getHumanChoice();
     computerChoice = getComputerChoice();

if (computerChoice == "rock"){
    if (humanChoice == "rock"){
        console.log("Tie!");
    }
    else if (humanChoice == "paper"){
        console.log("You Win!");
        humanScore++;
    }
    else {console.log("You Lose!");
        computerScore++;
}
}
else if (computerChoice == "paper"){
    if (humanChoice == "rock"){
        console.log("You Lose!");
        computerScore++;
    }
    else if (humanChoice == "paper"){
        console.log("Tie!")}
    else {
        console.log("You Win!");
        humanScore++;
}
}
else if (computerChoice == "scissors"){
    if (humanChoice == "rock"){
        console.log("You Win!");
        humanScore++;
    }
    else if (humanChoice == "paper"){
        console.log("You Lose!");
        computerScore++;
}
    else {console.log("Tie!")
    }
}
round();
playGame();
roundNum++;
}


function round(){
    console.log(humanChoice + " Vs " + computerChoice + "...." + " The Score is now " + humanScore + " to " + computerScore);
}
function playGame(){
if (roundNum === 5){
       
     
        if (humanScore > computerScore) {
            console.log("Good Job! You have Defeated AI!")
        }
        else if (humanScore < computerScore) {
            console.log("You've been deafeated. Prepare for the AI takeover.")
        }
        else {
            console.log("A tie after 5 rounds? One more. This is your chance to Redeem yourself.");
            playRound();
        }
    return;
    }
    
}
//playGame();