window.onload = function() {

    $("#Trivia").hide();

}

// Set up timer

var seconds = 30;

    $("#timer").on("click", run);

    $("#timer").on("click", show);

    var timer;

    function run() {
        
        clearInterval(timer);
        timer = setInterval(decrement, 1000);

    }

    function decrement() {

        seconds--;
        $("#timer").html("<h2>" +"Time Remaining: " + seconds + "</h2>");

    }

    // Stop function

    function stop() {

        clearInterval(timer);
    
    }

    // When seconds hit zero

    if (seconds === 0) {
        
        stop();
        alert("Time's Up!");

    }

    function show() {

        $("#Trivia").show();
        
    }

        









