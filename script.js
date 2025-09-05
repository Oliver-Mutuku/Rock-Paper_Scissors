function getComputerChoice() {
    let compChoice = Math.floor(Math.random() *3)

    switch(compChoice) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function getHumanChoice() {
    let humanChoice = prompt("What is your choice? ").trim().toLowerCase()

    while (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        alert("Wrong choice. Please enter either 'rock' or 'paper' or 'scissors'")
        humanChoice = prompt("What is your choice? ").trim().toLowerCase()
    }
    return humanChoice
}

function playRound() {
    let comp = getComputerChoice()
    let human = getHumanChoice()

    if (comp === human) {
        return {winner: 'tie', message: `That's a tie. You chose: ${human.toUpperCase()}, Computer chose: ${comp.toUpperCase()}`};
    } else if (
        comp === 'rock' && human === 'paper' ||
        comp === 'paper' && human === 'scissors' ||
        comp === 'scissors' && human === 'rock'
    ) {
        return {winner: "human", message: `You win. You chose: ${human}, Computer chose: ${comp}. ${human.toUpperCase()} beats ${comp.toUpperCase()}.`}
    } else {
        return {winner: "computer", message: `Computer wins. Computer chose: ${comp}, You chose ${human}. ${comp.toUpperCase()} beats ${human.toUpperCase()}.`}
    }
}

function playGame() {
    let humanScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i++) {
        let round = playRound()
        console.log(round.message)
        console.log(`Winner: ${round.winner}`)

        if (round.winner === 'human'){
            humanScore++
        } else if (round.winner === 'comp') {
            compScore++
        }
        console.log(`YOU: ${humanScore}`)
        console.log(`COMPUTER: ${compScore}`)
    }

    console.log("==================================")

    if (humanScore === compScore) {
        console.log(`That was a tie. Computer scored --> ${compScore}. You scored ${humanScore}.`)
    } else if (humanScore > compScore) {
        console.log(`🎉 You won. Computer scored --> ${compScore}. You scored ${humanScore}.`)
    } else {
        console.log(`💻 Computer won. Computer scored --> ${compScore}. You scored ${humanScore}.`)
    }

}

playGame()

