// Audio

var audio = new Audio('assets/javascript/super mario bros.mp3')

// Hide trivia on page load

window.onload = function() {

    $("#questions").hide();
    $("#True").hide();
    $("#False").hide();
    $("#gameover").hide();
    $("#correct").hide();
    $("#incorrect").hide();
    
}

// Show trivia on click Start

function show() {

    $("#questions").show();
    $("#True").show();
    $("#False").show();
    $("#gameover").hide();
    $("#correct").hide();
    $("#incorrect").hide();
    nextQuestion();
    audio.play();
    
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
            alert("Time's up!");
            reset();
            
        }
        
    }

    function reset() {

        $("#questions").hide();
        $("#True").hide();
        $("#False").hide();
        $("#True").html("True");
        $("#False").html("False");
        $("#timer").html("<h1>Play Again?</h1>");
        $("#correct").show();
        $("#incorrect").show();
        seconds = 10;
        correct = 0;
        incorrect = 0;
        
    }

// Array of questions for trivia

var questions = [

    {q: "1) Michael Jordan is the best NBA player ever!", a: "True"},
    {q: "2) Donald Trump is a great president.", a: "False"},
    {q: "3) Coffee is life.", a: "True"},
    {q: "4) Adults can't breate and swallow at the same time.", a: "True"},
    {q: "5) Philly cheesesteaks are best in Philly.", a: "True"},
    {q: "6) An octopus has 2 hearts.", a: "False"},
];


// Variable for holding index of questions

var qIndex = 0;



// Function for rendering question

function nextQuestion() {

    if (qIndex <= (questions.length -1)) {
        
        document.querySelector("#questions").innerHTML = questions[qIndex].q;
    }
}

// Variables for right and wrong answers

var correct = 0;
var incorrect = 0;

// Function for updating answers

function updateScore() {

    $("#correct").html("Correct: " + correct);

    $("#incorrect").html("Incorrect: " + incorrect);

}

// When user clicks True/False

$("#True").click(function() {

    
    correct++;
    updateScore();
    nextQuestion();
    qIndex++;
    
    
});

$("#False").click(function() {

    
    incorrect++;
    updateScore();
    nextQuestion();
    qIndex++;
    
})




