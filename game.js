var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"]



$(".btn").click(function(event) {
  var userChosenColor = event.target.id;

  playSound(userChosenColor);

  animatePress(userChosenColor);

  userClickedPattern.push(userChosenColor);
})

$(document).keypress(function() {
  nextSequence();
})



function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  gamePattern.push(randomChosenColor);

  playSound(randomChosenColor);
}

function playSound(name) {
  var buttonSound = new Audio("sounds/" + name + ".mp3");
  buttonSound.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
