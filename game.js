var gamePattern = [];

gamePattern.push(randomChosenColor);

var buttonColors = ["red", "blue", "green", "yellow"]

var randomChosenColor = buttonColors[nextSequence()];

$("#" + randomChosenColor).fadeOut().fadeIn();
var buttonSound = new Audio("sounds/" + randomChosenColor + ".mp3");
buttonSound.play();

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3);

  return randomNumber;
}
