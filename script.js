var questions = document.querySelector("#questions")
var start = document.querySelector("#start")
var submit = document.querySelector("#submit")
var highscores = document.querySelector("#highscores")
var score = 0
var right = 0
var wrong = 0

function
    start.addEventListener("click", function  )

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
    var timerInterval = setInterval(timeFn, 1000);
    function timeFn() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }
}

}

setTime();

// When Quiz-form is submitted...
.addEventListener("submit", function (event) {
    event.preventDefault();




