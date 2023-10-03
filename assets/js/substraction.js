/* eslint-disable es6 */

var right1 = document.getElementById("right1");
var right2 = document.getElementById("right2");
var right3 = document.getElementById("right3");
var audio = document.getElementById("myAudio");
var currentScore = document.getElementById("current-score");
var timerDisplay = document.getElementById("timer");

var answer = 0;
var score = 0;
var timeLeft = 100;
var timer;

function generate_logic() {
    var fig1 = Math.floor(Math.random() * 13);
    var fig3 = Math.floor(Math.random() * 13);

    // Ensure that fig1 is greater than or equal to fig3 to avoid negative results
    if (fig1 < fig3) {
        var temp = fig1;
        fig1 = fig3;
        fig3 = temp;
    }

    answer = fig1 - fig3;

    document.getElementById("fig1").textContent = fig1;
    document.getElementById("fig3").textContent = fig3;

    var dummyAnswer1, dummyAnswer2;

    do {
        dummyAnswer1 = Math.floor(Math.random() * 13);
    } while (dummyAnswer1 === answer || dummyAnswer1 === fig1 - fig3);

    do {
        dummyAnswer2 = Math.floor(Math.random() * 13);
    } while (dummyAnswer2 === answer || dummyAnswer2 === fig1 - fig3 || dummyAnswer2 === dummyAnswer1);

    var allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    allAnswers = shuffleArray(allAnswers);

    right1.textContent = allAnswers[0];
    right2.textContent = allAnswers[1];
    right3.textContent = allAnswers[2];
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
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
    timeLeft = 60;
    generate_logic();
    updateScore();
    updateTimer();

    clearInterval(timer);
    timer = setInterval(function () {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(timer);

            // Scroll to the top
            window.scrollTo(0, 0);

            var finalScore = score;
            alert("Time's up! Your final score is " + finalScore);

            // Reload the page
            location.reload();
        }
    }, 1000);
}

function updateTime() {
    timeLeft--;
    document.getElementById("timer").innerHTML = timeLeft;

    if (timeLeft === 0) {
        clearInterval(timerId);
        alert("Time's up! Your final score is " + score + ".");
        location.reload();
    }
}

generate_logic();


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


function updateTime() {
    timeLeft--;
    document.getElementById("timer").innerHTML = timeLeft;

    if (timeLeft === 0) {
        clearInterval(timerId);
        alert("Time's up! Your final score is " + score + ".");
        location.reload();
    }
}

startGame();
