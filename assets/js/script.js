var timer = 60;
var questionCount = 0;

// start quiz DOM elements
var startEl = document.getElementById("start-btn");
var welcomeEl = document.querySelector(".welcome-page");
var countdownEl = document.querySelector("#countdown"); // number of seconds

// quiz DOM elements
var quizEl = document.querySelector(".quiz-container"); // div question container
var questionTitleEl = document.querySelector(".question"); // div question title
var listOptionEl = document.querySelector(".add-options"); // ul class for appendChild li
var optionAnswersEl = document.querySelector(".option-answers"); // li class

// quiz Array of questions and answers
var quizArr = [
  {
    question: "What does the term 'production' refer to?",
    answers: {
      option1: "The product that is currently being worked on.",
      option2: "The product that is currently being used by users.",
      option3: "The process of writing code.",
      option4: "The process of working with a team to produce a project.",
    },
    correctAnswer: 2,
  },
  {
    question: "What does DRY stand for?",
    answers: {
      option1: "don't repeat yourself",
      option2: "do repeat yourself",
      option3: "donuts rice yarn",
      option4: "debug refactor yesterday",
    },
    correctAnswer: 1,
  },
  {
    question: "When does wireframing for a project take place?",
    answers: {
      option1: "In the morning",
      option2: "At night",
      option3: "Before starting to type out any code for a new project",
      option4: "The second week of the month",
    },
    correctAnswer: 3,
  },
  {
    question: "What does 'mkdir' do in Git?",
    answers: {
      option1: "creates a new repository",
      option2: "shows the history of your previous commits",
      option3: "makes a new file",
      option4: "makes a new directory",
    },
    correctAnswer: 4,
  },
  {
    question: "Which is NOT true about the <section> tag in HTML?",
    answers: {
      option1: "It can be used instead of a <div> tag",
      option2: "It can be used to make for better search engine optimization",
      option3: "It makes all text bold",
      option4: "It requires a closing tag",
    },
    correctAnswer: 3,
  },
  {
    question:
      "What would the following declaration be showing each side get for padding? Padding: 10px, 20px, 0px, 5px",
    answers: {
      option1: "top: 10px, right: 20px, bottom: 0px, left: 5px",
      option2: "bottom: 10px, left: 20px, top: 0px, right: 5px",
      option3: "right: 10px, bottom: 20px, left: 0px, top: 5px",
      option4: "left: 10px, bottom: 20px, right: 0px, top: 5px",
    },
    correctAnswer: 1,
  },
];

function startQuiz() {
  welcomeEl.setAttribute("style", "display:none;");
  quizEl.setAttribute("style", "visibility:visible;");
  startTimer();
  quizQuestions();
};

// Generate question to page
function quizQuestions() {
  var currentQuestion = quizArr[questionCount].question;

  var renderQuestion = document.createElement("h2");
  renderQuestion.className = "question";
  renderQuestion.setAttribute("id", 5);
  renderQuestion.textContent = currentQuestion;
  questionTitleEl.appendChild(renderQuestion);

  var renderOption1 = document.createElement("li");
  renderOption1.className = "option-answers";
  renderOption1.setAttribute("id", 1);
  renderOption1.textContent = quizArr[questionCount].answers.option1;
  listOptionEl.appendChild(renderOption1);

  var renderOption2 = document.createElement("li");
  renderOption2.className = "option-answers";
  renderOption2.setAttribute("id", 2);
  renderOption2.textContent = quizArr[questionCount].answers.option2;
  listOptionEl.appendChild(renderOption2);

  var renderOption3 = document.createElement("li");
  renderOption3.className = "option-answers";
  renderOption3.setAttribute("id", 3);
  renderOption3.textContent = quizArr[questionCount].answers.option3;
  listOptionEl.appendChild(renderOption3);

  var renderOption4 = document.createElement("li");
  renderOption4.className = "option-answers";
  renderOption4.setAttribute("id", 4);
  renderOption4.textContent = quizArr[questionCount].answers.option4;
  listOptionEl.appendChild(renderOption4);

  renderOption1.addEventListener("click", clickOption);
  renderOption2.addEventListener("click", clickOption);
  renderOption3.addEventListener("click", clickOption);
  renderOption4.addEventListener("click", clickOption);
};

function clickOption(event) {
  var clicked = event.target.getAttribute("id");
  console.log(clicked);
  console.log(quizArr[questionCount].correctAnswer);

  if (clicked == quizArr[questionCount].correctAnswer) {
    nextQuestion();
  }
  else {
    timer = timer - 10;
    nextQuestion();
  }
}

function nextQuestion() {
  renderOption1 = document.getElementById(1);
  renderOption2 = document.getElementById(2);
  renderOption3 = document.getElementById(3);
  renderOption4 = document.getElementById(4);
  renderQuestion = document.getElementById(5);

  listOptionEl.removeChild(renderOption1);
  listOptionEl.removeChild(renderOption2);
  listOptionEl.removeChild(renderOption3);
  listOptionEl.removeChild(renderOption4);
  questionTitleEl.removeChild(renderQuestion);

    // console.log("event is listening");
  questionCount++;
  quizQuestions();
};

// Start timer function
function startTimer() {
  var timerInterval = setInterval(function () {
    if (timer > 0) {
      countdownEl.textContent = timer + " seconds";
      timer--;
    } else {
      countdownEl.textContent = 0 + " seconds";
      clearInterval(timerInterval);
    }
  }, 1000);
};

// event listeners
startEl.addEventListener("click", startQuiz);

