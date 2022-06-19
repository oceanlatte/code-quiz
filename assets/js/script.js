var timer = 10;

var startEl = document.querySelector("#start-btn");
var countdownEl = document.querySelector("#countdown");
var welcomeEl = document.querySelector(".welcome-page");

function hideWelcome() {
  welcomeEl.setAttribute("style", "display:none;");
}


// function startQuiz() {
//   console.log("start button clicked");
// };

// function timerCount() {
//   countdownEl.textContent = timer + " seconds";
//   timer--;
  
//   if (timer < 0) {
//     countdownEl.textContent = 0 + " seconds";
//     clearInterval(timerInterval);
//   }
// };

// var timerInterval = setInterval(timerCount, 1000);

// event listeners
startEl.addEventListener("click", hideWelcome);