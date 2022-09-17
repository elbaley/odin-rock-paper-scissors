const gameRounds = 5;
let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === computerSelection:
      console.log(`Tie! ${playerSelection}-${computerSelection}`);
      break;
    // Player wins in the following conditions
    case playerSelection === "rock" && computerSelection === "scissors":
    case playerSelection === "scissors" && computerSelection === "paper":
    case playerSelection === "paper" && computerSelection === "rock":
      playerScore++;
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      break;
    default:
      computerScore++;
      console.log(`You Lost! ${computerSelection} beats ${playerSelection}`);
      return;
  }
}

function game() {
  //play rounds
  for (let i = 0; i < gameRounds; i++) {
    let playerSelection;
    const computerSelection = getComputerChoice();
    // ask for player selection
    while (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissors"
    ) {
      playerSelection = prompt(
        "Select your weapon! (rock|paper|scissors)"
      ).toLowerCase();
    }
    // Play the round
    playRound(playerSelection, computerSelection);
    // Log scores
    console.log(`Player= ${playerScore} | Computer= ${computerScore}`);
  }
  //display the winner
  if (computerScore === playerScore) {
    console.log("GAME OVER! TIE!");
  } else if (computerScore > playerScore) {
    console.log("GAME OVER! Computer Wins!");
  } else {
    console.log("GAME OVER! Player Wins!");
  }
}
//start the game
game();
