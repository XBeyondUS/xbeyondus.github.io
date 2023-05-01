alert('A participant has entered the game room. Beginning new session...')

const computerChoiceDisplay = document.getElementById('computer-choice') // const that displays the computer choice
const userChoiceDisplay = document.getElementById('user-choice')         // const that displays the user choice
const resultDisplay = document.getElementById('result')                  // const that displays the end result of whether the user loses or wins
const possibleChoices = document.querySelectorAll("button")              //const for the buttons of game.
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {  //code for all possible choices of the rock, paper, scissors game
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() { // calls the computer choice upon the user selecting either rock, paper, or scissors.
  const randomNumber = Math.floor(Math.random() * 3) + 1 

  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {    // function that selects the end result if the user wins or loses
  if (computerChoice === userChoice) {
    alert('DRAW!!!')
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    alert('Congratulations!! You won!!')
    result = 'Victory! You win!'
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'The Computer won! GAMEOVER!'
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'Victory! You win!'
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'The Computer won! GAMEOVER!'
    alert('Aaaand the computer has won! Better luck next time!')
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'Victory! You win!'
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'The Computer won! GAMEOVER!!!'
  }
  resultDisplay.innerHTML = result
}

function betterCountdown() { //Function for the change order assignment
  var currTime = 10;
  for (var i = 1; i <= 11; i++) {
      if (i == 11) {
          setTimeout(function () {
              //code goes here for timer
              document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
          }, 1000 * i);
      } else if (i > 5) {
          setTimeout(function () {
              document.getElementById("countdownTimer").innerHTML =
                  "Warning Less than ½ way to launch, time left = " + currTime;
              currTime = currTime - 1;
          }, 1000 * i);
      } else {
          setTimeout(function () {
              document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
              currTime = currTime - 1;
          }, 1000 * i);
      }
  }
}



function countDown() //function for the countDown button
{alert("countdown");
    var currTime = 10;
    //timer for 10 sec left   
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 1000);

    //timer for 9 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 2000);{
    

    //timer for 8 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 3000);

    //timer for 7 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 4000);

    //timer for 6 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 5000);

    //timer for 5 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 6000);

    //timer for 4 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 7000);

    //timer for 3 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 8000);

    //timer for 2 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 9000);

    //timer for 1 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 10000);

    //timer for Blastoff
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 11000);
}
}