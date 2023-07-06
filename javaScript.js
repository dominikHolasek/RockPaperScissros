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

let getPlayerChoice = prompt('Rock, Paper or Scissros?', '');

function resultOfRound(computerChoice, playerChoice) {
    computerChoice = computerChoice.toUpperCase();
    playerChoice = playerChoice.toUpperCase();
    if (computerChoice === playerChoice) {
        return 0;
    } else if (computerChoice === "PAPER" && playerChoice === "ROCK") {
        return 1;
    } else if (computerChoice === "PAPER" && playerChoice === "SCISSORS") {
        return 2;
    } else if (computerChoice === "ROCK" && playerChoice === "SCISSORS") {
        return 1;
    } else if (computerChoice === "ROCK" && playerChoice === "PAPER") {
        return 2;
    } else if (computerChoice === "SCISSORS" && playerChoice === "PAPER") {
        return 1;
    } else if (computerChoice === "SCISSORS" && playerChoice === "ROCK") {
        return 2;
    }
}

