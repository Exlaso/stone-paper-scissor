const Option = ["rock","paper","scissor"];
const getImageByOption =(options)=>{
  switch(options){
    case "rock":
      return "rock.png"
    case "paper":
      return "paper.png"
    case "scissor":
      return "scissors.png"
  }
}
const chooseUserChoice = (userSelectedOption) =>{
console.log("user",userSelectedOption);
const ComputerGenratedOption = Option[Math.floor(Math.random()*3)]
const ResultOutput = document.getElementById("result")
const userSelectedElement = document.getElementById("userSelected")
const ComputerSelectedElement = document.getElementById("computerSelected")
userSelectedElement.getImageByOption(userSelectedOption)
userSelectedElement.getImageByOption(ComputerGenratedOption)
if (userSelectedOption == ComputerGenratedOption) {
  console.log("tie");
  ResultOutput.innerText = "Tie!!";
  ResultOutput.style.color = "black"
}else{
  let UserWin = true;
  if(userSelectedOption == "rock"){
    UserWin = ComputerGenratedOption == "paper"
    ? false
    : ComputerGenratedOption == "scissor"
    ? true
    :false;
  }else if(userSelectedOption == "paper"){
    UserWin = 
    ComputerGenratedOption == "scissor"
    ? false
    : ComputerGenratedOption == "rock"
    ?true
    :false;
  }else{
    UserWin = 
    ComputerGenratedOption == "rock"
    ? false
    : ComputerGenratedOption == "paper"
    ? true
    :false;
      }
    console.log("User Win",UserWin);
    if(UserWin){
      ResultOutput.innerText = "User Win";
      ResultOutput.style.color = "green"
    }else{
      ResultOutput.innerText = "User Lose";
      ResultOutput.style.color = "Red"
    } 
    }
};