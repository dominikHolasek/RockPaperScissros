/* 
Rewrite to node querySelectorAll and 
create functions to use in foreach loop, 
also retype node to array 
*/
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    selectedItem = "ROCK";
    console.log(selectedItem);
    game();
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    selectedItem = "PAPER";
    console.log(selectedItem);
    game();
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    selectedItem = 'SCISSORS';
    console.log(selectedItem);
    game();
});

/* 
    Kdzy kliknu musi se nacist hodnota y buttonu a nasledne soustit dalsi kolo 
*/

/* Pokud bude mit kterzkoliv y hracu 5 bodu, hra se yastavi a vzpise vyherce
pro pokracovani bude nutno zmacknout tlacitko reset,
do tlacitka pro reset vlozim img,
tlacitko bude reseno v DOMu n0 v html. */




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

let selectedItem = 'Nothing';
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
    console.log(resultOfRound(getComputerChoice(), selectedItem));
    console.log(`Player=${playerWinCount}, Computer=${computerWinCount}`);

    if (playerWinCount > computerWinCount){
        return 'Player won the whole game';
    } else {
        return 'Computer won the whole game'
    }
}

//game();

