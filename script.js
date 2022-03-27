// var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0

// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [5, 6, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var totalTime = 15;
var clockID;
var startTimerID;
var numStrikes = 3;

function startGame(){
  //initialize game variables
  for (let a=0;a<pattern.length;a++) {
    pattern[a] = Math.floor(Math.random()*6+1);
  }
  clueHoldTime = 1000;
  progress = 0;
  gamePlaying = true;
  numStrikes = 3;
  totalTime = 15;
  document.getElementById("strikes").innerHTML = "Strikes Remaining: " + numStrikes;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence()
}

function stopGame(){
  clearInterval(clockID);
  clearTimeout(startTimerID);
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function clock() {
  totalTime -= 1;
  if (totalTime == 0) {
    document.getElementById("timer").innerHTML = "Time Remaining: 0";
    clearInterval(clockID);
    setTimeout(loseGame, 250);
  }
  else {
    document.getElementById("timer").innerHTML = "Time Remaining: " + totalTime;
  }
}
                    
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  document.getElementById("timer").innerHTML = "Time Remaining: " + 15;
  clearInterval(clockID);
  clearTimeout(startTimerID);
  totalTime = 15;
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime -= 75;

  startTimerID = setTimeout(startTimer, delay - 1000);
}

function startTimer() {
  clockID = setInterval(clock, 1000);
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if (btn == pattern[guessCounter]) {
    if (guessCounter < progress) {
      guessCounter++;
    } else {
      if (progress == pattern.length -1) {
      winGame();
      }
      progress++;
      playClueSequence();
    }
  } else {
    //Strikes
    numStrikes -= 1;
    if (numStrikes >= 0) {
      document.getElementById("strikes").innerHTML = "Strikes Remaining: " + numStrikes;
      playClueSequence();
    } else {
      loseGame();
    }
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function playMyAudio(btn){
  if(!tonePlaying) {
    document.getElementById("myAudio" + btn).play();
    tonePlaying = true
  }
}

function stopMyAudio(btn){
  document.getElementById("myAudio" + btn).pause();
  document.getElementById("myAudio" + btn).currentTime = 0
  tonePlaying = false;
}

function playTone(btn,len){ 
  playMyAudio(btn)
  setTimeout(function(){
    stopMyAudio(btn)
  },len)
}
