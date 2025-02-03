console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

let computerChoice = "";
let humanChoice = "";
let roundNum = 0;
//buttons
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scisButton = document.getElementById('scissors');


//UI
const humanUi = document.getElementById('humanScore');
const computerUi = document.getElementById('computerScore');
const roundUi = document.getElementById('round');
const winner = document.getElementById('winner');


//Button events
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

function scoreUpdt(){
    humanUi.innerText = humanScore;
    computerUi.innerText = computerScore;
}

function win(){
    console.log("You Win!");
    humanScore++;
    scoreUpdt();
}

function lose(){
    console.log("You Lose!");
    computerScore++;
    scoreUpdt();
}


function playRound(){
     //humanChoice = getHumanChoice();
     computerChoice = getComputerChoice();

if (computerChoice == "rock"){
    if (humanChoice == "rock"){
        console.log("Tie!");
    }
    else if (humanChoice == "paper"){
        win()
    }
    else {lose()

    }
}

else if (computerChoice == "paper"){
    if (humanChoice == "rock"){
        lose();
    }
    else if (humanChoice == "paper"){
        console.log("Tie!")}
    else {
        win();
    }
}
else if (computerChoice == "scissors"){
    if (humanChoice == "rock"){
        win();
    }
    else if (humanChoice == "paper"){
        lose();
}
    else {console.log("Tie!")
    }
}
round();
playGame();
}


function round(){
    roundNum++;

    roundUi.innerText = roundNum;

    console.log(humanChoice + " Vs " + computerChoice + "...." + " The Score is now " + humanScore + " to " + computerScore);
}
function playGame(){
if (roundNum === 5){
       
        if (humanScore > computerScore) {
            console.log("Good Job! You have Defeated AI!")
            winner.innertext = "Good Job! You have Defeated AI!";
        }
        else if (humanScore < computerScore) {
            console.log("You've been deafeated. Prepare for the AI takeover.")
            winner.innerText = "You've been deafeated. Prepare for the AI takeover.";
        }
        else {
            console.log("A tie after 5 rounds? One more. This is your chance to Redeem yourself.");
            winner.innerText = "A tie after 5 rounds? One more. This is your chance to Redeem yourself.";
            playRound();
        }
    return;
    }
    
}
//playGame();