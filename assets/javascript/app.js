// Hide trivia on page load

window.onload = function() {

    $("#Trivia").hide();

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

    function decrement() {

        seconds--;
        $("#timer").html("<h2>" +"Time Remaining: " + seconds + "</h2>");

        if (seconds === 0) {
        
            stop();
            alert("Time's Up!");
    
        }


    }

    // Stop function

    function stop() {

        clearInterval(timer);
    
    }

    // Show trivia function

    function show() {

        $("#Trivia").show();
        
    }

        









