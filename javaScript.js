let selectedItem = 'Nothing';
let computerWinCount = +0;
let playerWinCount = +0;
let isOver = false;

/* 
Rewrite to node querySelectorAll and 
create functions to use in foreach loop, 
also retype node to array 
*/
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    selectedItem = "ROCK";
    console.log(selectedItem);
    if (isOver){
        return;
    }
    game();
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    selectedItem = "PAPER";
    console.log(selectedItem);
    if (isOver){
        return;
    }
    game();
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    selectedItem = 'SCISSORS';
    console.log(selectedItem);
    if (isOver){
        return;
    }
    game();
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', () =>{
    playerWinCount = +0;
    computerWinCount = +0;
    isOver = false;
    resultDiv.textContent = "o";
});

const resultDiv = document.querySelector(".results");
resultDiv.textContent = 'o';


/* const resultParagraph = document.createElement('p'); */

function getComputerChoice(){
    let generatedNumber = Math.random() * 100;
    
    if ((generatedNumber <= 100) && (generatedNumber >= (2/3 * 100))){
        return 'PAPER';
    } else if ((generatedNumber < (2/3 * 100)) && (generatedNumber < (1/3 * 100))){
        return 'ROCK';
    } else {
        return 'SCISSORS';
    }
}

console.log(typeof computerWinCount);

function resultOfRound(computerChoice, playerChoice) {
    computerChoice = computerChoice.toUpperCase();
    playerChoice = playerChoice.toUpperCase();
    if (computerChoice === playerChoice) {
        return `Draw ${computerChoice} equals ${playerChoice}`;
    } 
    else if ((computerChoice === "PAPER" && playerChoice === "ROCK")
      || (computerChoice === "ROCK" && playerChoice === "SCISSORS") 
      || (computerChoice === "SCISSORS" && playerChoice === "PAPER") ) {
        
        ++computerWinCount;
        return `Lose: ${computerChoice} beats ${playerChoice}`;
        
    } 
    else if ((computerChoice === "PAPER" && playerChoice === "SCISSORS")
      || (computerChoice === "ROCK" && playerChoice === "PAPER")
      || (computerChoice === "SCISSORS" && playerChoice === "ROCK")){
        
        ++playerWinCount;
        return `Win: ${playerChoice} beats ${computerChoice}`;
    }
}

function game(){
    if (playerWinCount >= 5 || computerWinCount >= 5){
        isOver = true;
        return;
    }
    console.log(resultOfRound(getComputerChoice(), selectedItem));
    console.log(`Player=${playerWinCount}, Computer=${computerWinCount}`);

    resultDiv.textContent = getWinner(playerWinCount, computerWinCount);
}

function getWinner(fPlayerWinCount, fComputerWinCount){
    if(fPlayerWinCount === 5){
        return `Player Win with ${fPlayerWinCount} wins, Computer lost with ${fComputerWinCount} wins`;
    } else if(fComputerWinCount === 5){
        return `Player Lost with ${fPlayerWinCount} wins, Computer Win with ${fComputerWinCount} wins`;
    } else {
        return `Player have ${fPlayerWinCount} wins, Computer have ${fComputerWinCount} wins`
    }
}

