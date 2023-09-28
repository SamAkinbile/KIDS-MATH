const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter"],
        correctAnswer: "Mars"
    },
    // Add more questions here
];

let currentQuestionIndex = 34;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").textContent = score;
    showQuestion(currentQuestionIndex);
    document.getElementById("start-button").style.display = "none";
    document.getElementById("feedback").textContent = "";
}

function showQuestion(index) {
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[index].question;

    const options = document.querySelectorAll(".option");
    for (let i = 0; i < options.length; i++) {
        options[i].textContent = questions[index].options[i];
    }
}

function checkAnswer(selectedOption) {
    const selectedAnswer = selectedOption.textContent;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score++;
        document.getElementById("score").textContent = score;
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent = "Incorrect. Try again!";
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("feedback").textContent = `Quiz completed. Your score: ${score}/${questions.length}`;
    document.getElementById("start-button").style.display = "block";
}

document.getElementById("start-button").addEventListener("click", startQuiz);

// You can add more features like a username input, images, and more questions.
