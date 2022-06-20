var timer = 10;

// start quiz DOM elements
var startEl = document.querySelector("#start-btn");
var countdownEl = document.querySelector("#countdown");
var welcomeEl = document.querySelector(".welcome-page");

// quiz DOM elements
var quizEl = document.querySelector(".quiz-container"); // div question container
var quesTitleEl = document.querySelector(".question"); // div question title
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
    correctAnswer: "option2",
  },
  {
    question: "What does DRY stand for?",
    answers: {
      option1: "don't repeat yourself",
      option2: "do repeat yourself",
      option3: "donuts rice yarn",
      option4: "debug refactor yesterday",
    },
    correctAnswer: "option1",
  },
  {
    question: "When does wireframing for a project take place?",
    answers: {
      option1: "In the morning",
      option2: "At night",
      option3: "Before starting to type out any code for a new project",
      option4: "The second week of the month",
    },
    correctAnswer: "option3",
  },
  {
    question: "What does 'mkdir' do in Git?",
    answers: {
      option1: "creates a new repository",
      option2: "shows the history of your previous commits",
      option3: "makes a new file",
      option4: "makes a new directory",
    },
    correctAnswer: "option4",
  },
  {
    question: "Which is NOT true about the <section> tag in HTML?",
    answers: {
      option1: "It can be used instead of a <div> tag",
      option2: "It can be used to make for better search engine optimization",
      option3: "It makes all text bold",
      option4: "It requires a closing tag",
    },
    correctAnswer: "option3",
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
    correctAnswer: "option1",
  }
];

function startQuiz() {
  welcomeEl.setAttribute("style", "display:none;");
  quizEl.setAttribute("style", "visibility:visible;");
  startTimer();
  quizQuestions();
};

var count = 0;

// Generate question to page
function quizQuestions() {
  var currentQuestion = quizArr[count].question;

  var renderQuestion = document.createElement("h2");
    renderQuestion.className = "question";
    renderQuestion.setAttribute("id", 5);
    renderQuestion.textContent = currentQuestion;
    quesTitleEl.appendChild(renderQuestion);

  var renderOption1 = document.createElement("li");
    renderOption1.className = "option-answers";
    renderOption1.setAttribute("id", 1)
    renderOption1.textContent = quizArr[count].answers.option1;
    listOptionEl.appendChild(renderOption1);

  var renderOption2 = document.createElement("li");
    renderOption2.className = "option-answers";
    renderOption2.setAttribute("id", 2)
    renderOption2.textContent = quizArr[count].answers.option2;
    listOptionEl.appendChild(renderOption2);

  var renderOption3 = document.createElement("li");
    renderOption3.className = "option-answers";
    renderOption3.setAttribute("id", 3)
    renderOption3.textContent = quizArr[count].answers.option3;
    listOptionEl.appendChild(renderOption3);
    
  var renderOption4 = document.createElement("li");
    renderOption4.className = "option-answers";
    renderOption4.setAttribute("id", 4)
    renderOption4.textContent = quizArr[count].answers.option4;
    listOptionEl.appendChild(renderOption4);

    renderOption1.addEventListener("click", nextQuestion);
    renderOption2.addEventListener("click", nextQuestion);
    renderOption3.addEventListener("click", nextQuestion);
    renderOption4.addEventListener("click", nextQuestion);
  
};

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
  quesTitleEl.removeChild(renderQuestion);

  console.log("event is listening");
  count++;
  quizQuestions();
};

// /* Start timer function 

function startTimer() {
  countdownEl.textContent = timer + " seconds";
  timer--;

  if (timer < 0) {
    countdownEl.textContent = 0 + " seconds";
    clearInterval(timerInterval);
  }
};

var timerInterval = setInterval(startTimer, 1000);


// event listeners
startEl.addEventListener("click", startQuiz);
