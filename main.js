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
    switch(humanChoice){
        case "rock":
            if(humanChoice == "rock" && computerChoice == "paper"){
                message = "You Loose! Paper Beats Rock."
                computerScore += 1;
            }
            else if(humanChoice == "rock" && computerChoice == "scissors"){
                message = "You Win! Rock Beats Scissors."
                humanScore += 1;
            }
            else{
                message = "Tie!"
            }
            break;
        case "paper":
            if(humanChoice == "paper" && computerChoice == "rock"){
                message = "You Win! Paper Beats Rock."
                humanScore += 1;
            }
            else if(humanChoice == "paper" && computerChoice == "scissors"){
                message = "You Loose! Scissors Beats Paper."
                computerScore += 1;
            }
            else{
                message = "Tie!"
            }
            break;
        case "scissors":
            if(humanChoice == "scissors" && computerChoice == "paper"){
                message = "You Win! Scissors Beats Paper."
                humanScore += 1;
            }
            else if(humanChoice == "scissors" && computerChoice == "rock"){
                message = "You Lose! Rock Beats Scissors."
                humanScore += 1;
            }
            else{
                message = "Tie!"
            }
            break;
        
    }
    return message;
}

function playGame(){
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

    if(humanScore > computerScore){
        console.log(`Winner: You\nScore:${humanScore}`);
    }
    else{
        console.log(`Winner: Computer\nScore:${computerScore}`);
    }

}

playGame()