var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"]
var level = 0
var started = false;

//Select the buttons displayed. Then play sound, animate the
// button, add the user selected color to the userClickedPattern array.
// Lastly, check the user's answer against the gamePattern
$(".btn").click(function(event) {
  var userChosenColor = event.target.id;

  playSound(userChosenColor);

  animatePress(userChosenColor);

  userClickedPattern.push(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
})

//Capture keypresses and if the game hasn't yet started, update the
// title text to indicate the current level reached by the user.
  $(document).keypress(function() {
    if(!started) {
      $("h1").text("Level " + level);
      nextSequence();
      started = true;
    }
  })

//Generate a random value between 0 and 3. This number will be used
// to select the next button color to be animated.
function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];


//Code added to repeat animate buttons in the gamePattern sequence to
// the currentLevel.
// $.each(gamePattern, function(index, value) {
//     animatePress(value);
//   });

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  gamePattern.push(randomChosenColor);

  playSound(randomChosenColor);

  $("h1").text("Level " + (level += 1));
}

//Create an audio object from the supplied input value.
function playSound(name) {
  var buttonSound = new Audio("sounds/" + name + ".mp3");
  buttonSound.play();
}

//Animate a page element using the "pressed" class by adding and
//removing the class from the page element.
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {

  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    if(userClickedPattern.length === gamePattern.length) {

      setTimeout(function () {

        nextSequence()

      }, 1000);
    }
  } else {
    playSound("wrong");
    startOver();
  }
}

function startOver() {
  gamePattern = [];
  level = 0;
  started = false;
  $("h1").text("Press A Key to Start");
}
