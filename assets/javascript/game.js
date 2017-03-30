// 2. The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters.
//
// 3. Here's how the app works:
//
//    * There will be four crystals displayed as buttons on the page.
//
//    * The player will be shown a random number at the start of the game.
//
//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
//
//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.
//
//    * The player wins if their total score matches the random number from the beginning of the game.
//
//    * The player loses if their score goes above the random number.
//
//    * The game restarts whenever the player wins or loses.
//
//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
//
//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
//
// ##### Option 1 Game design notes
//
// * The random number shown at the start of the game should be between 19 - 120.
//
// * Each crystal should have a random hidden value between 1 - 12.

var winCounter;
var lossCounter;
var scoreCounter = 0;

var compRandomNum;
var blueNum;
var greenNum;
var purpleNum;
var redNum;


function startGame() {
  compRandomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  blueNum = Math.floor(Math.random() * (12)) + 1;
  greenNum = Math.floor(Math.random() * (12)) + 1;
  purpleNum = Math.floor(Math.random() * (12)) + 1;
  redNum = Math.floor(Math.random() * (12)) + 1;
  scoreCounter = 0;

  $("#random-num").html(compRandomNum);

  console.log("Computer random: " + compRandomNum);
    console.log("Purple num: " + purpleNum);
    console.log("Green num: " + greenNum);


}

function clickCrystals() {
  $("#blue-crystal").on("click", function() {
    scoreCounter += blueNum;
    console.log("Score Counter: " + scoreCounter);
  });
  $("#green-crystal").on("click", function() {
    scoreCounter += greenNum;
    console.log("Score Counter: " + scoreCounter);
  });
  $("#purple-crystal").on("click", function() {
    scoreCounter += purpleNum;
    console.log("Score Counter: " + scoreCounter);
  });
  $("#red-crystal").on("click", function() {
    scoreCounter += redNum;
    console.log("Score Counter: " + scoreCounter);
  });

}

clickCrystals();
startGame();
