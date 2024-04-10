const chooseUserChoice = (choice) => {
  const userSelected = document.getElementById("userSelected");
  
  console.log(userSelected);
  switch (choice) {
    case "rock":
      userSelected.src = "rock.png";
      break;
    case "paper":
      userSelected.src = "paper.png";
      break;
    case "scissors":
      userSelected.src = "scissors.png";
      break;

    default:
      break;
  }
  StartComputerChoosing();
};
let cScore = 0;
let uScore = 0;
const Options = ["rock.png", "paper.png", "scissors.png"];
const StartComputerChoosing = () => {
  let duration = 100;
  const interval = setInterval(() => {
    console.log(Options.at(Math.floor(Math.random() * Options.length)));
    document.getElementById("computerSelected").src = Options.at(
      Math.floor(Math.random() * Options.length)
    );
  }, duration);
  setTimeout(() => {
    clearInterval(interval);
    displayResult();
  }, 3000);
};

const displayResult = () => {
  const userSelected = document.getElementById("userSelected").src;
  const computerSelected = document.getElementById("computerSelected").src;
  const result = document.getElementById("result");
  const computerScore = document.getElementById("Computerscore");
  const userScore = document.getElementById("Userscore");

  if (userSelected === computerSelected) {
    result.innerHTML = "Tie!!";
  } else {
    let userWin = true;
    if (userSelected === "Rock") {
      //paper scissors
      userWin = computerSelected === "Paper" ? false : true;
    } else if (userSelected === "Paper") {
      //scissors , rock
      userWin = computerSelected === "Scissors" ? false : true;
    } else {
      userWin = computerSelected === "Rock" ? false : true;
    }
    result.innerHTML = userWin ? "You Win" : "You Lose";
    if (userWin) {
      uScore++;
      userScore.innerHTML = uScore;
    } else {
      cScore++;
      computerScore.innerHTML = cScore;
    }
  }
};