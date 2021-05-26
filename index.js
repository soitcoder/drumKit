
//for making sounds through clicks
var numberOfDrums = document.querySelectorAll(".drum").length

for (i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var innerHtmlSounds = this.innerHTML;
    sounds(innerHtmlSounds);

  });
}
//for making sounds through keyboard
document.addEventListener("keypress", function(event) {
  sounds(event.key);
})
//sounds function
function sounds(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kickBase = new Audio("sounds/kick-bass.mp3");
      kickBase.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:

  }
}



// function playWhenClick(){

// }
