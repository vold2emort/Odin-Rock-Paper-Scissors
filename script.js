const choices = ["scissor", "paper", "rock"];
let computerScore = 0;
let humanScore = 0;
const noOfRounds = 1;
const beats = {
  rock: "scissor",
  paper: "rock",
  scissor: "paper",
};

const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

const buttons = document.querySelectorAll(".choice-btn");

buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    let choice = event.target.value;
    playGame(choice);
  })
})

function getComputerChoice() {
  let computerPick = choices[Math.floor(Math.random() * choices.length)];
  return computerPick;
}

function singleRound(choice) {
  const humanChoice = choice;

  if (humanChoice == null) return false;

  const computerChoice = getComputerChoice();
  let message;

  const cscore_span = document.querySelector("#computer-score");
  const cchoice_span = document.querySelector("#computer-choice");
  const hchoice_span = document.querySelector("#human-choice");
  const hscore_span = document.querySelector("#human-score");
  const msg_span = document.querySelector("#round-result");

  if (humanChoice === computerChoice) {
    message = "Draw!";
  } else if (beats[humanChoice] === computerChoice) {
    message = `You win!, ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
    humanScore += 1;
  } else {
    message = `You lose!, ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
    computerScore += 1;
  }
  hscore_span.textContent = `${humanScore}`;
  cscore_span.textContent = `${computerScore}`;
  hchoice_span.textContent = `${humanChoice}`;
  cchoice_span.textContent = `${computerChoice}`;

  msg_span.textContent = `${message}`;

}

function playGame(choice) {
  singleRound(choice);

  if (humanScore >= 5) {
    alert("You win!!!");
    window.location.reload();
  }
  else if (computerScore >= 5) {
    alert("You loose!!!");
    window.location.reload();
  }
}

playGame();
