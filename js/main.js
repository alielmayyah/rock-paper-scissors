let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

let rockImage = document.querySelector(".rock-image").src;
let paperImage = document.querySelector(".paper-image").src;
let scissorsImage = document.querySelector(".scissors-image").src;

let mySelection = "";
let myImage = null;
let pcImage = null;

const resultElement = document.querySelector(".js-result");
const pcStateElement = document.querySelector(".pc-state");
const myStateElement = document.querySelector(".my-state");

let winCounter = 0;
let lossCounter = 0;
let tieCounter = 0;

const winsElement = document.querySelector(".wins");
const lossesElement = document.querySelector(".losses");
const tiesElement = document.querySelector(".ties");
const resetButton = document.querySelector(".reset");

let pcSelection = "";

function generatePC() {
  pcSelection = Math.random();
  if (pcSelection < 1 / 3) {
    pcSelection = "Rock";
    pcImage = rockImage;
  } else if (pcSelection > 1 / 3 && pcSelection < 2 / 3) {
    pcSelection = "Paper";
    pcImage = paperImage;
  } else {
    pcSelection = "Scissors";
    pcImage = scissorsImage;
  }
}

function updateCounters(result) {
  if (result === "win") {
    winCounter++;
    winsElement.textContent = `Wins: ${winCounter}`;
  } else if (result === "lose") {
    lossCounter++;
    lossesElement.textContent = `Losses: ${lossCounter}`;
  } else if (result === "tie") {
    tieCounter++;
    tiesElement.textContent = `Ties: ${tieCounter}`;
  }
}

rockButton.addEventListener("click", function () {
  generatePC();
  mySelection = "Rock";
  myImage = rockImage;
  if (pcSelection == "Rock") {
    resultElement.innerHTML = `Tie`;
    updateCounters("tie");
  } else if (pcSelection == "Paper") {
    resultElement.innerHTML = `You lose`;
    updateCounters("lose");
  } else if (pcSelection == "Scissors") {
    resultElement.innerHTML = `You Win`;
    updateCounters("win");
  }

  myStateElement.innerHTML = `You <img src="${myImage}" alt="Rock" width="75" height="75">`;
  pcStateElement.innerHTML = `PC <img src="${pcImage}" alt="${pcSelection}" width="75" height="75">`;
});

paperButton.addEventListener("click", function () {
  generatePC();
  mySelection = "Paper";
  myImage = paperImage;
  if (pcSelection == "Rock") {
    resultElement.innerHTML = `You Win`;
    updateCounters("win");
  } else if (pcSelection == "Paper") {
    resultElement.innerHTML = `Tie`;
    updateCounters("tie");
  } else if (pcSelection == "Scissors") {
    resultElement.innerHTML = `You lose`;
    updateCounters("lose");
  }

  myStateElement.innerHTML = `You <img src="${myImage}" alt="Paper" width="75" height="75">`;
  pcStateElement.innerHTML = `PC <img src="${pcImage}" alt="${pcSelection}" width="75" height="75">`;
});

scissorsButton.addEventListener("click", function () {
  generatePC();
  mySelection = "Scissors";
  myImage = scissorsImage;
  if (pcSelection == "Rock") {
    resultElement.innerHTML = `You lose`;
    updateCounters("lose");
  } else if (pcSelection == "Paper") {
    resultElement.innerHTML = `You Win`;
    updateCounters("win");
  } else if (pcSelection == "Scissors") {
    resultElement.innerHTML = `Tie`;
    updateCounters("tie");
  }

  myStateElement.innerHTML = `You <img src="${myImage}" alt="Scissors" width="75" height="75">`;
  pcStateElement.innerHTML = `PC <img src="${pcImage}" alt="${pcSelection}" width="75" height="75">`;
});

resetButton.addEventListener("click", function () {
  winCounter = 0;
  lossCounter = 0;
  tieCounter = 0;
  winsElement.textContent = `Wins: ${winCounter}`;
  lossesElement.textContent = `Losses: ${lossCounter}`;
  tiesElement.textContent = `Ties: ${tieCounter}`;
});
