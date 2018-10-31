// Hide trivia on page load

window.onload = function() {

    $("#questions").hide();
    $("[id='answerButton']").hide();
    

}

// Show trivia function

function show() {

    $("#questions").show();
    $("[id='answerButton']").show();
    
}

// Set up timer, show trivia on start

var seconds = 10;

    $("#timer").on("click", run);

    $("#timer").on("click", show);

    var timer;

    function run() {
        
        clearInterval(timer);
        timer = setInterval(decrement, 1000);

    }

    function stop() {

        clearInterval(timer);
    
    }

    function decrement() {

        seconds--;
        $("#timer").html("<h2>" +"Time Remaining: " + seconds + "</h2>");
        
        if (seconds === 0) {
        
            stop();
            alert("Time's up!")
            
        }
        
    }



// Array of questions for trivia

var questions = [

    {q: "1) Michael Jordan is the best NBA player ever!", a: "True"},
    {q: "1) Donald Trump is a great president.", a: "False"},
    {q: "1) Donald Trump is a great president.", a: "False"},
    {q: "1) Donald Trump is a great president.", a: "False"},
];

// Variables for right and wrong answers

var correct = 0;
var incorrect = 0;

// Variable for holding index of questions

var qIndex = 0;

// Function for updating answers

function updateScore() {

    document.querySelector("#correct").innerHTML = "Correct: " + correct;

    document.querySelector("#incorrect").innerHTML = "Incorrect: " + incorrect;
}


// Functions for rendering question

function nextQuestion() {

    if (qIndex <= (questions.length -1)) {

        document.querySelector("#questions").innerHTML = questions[qIndex].q;
    }
}

// call function to start trivia 

nextQuestion();


// When user clicks True/False

function buttonClick() {

    var userChoice = $("[id='answerButton']").on("click") 

        console.log(userChoice)
        
        if (userChoice === questions[qIndex].a) {

            alert("correct!")

        }
}

$("[id='answerButton']").on("click", buttonClick())









