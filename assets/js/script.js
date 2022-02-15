// Ensures DOM is loaded before quiz starts
document.addEventListener("DOMContentLoaded", function () {
    // Quiz begins after form is completed
    let playButton = document.getElementById("play-btn");
    playButton.addEventListener("click", questionLoop);
});

// variables for questions loop
let currentQuestionNumber;
let newQuestion = document.getElementById("question");
let answerOne = document.getElementById("answer1");
let answerOneLabel = document.getElementsByTagName("label")[4];
let answerTwo = document.getElementById("answer2");
let answerTwoLabel = document.getElementsByTagName("label")[5];
let answerThree = document.getElementById("answer3");
let answerThreeLabel = document.getElementsByTagName("label")[6];
let answerFour = document.getElementById("answer4");
let answerFourLabel = document.getElementsByTagName("label")[7];
let nextButton = document.getElementById("nxt-btn");
let questions = [
    { question: "What is the scientific name for penguins?",
    answers: {
        a: "Gallus gallus domesticus",
        b: "Serinus canaria domestica",
        c: "Trochilidae",
        d: "Spheniscidae"
    },
    correctAnswer: "Spheniscidae"
    },
    { question: "How many species of penguins are there?",
    answers: {
        a: "14",
        b: "18",
        c: "20",
        d: "12"
    },
    correctAnswer: "18"
    },
    { question: "What species of penguin is the largest?",
    answers: {
        a: "King",
        b: "Macaroni",
        c: "Emperor",
        d: "Royal"
    },
    correctAnswer: "Emperor"
    },
    { question: "What species of penguin is the smallest?",
    answers: {
        a: "Fairy",
        b: "Chinstrap",
        c: "African",
        d: "Humboldt"
    },
    correctAnswer: "Fairy"
    },
    { question: "Where do penguins live?",
    answers: {
        a: "The north pole",
        b: "Antarctica",
        c: "South of the equator",
        d: "North of the equator"
    },
    correctAnswer: "South of the equator"
    },
    { question: "How many species of penguins are endangered?",
    answers: {
        a: "10",
        b: "12",
        c: "14",
        d: "20"
    },
    correctAnswer: "10"
    },
    { question: "What do penguins eat?",
    answers: {
        a: "fish",
        b: "squid",
        c: "krill",
        d: "All of the above"
    },
    correctAnswer: "All of the above"
    },
    { question: "How long can Emperor penguins hold their breath underwater?",
    answers: {
        a: "20 minutes",
        b: "27 minutes",
        c: "15 minutes",
        d: "6 minutes"
    },
    correctAnswer: "27 minutes"
    },
    { question: "How deep can Emperor penguins swim?",
    answers: {
        a: "100m",
        b: "200m",
        c: "500m",
        d: "300m"
    },
    correctAnswer: "500m"
    },
    { question: "What is the longest lifespan of a penguin?",
    answers: {
        a: "6 years",
        b: "10 years",
        c: "20 years",
        d: "30 years"
    },
    correctAnswer: "30 years"
    },
    { question: "Are male penguins the only ones that incubate the eggs?",
    answers: {
        a: "Yes",
        b: "No, the females do",
        c: "No, the male and the female take turns",
        d: "Penguins don't incubate their eggs"
    },
    correctAnswer: "No, the male and the female take turns"
    },
    { question: "What are baby penguins called?",
    answers: {
        a: "Chicks",
        b: "Nestlings",
        c: "Both a and b",
        d: "None of the above"
    },
    correctAnswer: "Both a and b"
    },
];

// variables for answer submit and check
let selectedAnswer;
let radioButtons = document.querySelectorAll("input[name='answer']");
let submitButton = document.getElementById("submit-btn");
let scoreCounter = document.getElementById("score");
let answerAlert = document.getElementById("answer-alert");
let closeButton = document.getElementById("close");

// Feedback and endgame variables
let feedbackButton = document.getElementById("feedback-btn");

/**
 * Initiates loop through array of questions and answers
 */
function questionLoop() {
    document.getElementById("form").classList.add("hide");
    document.getElementById("game").classList.remove("hide");
    document.getElementById("score-counter").classList.remove("hide");
    for (let i = 0; i < questions.length; i++){
        currentQuestionNumber = 0;
        displayQuestion();
    }
}

/**
 * Continues iterations for the remainder of the
 * questions array and ends quiz
 */
function nextQuestion () {
    currentQuestionNumber++;
    if (currentQuestionNumber < questions.length){
    questions.forEach(displayQuestion);
    } else {
        document.getElementById("modal").classList.remove("hide");
        answerAlert.innerHTML= `Congratulations! You have completed this quiz!
        You answered ${scoreCounter.innerHTML} question(s) out of ${questions.length} correctly!`;
        closeButton.addEventListener("click", endGame);
    }
}

/**
 * Displays quiz questions and answers
 */
function displayQuestion() {
    newQuestion.innerText = questions[currentQuestionNumber].question;
    answerOne.value = questions[currentQuestionNumber].answers.a;
    answerOneLabel.innerText = answerOne.value;
    answerTwo.value = questions[currentQuestionNumber].answers.b;
    answerTwoLabel.innerText = answerTwo.value;
    answerThree.value = questions[currentQuestionNumber].answers.c;
    answerThreeLabel.innerText = answerThree.value;
    answerFour.value = questions[currentQuestionNumber].answers.d;
    answerFourLabel.innerText = answerFour.value;
    submitButton.addEventListener("click", storeAnswer);
}

/**
 * Stores answer from radio button
 */
// Code from https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
function storeAnswer() {
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedAnswer = radioButton.value;
            checkAnswer();
        }
    }
}

/**
 * Checks if entered answer matches correct answer
 * for current question
 */
function checkAnswer() {
    if (selectedAnswer === questions[currentQuestionNumber].correctAnswer){
        document.getElementById("modal").classList.remove("hide");
        answerAlert.innerHTML = "Good job! You got it right!";
        scoreCounter.innerHTML++;
        closeButton.addEventListener("click", closeModal);
        nextButton.addEventListener("click", nextQuestion);

    } else {
        document.getElementById("modal").classList.remove("hide");
        answerAlert.innerHTML = `You answered: ${selectedAnswer}. The correct
        answer was: ${questions[currentQuestionNumber].correctAnswer}.`;
        closeButton.addEventListener("click", closeModal);
        nextButton.addEventListener("click", nextQuestion);
    }
}

/**
 * Closes modal box
 */
function closeModal() {
    document.getElementById("modal").classList.add("hide");
}


/**
 * Ends quiz and displays feedback textarea
 */
function endGame() {
    document.getElementById("game").classList.add("hide");
    document.getElementById("score-counter").classList.add("hide");
    document.getElementById("feedback-space").classList.remove("hide");
    feedbackButton.addEventListener("click", thankYou);
}

/**
 * Thanks user for playing game
 */
function thankYou () {
    document.getElementById("feedback-space").classList.add("hide");
    document.getElementById("end-game").classList.remove("hide");
}