// Hide trivia on page load

window.onload = function() {

    $("#questions").hide();
    $("#true").hide();
    $("#false").hide();

}

// Set up timer, show trivia on start

var seconds = 3;

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

// Show trivia function

    function show() {

        $("#questions").show();
        $("#true").show();
        $("#false").show();
        
    }

// Array of questions for trivia

var questions = [

    {q: "1) Michael Jordan is the best NBA player ever!", a: "True"},
    {q: "1) Donald Trump is a great president.", a: "False"},
];

// Variables for right and wrong answers

var correct = 0;
var incorrect = 0;

// Variable for holding index of questions

var qIndex = 0;

// Functions

function nextQuestion() {

    if (qIndex <= (questions.length -1)) {

        document.querySelector("#questions").innerHTML = questions[qIndex].q;
    }
}

// call function to start trivia 

nextQuestion();

// Function for 









