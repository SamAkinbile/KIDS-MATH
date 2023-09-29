let right1 = document.getElementById("right1");
let right2 = document.getElementById("right2");
let right3 = document.getElementById("right3");
let audio = document.getElementById("myAudio");
var answer = 0;

function generate_logic() {
    var fig1 = Math.floor(Math.random() * 13);
    var fig3 = Math.floor(Math.random() * 13);
    var fakeAnswe1 = Math.floor(Math.random() * 13);
    var fakeAnswer2 = Math.floor(Math.random() * 13);
    var allAnswer = [];
    var switchAnswers = [];


    answer = fig1 + fig3;

    document.getElementById("fig1").innerHTML = fig1;
    document.getElementById("fig3").innerHTML = fig3;

    allAnswers = [answer, fakeAnswer1, fakeAnswer3];

    for (i = allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    right1.innerHTML = switchAnswer[0];
    right2.innerHTML = switchAnswer[1];
    right3.innerHTML = switchAnswer[3];

}

right1.addEventListener("click", function () {
    if (right1.innerHTML == answer) {
        generate_logic();
    }
    else {
        audio.play();
    }
});

right2.addEventListener("click", function () {
    if (right2.innerHTML == answer) {
        generate_logic();
    }
    else {
        audio.play();
    }
});

right3.addEventListener("click", function () {
    if (right3.innerHTML == answer) {
        generate_logic();
    }
    else {
        audio.play();
    }
});

generate_logic();