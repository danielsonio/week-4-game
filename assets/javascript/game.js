$(document).ready(function() {

  var winCounter = 0;
  var lossCounter = 0;
  var scoreCounter = 0;

  var compRandomNum;
  var blueNum;
  var greenNum;
  var purpleNum;
  var redNum;

function startGame() {
  //sets all random numbers for the round
  compRandomNum = Math.floor(Math.random() * (120 - 20)) + 19;
  blueNum = Math.floor(Math.random() * (12)) + 1;
  greenNum = Math.floor(Math.random() * (12)) + 1;
  purpleNum = Math.floor(Math.random() * (12)) + 1;
  redNum = Math.floor(Math.random() * (12)) + 1;
  scoreCounter = 0;

  //displays computer random number and scoreboard
  $("#win-lose").html("");
  $("#random-num").html(compRandomNum);
  $("#win-count").html(winCounter);
  $("#loss-count").html(lossCounter);
  $("#round-points").html(scoreCounter);

  console.log("Computer random: " + compRandomNum + " | Blue num: " + blueNum + " | Green num: " + greenNum + " | Red num: " + redNum + " | Purple num: " + purpleNum);
}

function clickCrystals() {
  //Click events for each crystal
  $("#blue-crystal").on("click", function() {
    //adds crystal value to round score count
    scoreCounter += blueNum;
    gameCheck();
  });
  $("#green-crystal").on("click", function() {
    scoreCounter += greenNum;
    gameCheck();
  });
  $("#purple-crystal").on("click", function() {
    scoreCounter += purpleNum;
    gameCheck();
  });
  $("#red-crystal").on("click", function() {
    scoreCounter += redNum;
    gameCheck();
  });
}

//compares round score to the computer number
function gameCheck() {
  console.log("Score Counter: " + scoreCounter);
  $("#round-points").html(scoreCounter);

  if (scoreCounter === compRandomNum){
    $("#win-lose").html("YOU CHOSE WISELY!");
    winCounter++;
    setTimeout(startGame, 2500);
  } else if(scoreCounter > compRandomNum) {
    $("#win-lose").html("YOU CHOSE POORLY!");
    lossCounter++;
    setTimeout(startGame, 2500);
  };

}


clickCrystals();
startGame();

});
