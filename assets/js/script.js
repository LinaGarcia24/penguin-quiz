// Ensures DOM is loaded before quiz starts
document.addEventListener("DOMContentLoaded", function () {
    // Quiz begins after form is completed
    let playButton = document.getElementById('play-btn');
    playButton.addEventListener('click', displayQuestion);
});

/**
 * Displays quiz questions and answers
 */

function displayQuestion() {
    console.log('form completed');
       
    let questions = [
        { question: "What is the scientific name for penguins?",
        answers: {
            a: "Gallus gallus domesticus",
            b: "Serinus canaria domestica",
            c: "Trochilidae",
            d: "Spheniscidae"
        },
        correctAnswer: "d"
        },
        { question: "How many species of penguins are there?",
        answers: {
            a: "14",
            b: "18",
            c: "20",
            d: "12"
        },
        correctAnswer: "b"
        },
        { question: "What species of penguin is the largest?",
        answers: {
            a: "King",
            b: "Macaroni",
            c: "Emperor",
            d: "Royal"
        },
        correctAnswer: "c"
        },
        { question: "What species of penguin is the smallest?",
        answers: {
            a: "Fairy",
            b: "Chinstrap",
            c: "African",
            d: "Humboldt"
        },
        correctAnswer: "a"
        },
        { question: "Where do penguins live?",
        answers: {
            a: "The north pole",
            b: "Antarctica",
            c: "South of the equator",
            d: "North of the equator"
        },
        correctAnswer: "c"
        },
        { question: "How many species of penguins are endangered?",
        answers: {
            a: "10",
            b: "12",
            c: "14",
            d: "20"
        },
        correctAnswer: "a"
        },
        { question: "What do penguins eat?",
        answers: {
            a: "fish",
            b: "squid",
            c: "krill",
            d: "All of the above"
        },
        correctAnswer: "d"
        },
        { question: "How long can Emperor penguins hold their breath underwater?",
        answers: {
            a: "20 minutes",
            b: "27 minutes",
            c: "15 minutes",
            d: "6 minutes"
        },
        correctAnswer: "b"
        },
        { question: "How deep can Emperor penguins swim?",
        answers: {
            a: "100m",
            b: "200m",
            c: "500m",
            d: "300m"
        },
        correctAnswer: "c"
        },
        { question: "What is the longest lifespan of a penguin?",
        answers: {
            a: "6 years",
            b: "10 years",
            c: "20 years",
            d: "30 years"
        },
        correctAnswer: "d"
        },
        { question: "Are male penguins the only ones that incubate the eggs?",
        answers: {
            a: "Yes",
            b: "No, the females do",
            c: "No, the male and the female take turns",
            d: "Penguins don't incubate their eggs"
        },
        correctAnswer: "c"
        },
        { question: "What are baby penguins called?",
        answers: {
            a: "Chicks",
            b: "Nestlings",
            c: "Both a and b",
            d: "None of the above"
        },
        correctAnswer: "c"
        },
    ]

    for (let i=0; i < questions.length; i++) {
        let question = document.getElementById('question').innerText;
        console.log(question);

    }

    }

