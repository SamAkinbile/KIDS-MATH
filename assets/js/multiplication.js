/* eslint-env es6 */

/* some of code may contain intruction from the youtube and openai */
var right1 = document.getElementById("right1");
var right2 = document.getElementById("right2");
var right3 = document.getElementById("right3");
var audio = document.getElementById("myAudio");
var answer = 0;
var score = 0;
var timeLeft = 60;
var timerId;

function generate_logic() {
    var fig1 = Math.floor(Math.random() * 13);
    var fig3 = Math.floor(Math.random() * 13);
    answer = fig1 * fig3;

    document.getElementById("fig1").innerHTML = fig1;
    document.getElementById("fig3").innerHTML = fig3;

    var allAnswers = [
        answer,
        Math.floor(Math.random() * 169),
        Math.floor(Math.random() * 169),
    ];

    // Shuffle the answer choices
    var switchAnswers = shuffleArray(allAnswers);

    right1.innerHTML = switchAnswers[0];
    right2.innerHTML = switchAnswers[1];
    right3.innerHTML = switchAnswers[2];
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function updateScore() {
    score++;
    document.getElementById("current-score").innerHTML = score;
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

timerId = setInterval(updateTime, 1000);

right1.addEventListener("click", function () {
    if (right1.innerHTML == answer) {
        generate_logic();
        updateScore();
        timeLeft += 2;
        document.getElementById("timer").innerHTML = timeLeft;
    } else {
        audio.play();
        timeLeft--;
        document.getElementById("timer").innerHTML = timeLeft;
    }
});

right2.addEventListener("click", function () {
    if (right2.innerHTML == answer) {
        generate_logic();
        updateScore();
        timeLeft += 2;
        document.getElementById("timer").innerHTML = timeLeft;
    } else {
        audio.play();
        timeLeft--;
        document.getElementById("timer").innerHTML = timeLeft;
    }
});

right3.addEventListener("click", function () {
    if (right3.innerHTML == answer) {
        generate_logic();
        updateScore();
        timeLeft += 2;
        document.getElementById("timer").innerHTML = timeLeft;
    } else {
        audio.play();
        timeLeft--;
        document.getElementById("timer").innerHTML = timeLeft;
    }
});
