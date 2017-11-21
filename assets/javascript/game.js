$(document).ready(function() {
	var audioElement = document.createElement("audio");
	audioElement.setAttribute("src", "assets/images/Power-rangers-themesong.mp3");
	var hangmanArr = ["Pink", "Green", "Yellow", "Red", "Blue", "Black", "White", "Spider"]
	var random = Math.floor((Math.random()*(hangmanArr.length-1)));
	var lives = 7;


    $(".theme-button").on("click", function() {
      audioElement.play();
    });

    $(".pause-button").on("click", function() {
      audioElement.pause();
    });


      






















});