var timer = 60;
var questionCount = 0;
var scoreKeeper = 0;

// start quiz DOM elements
var startEl = document.getElementById("start-btn");
var welcomeEl = document.querySelector(".welcome-page");
var countdownEl = document.querySelector("#countdown"); // display number of seconds on page
var scoreEl = document.querySelectorAll(".score"); // display score # on page

// quiz DOM elements
var quizEl = document.querySelector(".quiz-container"); // div question container
var questionTitleEl = document.querySelector(".question"); // div question title
var listOptionEl = document.querySelector(".add-options"); // ul class for appendChild li
var optionAnswersEl = document.querySelector(".option-answers"); // li class
var endQuizEl = document.querySelector(".end-score"); //score div 

// end quiz elements
var submitInitialsEl = document.querySelector(".end-submit"); // submit button for initials
var highScoresEl = document.querySelector(".high-scores"); // Previous high scores div
var addScoresEl = document.querySelector(".add-scores"); // ul class for appendChild li
var scoresArr = [];

// quiz Array of questions and answers
var quizArr = [
  {
    question: "What does the term 'production' refer to?",
    answers: {
      option1: "The product that is currently being worked on.",
      option2: "The product that is currently being used by users.",
      option3: "The process of refactoring code.",
      option4: "Working with the dream team.",
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

// Start quiz function, triggered by start button click
function startQuiz() {
  //Hide welcome div and show quiz div
  welcomeEl.setAttribute("style", "display:none;");
  quizEl.setAttribute("style", "visibility:visible;");

  startTimer();
  scoreTracker();
  quizQuestions();
};


// Start timer function
function startTimer() {
  var timerInterval = setInterval(function () {
    if (timer > 0) {
      countdownEl.textContent = timer + " seconds";
      timer--;
    } 
    else if (timer == 0) {
      countdownEl.textContent = 0 + " seconds";
      endQuiz();
    }
    else {
      countdownEl.textContent = 0 + " seconds";
      timer = 0;
      clearInterval(timerInterval);
    }
  }, 1000);
};

// Score tracker function
function scoreTracker() {
  for (var i = 0; i < scoreEl.length; i++) {
  scoreEl[i].textContent = scoreKeeper;
  }
};

// Generate question and options to page
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

  if (clicked == quizArr[questionCount].correctAnswer) {
    scoreKeeper += 10;
    scoreTracker();
    nextQuestion();
  }
  else if (clicked !== quizArr[questionCount].correctAnswer && timer > 10) {
    timer = timer - 10;
    nextQuestion();
  }
  else {
    endQuiz();
  }
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
  questionTitleEl.removeChild(renderQuestion);

  questionCount++; 
  
  if (questionCount < quizArr.length && timer > 0) {
    quizQuestions();
  } 
  else {
    endQuiz();
  }
};

function endQuiz() {
  quizEl.setAttribute("style", "display:none;");
  endQuizEl.setAttribute("style", "visibility: visible;");  
  timer = 0;
};

function endSubmitBtn(event) {
  highScoresEl.setAttribute("style", "visibility:visible;");
  var initialsEl = document.querySelector("input[class='enter-initials']").value; // initials form input
  
  event.preventDefault();

  // condition if no initials are entered
  if (initialsEl == "") {
    alert("Please input your initials!");
  }
  
  // else log score to array with initials and push to empty array
  currentScoresArr = [{
    initials: initialsEl,
    score: scoreKeeper, 
  }];
  scoresArr.push(currentScoresArr);

  // check if any scores are in localStoreage, if not then only log & display current score
  var checkScores = JSON.parse(localStorage.getItem("highScores"));

  if (checkScores === null){
    var listScores = document.createElement("li");
    listScores.className = "score-list";
    listScores.textContent = scoresArr[0][0].initials + " : "  + scoresArr[0][0].score;
    addScoresEl.appendChild(listScores);
    localStorage.setItem("highScores", JSON.stringify(scoresArr));
  }
  // if there are scores logged to localStorage than move on
  else {
  saveInitials();
  highScoresList();
  }
};

// save initials to localStorage is more than 1 score is saved
function saveInitials() {
  var savedScores = JSON.parse(localStorage.getItem("highScores"));
  localStorage.setItem("highScores", JSON.stringify(savedScores.concat(scoresArr)));
};

// display highscores if more than 1 score
function highScoresList() {
  var previousScores = JSON.parse(localStorage.getItem("highScores"));
  previousScores.sort((a,b) => b[0].score - a[0].score); // sorts by highest score & overwrites original array

  if (previousScores.length < 4) {
    for (var i = 0; i < previousScores.length; i++) {
      var listScores = document.createElement("li");
      listScores.className = "score-list";
      listScores.textContent = "Name: " + previousScores[i][0].initials + " | Score: "  + previousScores[i][0].score;
      addScoresEl.appendChild(listScores);
    }
  }
  else {
    for (var i = 0; i < 5; i++) {
      var listScores = document.createElement("li");
      listScores.className = "score-list";
      listScores.textContent = "Name: " + previousScores[i][0].initials + " | Score: "  + previousScores[i][0].score;
      addScoresEl.appendChild(listScores);
    }
  }
};

// event listeners
startEl.addEventListener("click", startQuiz);
submitInitialsEl.addEventListener("click", endSubmitBtn);
