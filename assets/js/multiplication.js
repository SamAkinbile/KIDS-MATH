let right1 = document.getElementById("right1");
let right2 = document.getElementById("right2");
let right3 = document.getElementById("right3");
let audio = document.getElementById("myAudio");
let answer = 0;

function generate_logic() {
    let fig1 = Math.floor(Math.random() * 13);
    let fig3 = Math.floor(Math.random() * 13);
    let dummyAnswer1 = Math.floor(Math.random() * 50);
    let dummyAnswer2 = Math.floor(Math.random() * 50);
    allAnswers = [],
        switchAnswers = [];


    answer = fig1 * fig3;

    document.getElementById("fig1").innerHTML = fig1;
    document.getElementById("fig3").innerHTML = fig3;


    let allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    // Shuffle the answer choices
    let switchAnswers = shuffleArray(allAnswers);

    right1.innerHTML = switchAnswers[0];
    right2.innerHTML = switchAnswers[1];
    right3.innerHTML = switchAnswers[2];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

right1.addEventListener("click", function () {
    if (right1.innerHTML == answer) {
        generate_logic();
    } else {
        audio.play();
    }
});

right2.addEventListener("click", function () {
    if (right2.innerHTML == answer) {
        generate_logic();
    } else {
        audio.play();
    }
});

right3.addEventListener("click", function () {
    if (right3.innerHTML == answer) {
        generate_logic();
    } else {
        audio.play();
    }
});

generate_logic();
