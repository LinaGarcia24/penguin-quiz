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
]

let question = document.getElementById('question').innerText;
console.log(question);