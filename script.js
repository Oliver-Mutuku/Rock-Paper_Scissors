function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}


// Using recursion(function calling itself). 
// This should however be used judiciously because it can potentially lead to stack overflow errors

// function humanChoice () {
//     let playerChoice = prompt("Choose one of the options: rock / paper / scissors");
//     if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
//         return humanChoice();
//     } else {
//         return playerChoice;
//     }
// }
// console.log(humanChoice())


function getHumanChoice() {
    let playerChoice;
    do {
        playerChoice = prompt("Choose one of the options: rock / paper / scissors").toLowerCase();
    } while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors');

    return playerChoice;
}


let computerScore = 0;
let humanScore = 0;


function playRound (computerChoice, humanChoice) {

        if (computerChoice === humanChoice) {
            computerScore += 1;
            humanScore += 1;
            alert(`That was a draw! Computer chose ${computerChoice}. Scores increment by one for each. Computer Score is now ${computerScore}. Your score is ${humanScore}.`);

        } else if (computerChoice === 'rock' && humanChoice === 'scissors' ||
                    computerChoice === 'paper' && humanChoice === 'rock' ||
                    computerChoice == 'scissors' && humanChoice === 'paper'
        ) {
            computerScore++;
            alert(`Computer wins. ${computerChoice} beats ${humanChoice}. Computer Score is now ${computerScore}. Your score is ${humanScore}.`);
        }
        else {
            humanScore++;
            alert(`You win. Computer chose ${computerChoice}. ${humanChoice} beats ${computerChoice}. Computer Score is now ${computerScore}. Your score is ${humanScore}.`);
        }
        return (computerScore, humanScore);
    
}


// console.log(playRound(humanSelection, computerSelection))

function playGame () {
    let count = 0;
    while (count < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection)
        count++
    }
    console.log("GAME OVER");
    if (computerScore === humanScore) {
        alert("Turns out that was a Draw. Good game");
    }
    else if (computerScore > humanScore) {
        alert(`Computer won by ${computerScore} to ${humanScore}`);
    } else {
        alert(`You won by ${humanScore} to ${computerScore}`);
    }
}


playGame();




