console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

let computerChoice = "";
let humanChoice = "";

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scisButton = document.getElementById('scissors');

rockButton.onclick = () => humanChoice = "rock";
paperButton.onclick = ()=> humanChoice = "paper";
scisButton.onclick = () => humanChoice ="scissors";



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

/* function getHumanChoice(){
    let humanChoice = prompt("type 'rock' 'paper' or 'scissors'");
   // console.log(humanChoice);
    return(humanChoice);

}*/



function playRound(){
     //humanChoice = getHumanChoice();
     computerChoice = getComputerChoice();
if (humanChoice.length != 0){

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
}
else{};
}
function playGame(){

    for (i = 0; i <= 5; i++){
      
        playRound();
        console.log(humanChoice + " Vs " + computerChoice + "...." + " The Score is now " + humanScore + " to " + computerScore);
     }
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
    
    
}
playGame();