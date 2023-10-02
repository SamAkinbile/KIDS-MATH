// script.js //
let right1 = document.getElementById("right1");
let right2 = document.getElementById("right2");
let right3 = document.getElementById("right3");
let audio = document.getElementById("myAudio");
let currentScore = document.getElementById("current-score");
let timerDisplay = document.getElementById("timer");

let answer = 0;
let score = 0;
let timeLeft = 100;
let timer;

function generate_logic() {
  let fig1 = Math.floor(Math.random() * 13);
  let fig3 = Math.floor(Math.random() * 13);

  // Ensure that fig1 is greater than or equal to fig3 to avoid negative results
  if (fig1 < fig3) {
    let temp = fig1;
    fig1 = fig3;
    fig3 = temp;
  }

  answer = fig1 - fig3;

  document.getElementById("fig1").textContent = fig1;
  document.getElementById("fig3").textContent = fig3;

  let dummyAnswer1 = Math.floor(Math.random() * 13);
  let dummyAnswer2 = Math.floor(Math.random() * 13);

  let allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  allAnswers = shuffleArray(allAnswers);

  right1.textContent = allAnswers[0];
  right2.textContent = allAnswers[1];
  right3.textContent = allAnswers[2];
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function updateScore() {
  currentScore.textContent = score;
}

function updateTimer() {
  timerDisplay.textContent = timeLeft;
}

function startGame() {
  score = 0;
  timeLeft = 100;
  generate_logic();
  updateScore();
  updateTimer();

  clearInterval(timer);
  timer = setInterval(function () {
    timeLeft--;
    updateTimer();

    if (timeLeft === 0) {
      clearInterval(timer);
      alert("Game over! Your score: " + score);
    }
  }, 1000);
}

right1.addEventListener("click", function () {
  if (right1.textContent == answer) {
    score++;
    updateScore();
    generate_logic();
  } else {
    audio.play();
  }
});

right2.addEventListener("click", function () {
  if (right2.textContent == answer) {
    score++;
    updateScore();
    generate_logic();
  } else {
    audio.play();
  }
});

right3.addEventListener("click", function () {
  if (right3.textContent == answer) {
    score++;
    updateScore();
    generate_logic();
  } else {
    audio.play();
  }
});

startGame();
