/* pseudocode
Vztvo59m funkci kter8 budeg enerovat kamen,papir, nuykz
vztvorim funkci ktera bude prijimat vstup uyivatele
vztvorim podminkz pro vzhru 
vzhrava ten kdo ma 5 vzher
 */

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

let getPlayerChoice;
let computerWinCount = +0;
let playerWinCount = +0;

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
    while (computerWinCount < 5 || playerWinCount < 5) {
        getPlayerChoice = prompt('Rock, Paper or Scissros?', '');
        console.log(resultOfRound(getComputerChoice(), getPlayerChoice));
    }

    if (playerWinCount > computerWinCount){
        return 'Player won the whole game';
    } else {
        return 'Computer won the whole game'
    }
}

game();

