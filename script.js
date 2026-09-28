const choices = ["scissor", "paper", "rock"];
let computerScore = 0;
let humanScore = 0;
const noOfRounds = 5;
const beats = {
  rock: "scissor",
  paper: "rock",
  scissor: "paper",
};

const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

function getComputerChoice() {
  let computerPick = choices[Math.floor(Math.random() * choices.length)];
  return computerPick;
}

function getHumanChoice() {
  let humanChoice = prompt("'rock', 'paper' or 'scissor' ???");
  while (humanChoice !== null && !choices.includes(humanChoice)) {
    alert("Invalid choice");
    humanChoice = prompt("'rock', 'paper' or 'scissor' ???");
  }
  return humanChoice;
}

function singleRound() {
  const humanChoice = getHumanChoice();

  if (humanChoice == null) return false;

  const computerChoice = getComputerChoice();
  let message;

  if (humanChoice === computerChoice) {
    message = "Draw!";
  } else if (beats[humanChoice] === computerChoice) {
    message = `You win!, ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
    humanScore += 1;
  } else {
    message = `You lose!, ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
    computerScore += 1;
  }

  console.log(
    `Your choice: ${humanChoice}\nComputer choice: ${computerChoice}\n${message}`,
  );
  return true;
}

function playGame() {
  for (let round = 1; round <= noOfRounds; round++) {
    singleRound();
  }
  console.log("\n5 rounds finished.");
  humanScore > computerScore
    ? console.log("You won!!!")
    : console.log("You lose!!!");
}

playGame();
