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

function playRound(humanChoice, computerChoice) {

    const yourScore = document.querySelector("#yourScore")
    const yourChoice = document.querySelector("#yourChoice")
    const pcChoice = document.querySelector("#pcChoice")
    const pcScore = document.querySelector("#pcScore")

    humanChoice = humanChoice.toLowerCase();



    switch (humanChoice) {
        case "rock":
            if (humanChoice == "rock" && computerChoice == "paper") {
                computerScore += 1;
                yourChoice.textContent = "🪨Rock"
                pcChoice.textContent = "📃Paper"
                result.textContent = `😔Computer +1 Point!`
                result.style = "color:red;font-weight: 700;font-size: 3em;"
                pcScore.textContent = computerScore;
            }
            else if (humanChoice == "rock" && computerChoice == "scissors") {
                humanScore += 1;
                yourChoice.textContent = "🪨Rock"
                pcChoice.textContent = "✂️Scissors"
                result.textContent = `You: +1 Point`
                result.style = "color:green;font-weight: 700;font-size: 3em;"
                yourScore.textContent = humanScore;
            }
            else {
                yourChoice.textContent = "🪨Rock"
                pcChoice.textContent = "🪨Rock"
                result.textContent = `🪢Tie!.`
                result.style = "color:navy;font-weight: bold;font-size: 3em;"
            }
            break;
        case "paper":
            if (humanChoice == "paper" && computerChoice == "rock") {
                humanScore += 1;
                yourChoice.textContent = "📃Paper"
                pcChoice.textContent = "🪨Rock"
                result.textContent = `You: +1 Point`
                result.style = "color:green;font-weight: 700;font-size: 3em;"
                yourScore.textContent = humanScore;
            }
            else if (humanChoice == "paper" && computerChoice == "scissors") {
                computerScore += 1;
                yourChoice.textContent = "📃Paper"
                pcChoice.textContent = "✂️Scissors"
                result.textContent = `😔Computer +1 Point!`
                result.style = "color:red;font-weight: 700;font-size: 3em;"
                pcScore.textContent = computerScore;
            }
            else {
                yourChoice.textContent = "📃Paper"
                pcChoice.textContent = "📃Paper"
                result.textContent = `🪢Tie!.`
                result.style = "color:coral;font-weight: bold;font-size: 3em;"
            }
            break;
        case "scissors":
            if (humanChoice == "scissors" && computerChoice == "paper") {
                humanScore += 1;
                yourChoice.textContent = "✂️Scissors"
                pcChoice.textContent = "📃Paper"
                result.textContent = `You: +1 Point`
                result.style = "color:green;font-weight: 700;font-size: 3em;"
                yourScore.textContent = humanScore;
            }
            else if (humanChoice == "scissors" && computerChoice == "rock") {
                computerScore += 1;
                yourChoice.textContent = "✂️Scissors"
                pcChoice.textContent = "🪨Rock"
                result.textContent = `😔Computer +1 Point!`
                result.style = "color:red;font-weight: 700;font-size: 3em;"
                pcScore.textContent = computerScore;
            }
            else {
                yourChoice.textContent = "✂️Scissors"
                pcChoice.textContent = "✂️Scissors"
                result.textContent = `🪢Tie!.`
                result.style = "color:navy;font-weight: bold;font-size: 3em;"
            }
            break;

    }
    if (humanScore > 4) {
        result.textContent = "🫵YOU WON THE GAME!🏆";
        playAgainBtn.style = "visibility:visible;"
    }
    if (computerScore > 4) {
        result.textContent = "💻COMPUTER WON THE GAME!😔";
        playAgainBtn.style = "visibility:visible;"
       
    }

}


const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const playAgainBtn = document.querySelector("#playAgain")
playAgainBtn.style = "visibility: hidden;"

buttons.forEach((button) => {
    let humanChoice = button.textContent;
    button.addEventListener("click", (e) => {
        if(humanScore>4 || computerScore > 4){
            return;
        }
        playRound(humanChoice, getComputerChoice());
    })

})

playAgainBtn.addEventListener("click", (e) => {

    location.reload();
});
