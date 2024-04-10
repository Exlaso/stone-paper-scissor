const Options = ["rock", "paper", "scissors"];
const chooseUserChoice = (userSelectedOption) => {
  console.log("user ", userSelectedOption);
  const ComputerGeneratedOptions = Options[Math.floor(Math.random() * 3)];
  console.log("computer ", ComputerGeneratedOptions);
  if (userSelectedOption === ComputerGeneratedOptions) {
    console.log("Tie");
    resultoutput.innerHTML = "Tie !!!"
  } else {
    let UserWin = true;
    if (userSelectedOption === "rock") {
      UserWin =
        ComputerGeneratedOptions === "paper"
          ? false
          : ComputerGeneratedOptions === "scissors"
          ? true
          : false;
    } else if (userSelectedOption === "paper") {
      UserWin =
        ComputerGeneratedOptions === "scissors"
          ? false
          : ComputerGeneratedOptions === "rock"
          ? true
          : false;
    } else {
      UserWin =
        ComputerGeneratedOptions === "rock"
          ? false
          : ComputerGeneratedOptions === "paper"
          ? true
          : false;
    }
    console.log("user win", UserWin);
  }
};