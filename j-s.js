/* 
DECLARE user choice variable empty string
DECLARE computer choice variable empty string

GENERATE computer choice
    MAKE choice array with 3 choices
    GENERATE random number
    ASSIGN random number as index to one of choices
    PRINT the choice to make sure it work

INPUT user choice - either rock, paper or scissors
STORE user choice as declared user choice variable

STORE computer choice as declared string
COMPARE user choice & computer choice
    COMPARE LOGIC:
        ROCK > SCISSORS
        SCISSORS > PAPER
        PAPER > ROCK
    IF user choice = computer choice 
        THEN tie
PRINT statement who is the winner
LOOP back to start
*/


//set starting score of the game
let playerScoreR = 0;
let computerScoreR = 0;


//listens for click event, depending on target clicked it executes that button
document.addEventListener("DOMContentLoaded", () => {

    const btnDel = document.querySelector('#deleteScore');
    let btn = document.querySelector('.buttons');
    const playerScoreDiv = document.querySelector('.playerScore');
    const computerScoreDiv = document.querySelector('.computerScore');
    const banner = document.querySelector('h1');

    btn.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id){
            case 'playerRock':
                console.log('Player chose Rock');
                playerSelection = 'rock';
                playRound(playerSelection);
                console.log(playerScoreR, computerScoreR);
                scoreTally();
                winCondition();
                break;

            case 'playerPaper':
                console.log('Player chose Paper');
                playerSelection = 'paper';
                playRound(playerSelection);
                console.log(playerScoreR, computerScoreR);
                scoreTally();
                winCondition();
                break;

            case 'playerScissors':
                console.log('Player chose Scissors');
                playerSelection = 'scissors';
                playRound(playerSelection);
                console.log(playerScoreR, computerScoreR);
                scoreTally();
                winCondition();
                break;
        }
    });


    function scoreTally() {
        playerScoreDiv.textContent = playerScoreR;
        computerScoreDiv.textContent = computerScoreR;
    }

    btnDel.addEventListener('click', () => {
        playerScoreDiv.textContent = "";
        computerScoreDiv.textContent = "";
        banner.textContent = "Let's play: rock, paper, scissors!"
        playerScoreR = 0;
        computerScoreR = 0;
    })
    // check for win condition, change banner text
    function winCondition(){
        
        if (playerScoreR === 5 && computerScoreR === 5){
            banner.textContent = 'WE HAVE A TIE!';
        } else if (playerScoreR === 5 && computerScoreR < 5) {
            banner.textContent = 'YOU WIN!';
        } else if (playerScoreR < 5 && computerScoreR === 5) {
            banner.textContent = 'COMPUTER WINS!'; 
        }
    };

    // computer decides on their choice from array
    function getComputerChoice(){
        let choiceArray = [
            'rock',
            'paper',
            'scissors'
        ];

        let choiceIndex = Math.floor(Math.random() * choiceArray.length);
        let computerSelection = choiceArray[choiceIndex];
        console.log('The computer has selected ', computerSelection);
        savedComputerSelection = computerSelection;
        return savedComputerSelection;
    }



    // compare user input and computer choice, return results, add tally to the score
    function playRound(playerSelection){
        getComputerChoice();
        if (playerSelection === savedComputerSelection){
            console.log('We have a tie, you both selected ', playerSelection);
            return playerScoreR += 1, computerScoreR += 1;
        } else if (playerSelection === 'rock' && savedComputerSelection === 'paper') {
            console.log('Paper beats rock - you LOSE!');
            return computerScoreR += 1;
        } else if (playerSelection === 'scissors' && savedComputerSelection === 'rock'){
            console.log('Rock beats scissors - you LOSE!');
            return computerScoreR += 1;
        } else if (playerSelection === 'paper' && savedComputerSelection === 'scissors') {
            console.log('Scissors beats paper - you LOSE!');
            return computerScoreR += 1;
        } else return playerScoreR += 1;

        
    };
});