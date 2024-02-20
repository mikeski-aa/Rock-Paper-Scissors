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


//set starting conditions of the game
let playerScoreR = 0;
let computerScoreR = 0;



//listens for click event, depending on target clicked it executes that button
document.addEventListener("DOMContentLoaded", () => {

    const btnDel = document.querySelector('#deleteScore');
    const backgroundColor = 'background: linear-gradient(0deg, rgba(1,177,165,1) 0%, rgba(133,224,110,1) 100%)'
    let btn = document.querySelector('.buttons');
    const playerScoreDiv = document.querySelector('.playerScore');
    const computerScoreDiv = document.querySelector('.computerScore');
    const banner = document.querySelector('h1');
    const lSection = document.querySelector('.leftSection');
    const rSection = document.querySelector('.rightSection');
    
    function startCond(){
    lSection.setAttribute('style', 'visibility: hidden');
    rSection.setAttribute('style', 'visibility: hidden');
    playerScoreDiv.setAttribute('style', 'display: inherit');
    computerScoreDiv.setAttribute('style', 'display: inherit');
    }

    startCond();

    btn.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id){
            case 'playerRock':
                playerSelection = 'rock';
                playRound(playerSelection);
                scoreTally();
                winCondition();
                break;

            case 'playerPaper':
                playerSelection = 'paper';
                playRound(playerSelection);
                scoreTally();
                winCondition();
                break;

            case 'playerScissors':
                playerSelection = 'scissors';
                playRound(playerSelection);
                scoreTally();
                winCondition();
                break;
        }
    });

    //tallies player and computer score
    function scoreTally() {
        playerScoreDiv.textContent = playerScoreR;
        computerScoreDiv.textContent = computerScoreR;
        lSection.setAttribute('style', 'visibility: visible');
    rSection.setAttribute('style', 'visibility: visible');
    }

    //restart game button
    btnDel.addEventListener('click', () => {
        playerScoreDiv.textContent = "";
        computerScoreDiv.textContent = "";
        banner.textContent = "Let's play: rock, paper, scissors!"
        document.body.setAttribute('style', backgroundColor);
        playerScoreR = 0;
        computerScoreR = 0;
        btn.setAttribute('style', 'display: visible');
        startCond();
    })
    // check for win condition, change banner text
    function winCondition(){
        
        if (playerScoreR === 5 && computerScoreR === 5){
            banner.textContent = 'WE HAVE A TIE!';
            document.body.setAttribute('style', 'background: linear-gradient(0deg, rgba(133,224,110,1) 0%, rgba(224,110,110,1) 100%)');
            gameEnd();
        } else if (playerScoreR === 5 && computerScoreR < 5) {
            banner.textContent = 'YOU WIN!';
            document.body.setAttribute('style', 'background: linear-gradient(0deg, rgba(1,177,165,0) 0%, rgba(133,224,110,1) 100%)');
            gameEnd();
        } else if (playerScoreR < 5 && computerScoreR === 5) {
            banner.textContent = 'COMPUTER WINS!'; 
            document.body.setAttribute('style', 'background: linear-gradient(0deg, rgba(1,177,165,0) 0%, rgba(224,110,110,1) 100%)');
            gameEnd();
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
        savedComputerSelection = computerSelection;
        return savedComputerSelection;
    }

    function gameEnd(){
        btn.setAttribute('style', 'display: none');
    }

    // compare user input and computer choice, return results, add tally to the score
    function playRound(playerSelection){
        getComputerChoice();
        if (playerSelection === savedComputerSelection){
            return playerScoreR += 1, computerScoreR += 1;
        } else if (playerSelection === 'rock' && savedComputerSelection === 'paper') {
            return computerScoreR += 1;
        } else if (playerSelection === 'scissors' && savedComputerSelection === 'rock'){
            return computerScoreR += 1;
        } else if (playerSelection === 'paper' && savedComputerSelection === 'scissors') {
            return computerScoreR += 1;
        } else return playerScoreR += 1;

        
    };
});