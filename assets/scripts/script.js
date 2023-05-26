var quizData = [
  {
    question: "A very useful tool used during development and debugging is?",
    a: "terminal/bash",
    b: "for loops",
    c: "console.log",
    d: "javascript",
    correct: "c",
  },
  {
    question:
      "String values must be enclosed within_____ when being assigned to variables?",
    a: "commas",
    b: "curley brackets",
    c: "quotes",
    d: "parenthesis",
    correct: "b",
  },
  {
    question: "Arrays in JavaScript can be used to store_____?",
    a: "numbers and strings",
    b: "other arrays",
    c: "booleans",
    d: "all of the above",
    correct: "d",
  },
  {
    question: "Commonly used data types do NOT include ____?",
    a: "strings",
    b: "booleans",
    c: "alerts",
    d: "numbers",
    correct: "b",
  },
];
var timerEl = document.getElementById("timer");
var quiz = document.getElementById("quiz");
var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
var submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 75;
loadQuiz();

function loadQuiz() {
  timerEl.textContent = score;
  deselectAnswers();
  var currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function countdown() {
  var timeLeft = 75;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}
countdown();
submitBtn.addEventListener("click", () => {
  var answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      // score++;
    } else {
      score -= 10;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You scored ${score}</h2>
        <button onclick="location.href='highscores.html'")">High scores</button>
        `;
    }
  }
});
localStorage.setItem("score", score);
