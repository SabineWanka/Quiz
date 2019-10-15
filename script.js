var questions = document.querySelector("#questions");
var startButton = document.querySelector("#startButton");
var submitButton = document.querySelector("#submitButton");
var clearButton = document.querySelector("#clearButton");
var backButton = document.querySelector("#backButton");
var final = document.querySelector("#final");
var highScores = document.querySelector("#highScores");
var initialInput = document.querySelector("#initial");
var score = 0
var right = 0
var wrong = 0

var secondsLeft = 75000;

getHighScores();

for (var i = 0; i < questions.length; i++) {
    var response = questions[i]
    if (response === questions[i.answer]) {
        alert("Right");
        score++;
    }
    else {
        alert("Wrong!");
        secondsLeft--;
    }
}

alert("you got" + score + "/" + questions.length);

function startButton() {
    var questions = document.querySelector("#questions")
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function submitButton() {
    var final = document.querySelector("#final")
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function backButton() {
    var highScores = document.querySelector("#highScores")
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }

}

function clearButton() {
    var highScores = document.querySelector("#highScores")
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }

}

function startTimer() {
    setTime();

    interval = setInterval(function () {
        secondsElapsed++;
        renderTime();
    }, 75000);
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

function renderhighScores() {
    var highScores = localStorage.getItem("highScores")

}
var highScores = document.querySelector("#highScores").value

localStorage.setItem("highScores", highScores)



startButton.addEventListener("click", startTimer);
submitButton.addEventListener("click", submitQuiz);
backButton.addEventListener("click", goBack);
clearButton.addEventListener("click", clearHighscores);




