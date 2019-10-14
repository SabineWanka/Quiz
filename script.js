var questions = document.querySelector("#questions")
var startButton = document.querySelector("#startButton")
var submitButton = document.querySelector("#submitButton")
var clearButton = document.querySelector("#clearButton")
var backButton = document.querySelector("#backButton")
var score = 0
var right = 0
var wrong = 0


var secondsLeft = 75;

for (var i = 0; i < questions.length; i++) {
    var response = questions[i]
    if (response === question[i.answer]) {
        alert("Right");
        score++;
    else {
            alert("Wrong!");
            secondsLeft--;
        }
    }
}
alert("you got" + score + "/" + question.length);

function setTime() {
    var timerInterval = setInterval(timeFn, 75000);
}
function timeFn() {
    secondsLeft--;

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
    }
}
function stopTimer() {
    secondsElapsed = 0;
    setTime();
    renderTime();
}
startButton.addEventListener("click", startTimer);
submitButton.addEventListener("click", submitQuiz);
backButton.addEventListener("click");
clearButton.addEventListener("click")



