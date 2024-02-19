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
               
        
            let choiceArray = [
                'rock',
                'paper',
                'scissors'
            ];
    
           playGame();
           
            
            
    
    
            
            // computer decides on their choice from array
            function getComputerChoice(){
                let choiceIndex = Math.floor(Math.random() * choiceArray.length);
                let computerSelection = choiceArray[choiceIndex];
                console.log('The computer has selected ', computerSelection.toUpperCase());
                savedComputerSelection = computerSelection.toUpperCase();
                return savedComputerSelection;
            }
           
       
    
            // compare user input and computer choice, return results
            function playRound(playerSelection, savedComputerSelection){
                
                if (playerSelection === savedComputerSelection){
                    console.log('We have a tie, you both selected ', playerSelection);
                } else if (playerSelection === 'ROCK' && savedComputerSelection === 'PAPER') {
                    console.log('Paper beats rock - you LOSE!');
                } else if (playerSelection === 'SCISSORS' && savedComputerSelection === 'ROCK'){
                    console.log('Rock beats scissors - you LOSE!');
                } else if (playerSelection === 'PAPER' && savedComputerSelection === 'SCISSORS') {
                    console.log('Scissors beats paper - you LOSE!');
                } else console.log(playerSelection, ' beats ', savedComputerSelection, ' - you WIN!');
                
            }
    
            //play 5 rounds of the game
            function playGame(){
                for (let i = 0; i < 4; i++){
    
                // ask for user input, convert to upper case for later comparison
                let inputUser = prompt('Please type either rock, paper or scissors');
                let playerSelection = inputUser.toUpperCase();
    
                getComputerChoice();
                playRound(playerSelection, savedComputerSelection);
                
                }
            }
    