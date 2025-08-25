let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    switch (random) {
        case 1:
            computerChoice = "rock"
            break;
        case 2:
            computerChoice = "paper"
            break;
        case 3:
            computerChoice = "scissors"
            break;
    }
    return computerChoice;
}
function getHumanCoice() {
    let humanChoice = window.prompt("Enter the Input:", "rock|paper|scissors")
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let message;
    switch (humanChoice) {
        case "rock":
            if (humanChoice == "rock" && computerChoice == "paper") {
                computerScore += 1;
                message = `You      : rock      Score:${humanScore} 
        ------------------------------
         Computer : paper     Score:${computerScore}
                
         😔You Loose! Paper Beats Rock.`
            }
            else if (humanChoice == "rock" && computerChoice == "scissors") {
                humanScore += 1;
                message = `You      : rock      Score:${humanScore} 
        ------------------------------
         Computer : scissors     Score:${computerScore}
                
         🏆You Win! Rock Beats Scissors.`
            }
            else {
                message = `You      : rock      Score:${humanScore} 
        ------------------------------
         Computer : rock     Score:${computerScore}
                
         Tie!.`
            }
            break;
        case "paper":
            if (humanChoice == "paper" && computerChoice == "rock") {
                humanScore += 1;
                message = `You      : paper      Score:${humanScore} 
        ------------------------------
         Computer : rock     Score:${computerScore}
                
         🏆You Win! Paper Beats Rock.`
            }
            else if (humanChoice == "paper" && computerChoice == "scissors") {
                computerScore += 1;
                message = `You      : paper      Score:${humanScore} 
        ------------------------------
         Computer : scissors    Score:${computerScore}
                
         😔You Loose! Scissors Beats Paper.`

            }
            else {
                message = `You      : paper      Score:${humanScore} 
        ------------------------------
         Computer : paper     Score:${computerScore}
                
         Tie!.`
            }
            break;
        case "scissors":
            if (humanChoice == "scissors" && computerChoice == "paper") {
                humanScore += 1;
                message = `You      : scissors      Score:${humanScore} 
        ------------------------------
         Computer : paper    Score:${computerScore}
                
         🏆You Win! Scissors Beats Paper.`

            }
            else if (humanChoice == "scissors" && computerChoice == "rock") {
                message = ""
                humanScore += 1;
                message = `You      : scissors      Score:${humanScore} 
        ------------------------------
         Computer : rock    Score:${computerScore}
                
         😔You Lose! Rock Beats Scissors.`

            }
            else {
                message = `You      : scissors      Score:${humanScore} 
        ------------------------------
         Computer : scissors     Score:${computerScore}
                
         Tie!.`
            }
            break;

    }
    return message;
}

function playGame() {
    let firstRound = playRound(getHumanCoice(), getComputerChoice());
    let secondRound = playRound(getHumanCoice(), getComputerChoice());
    let thirdRound = playRound(getHumanCoice(), getComputerChoice());
    let fourthRound = playRound(getHumanCoice(), getComputerChoice());
    let fifthRound = playRound(getHumanCoice(), getComputerChoice());

    console.log(`Round 1: ${firstRound}`)
    console.log(`Round 2: ${secondRound}`)
    console.log(`Round 3: ${thirdRound}`)
    console.log(`Round 4: ${fourthRound}`)
    console.log(`Round 5: ${fifthRound}`)

    if (humanScore > computerScore) {
        console.log(`🫵You Won the Game!\nScore:${humanScore}`);
    }
    else if (humanScore < computerScore) {
        console.log(`💻Computer Won the Game\nScore:${computerScore}`);
    }
    else {
        console.log("🪢Tie!")
    }

}

alert(`Rock Paper Scissors:
        #5 Rounds `)
playGame()