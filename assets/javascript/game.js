$(document).ready(function() {
	//Variables
	var audioElement = document.createElement("audio");
	audioElement.setAttribute("src", "assets/images/Power-rangers-themesong.mp3");
	var words = ["Pink", "Green", "Yellow", "Red", "Blue", "Black", "White", "Spider"]
	var random = Math.floor((Math.random()*words.length-1));
	var chosenWord = random.words;
	var guesses = 7;
	var write = $("#guess").html("<div></div>")

 	//Functionality
    $(".theme-button").on("click", function() {
      audioElement.play();
    });

    $(".pause-button").on("click", function() {
      audioElement.pause();
    });

    $("#userInput").on("keyup", function() {

    })

    //If/Else
    if(chosenWord.indexOf === userInput) {

    }


});