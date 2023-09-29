let right1 = document.getElementById("right1");
let right2 = document.getElementById("right2");
let right3 = document.getElementById("right3");
let audio = document.getElementById("myAudio");
var answer = 0;

function generate_logic() {
    var fig1 = Math.floor(Math.random() * 13);
    var fig2 = Math.floor(Math.random() * 13);
    var fakeAnswe1 = Math.floor(Math.random() * 13);
    var fakeAnswer2 = Math.floor(Math.random() * 13);
    var allAnswer;
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
