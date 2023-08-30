const quizData = [
    {
        question: "The basis of all languages is ?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "b",
    },
    {
        question: "Full Form of CSS ?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "Full Form of HTML ?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborghinis",
        correct: "a",
    },
    {
        question: "First prime minister of India",
        a: "Rajiv Gandhi",
        b: "Pandit Javaharlal Nehru ",
        c: "Sardar Vallabhai patel",
        d: "None",
        correct: "b",
    },
    {
        question : "What is the ful-form of IBM ?",
        a: "Internet Bandwidth Machines ",
        b: "Internet  Business Machines",
        c: "International Business Machines",
        d: "None",
        correct: "c",
    },
    {
        question : "All mathematical and logical functions in the computer are done by?",
        a: "CPU",
        b: "RAM",
        c: "Processor",
        d: "ALU",
        correct: "a",
    },
    {
        question : "The first world cup Winning captain ?",
        a: "Sunil Gavaskar",
        b: "Ravi Shastri",
        c: "Kapil Dev",
        d: "MS Dhoni",
        correct: "c",
    }

];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
<h2>You have answered ${score}/${quizData.length} questions correctly  </h2>
<button onclick="history.go(0)">Again</button>
`;
        }
    }
});