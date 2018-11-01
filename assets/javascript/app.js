// Hide trivia on page load

window.onload = function() {

    $("#questions").hide();
    $("#True").hide();
    $("#False").hide();
    
}

// Show trivia on start

function show() {

    $("#questions").show();
    $("#True").show();
    $("#False").show();
    
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

    function reset() {

        $("#questions").hide();
        $("#True").hide();
        $("#False").hide();
        $("#timer").html("<h1>GAME OVER!</h1>");
        seconds = 10;
        
    }

    function decrement() {

        seconds--;
        $("#timer").html("<h2>" +"Time Remaining: " + seconds + "</h2>");
        
        if (seconds === 0) {
        
            stop();
            alert("Time's up!");
            reset();
            
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

    $("#correct").html("Correct: " + correct);

    $("#incorrect").html("Incorrect: " + incorrect);

}

// Functions for rendering question

function nextQuestion() {

    if (qIndex <= (questions.length -1)) {

        document.querySelector("#questions").innerHTML = questions[qIndex].q;
    }
}

// call function to start trivia 

nextQuestion();
console.log(nextQuestion)


// When user clicks True/False

$("#True").click(function() {

    $("#True").html("Correct!");
    correct++;
    updateScore();
    
});

$("#False").click(function() {

    $("#False").html("Incorrect!");
    incorrect++;
    updateScore();

})




