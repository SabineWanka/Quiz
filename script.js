var questions = document.querySelector("#questions");
var startButton = document.querySelector("#startButton");
var submitButton = document.querySelector("#submitButton");
var clearButton = document.querySelector("#clearButton");
var backButton = document.querySelector("#backButton");
var final = document.querySelector("#final");
var highScores = document.querySelector("#highScores");
var initialInput = document.querySelector("#initial");
var highScores = 0;
var right = 0;
var wrong = 0;
var timeLeft = 75000;
var secondsElapsed = 0;


var questionsArray = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    ///etc.
];

questionsArray[0].choices.forEach(function (choices) {
    var option = document.createElement("p")
    option.textContent = choices
    questions.appendChild(option)
})
// getHighScores() which is the sum of the right answer plus the remaining time 

function setTime() {

}
for (var i = 0; i < questions.length; i++) {
    var response = questions[i]
    if (response === questions[i.answer]) {
        alert("Right" + right);
        highScores++;
    }
    else {
        alert("Wrong!" + wrong);
        timeLeft--;
    }
}


function startButton() {
    var questions = document.querySelector("#questions")
    if (questions.style.display === "none") {
        questions.style.display = "block";
    }
    else {
        questions.style.display = "none";
    }
}

function submitQuiz() {
    var final = document.querySelector("#final")
    if (final.style.display === "none") {
        final.style.display = "block";
    }
    else {
        final.style.display = "none";
    }
}

function goBack() {
    var highScores = document.querySelector("#highScores")
    if (highScores.style.display === "none") {
        highScores.style.display = "block";
    }
    else {
        highScores.style.display = "none";
    }

}

function clearHighscores() {
    var highScores = document.querySelector("#highScores")
    if (highScores.style.display === "none") {
        highScores.style.display = "block";
    }
    else {
        highScores.style.display = "none";
    }

}

// time starts to count when start button has been clicked 
function startTimer() {
    var timeLeft = 75000;

    var timeInterval = setInterval(function){
        timeLeft-- ;

    if (timeLeft === 0) {
        clearInterval(timeInterval);
    }
}
}



function stopTimer() {
    // time needs to stop when all questions has been answered 
    secondsElapsed = 75000;
    setTime();

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




