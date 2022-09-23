const choiceButtons = document.querySelectorAll(".choice");
const computerScoreSpan = document.querySelector("#computer");
const playerScoreSpan = document.querySelector("#you");
const roundResultText = document.querySelector(".round-text");
const resultText = document.querySelector(".result-text");

let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}
function handleChoiceClick(e) {
  playRound(e.target.innerText.toLowerCase(), getComputerChoice());
}
choiceButtons.forEach((choiceButton) => {
  choiceButton.addEventListener("click", handleChoiceClick);
});

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === computerSelection:
      roundResultText.innerText = `Tie!`;
      break;
    // Player wins in the following conditions
    case playerSelection === "rock" && computerSelection === "scissors":
    case playerSelection === "scissors" && computerSelection === "paper":
    case playerSelection === "paper" && computerSelection === "rock":
      playerScore++;
      playerScoreSpan.innerHTML = playerScore;
      roundResultText.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
      break;
    default:
      computerScore++;
      computerScoreSpan.innerHTML = computerScore;
      roundResultText.innerText = `You Lost! ${computerSelection} beats ${playerSelection}`;
      return;
  }

  //check if there is a winner
  if (computerScore === 5 || playerScore === 5) {
    //remove event listener
    choiceButtons.forEach((choiceButton) => {
      choiceButton.removeEventListener("click", handleChoiceClick);
    });
    //remove round result
    roundResultText.innerText = "";
    resultText.innerText = computerScore === 5 ? `Computer Wins!` : `You Win!`;
  }
}
