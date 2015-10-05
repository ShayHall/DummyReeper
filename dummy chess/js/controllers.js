(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */

  var moveCounter = 0;
  // Controller for "next move"...
  jQuery(".fa-step-forward").on('click', function(event){

    moveCounter += 1;
    console.log(moveCounter);
    switch (moveCounter) {
    case 1:
      $("#d2").removeClass("white-pawn");
      $("#d4").addClass("white-pawn");
    break;
    case 2:
      $("#g8").removeClass("black-knight");
      $("#f6").addClass("black-knight");
    break;
    case 3:
      $("#c2").removeClass("white-pawn");
      $("#c4").addClass("white-pawn");
    break;
    case 4:
      $("#e7").removeClass("black-pawn");
      $("#e6").addClass("black-pawn");
    break;
    case 5:
      $("#g2").removeClass("white-pawn");
      $("#g3").addClass("white-pawn");
    break;
    case 6:
      $("#d7").removeClass("black-pawn");
      $("#d5").addClass("black-pawn");
    break;
    case 7:
      $("#f1").removeClass("white-bishop");
      $("#g2").addClass("white-bishop");
    break;
    case 8:
      $("#f8").removeClass("black-bishop");
      $("#e7").addClass("black-bishop");
    break;
    case 9:
      $("#g1").removeClass("white-knight");
      $("#f3").addClass("white-knight");
    break;
    default:
      moveCounter = 9;
      break;
  }

    // TODO: Tell the Model -- `game` -- to advance to the next move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "previous move"...
  jQuery(".fa-step-backward").on('click', function(event){
    // alert("step-backward");
  moveCounter -= 1;
    console.log(moveCounter);
    switch (moveCounter) {
    case 0:
      $("#d2").addClass("white-pawn");
      $("#d4").removeClass("white-pawn");
    break;
    case 1:
      $("#g8").addClass("black-knight");
      $("#f6").removeClass("black-knight");
    break;
    case 2:
      $("#c2").addClass("white-pawn");
      $("#c4").removeClass("white-pawn");
    break;
    case 3:
      $("#e7").addClass("black-pawn");
      $("#e6").removeClass("black-pawn");
    break;
    case 4:
      $("#g2").addClass("white-pawn");
      $("#g3").removeClass("white-pawn");
    break;
    case 5:
      $("#d7").addClass("black-pawn");
      $("#d5").removeClass("black-pawn");
    break;
    case 6:
      $("#f1").addClass("white-bishop");
      $("#g2").removeClass("white-bishop");
    break;
    case 7:
      $("#f8").addClass("black-bishop");
      $("#e7").removeClass("black-bishop");
    break;
    case 8:
      $("#g1").addClass("white-knight");
      $("#f3").removeClass("white-knight");
    break;
    default:
      moveCounter = 0;
    break;
  }
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  jQuery(".fa-fast-forward").on('click'/*???on what(eventually use keyvalues..???*/, function(event){
      $("#d2").removeClass("white-pawn");
      $("#d4").addClass("white-pawn");
      $("#g8").removeClass("black-knight");
      $("#f6").addClass("black-knight");
      $("#c2").removeClass("white-pawn");
      $("#c4").addClass("white-pawn");
      $("#e7").removeClass("black-pawn");
      $("#e6").addClass("black-pawn");
      $("#g2").removeClass("white-pawn");
      $("#g3").addClass("white-pawn");
      $("#d7").removeClass("black-pawn");
      $("#d5").addClass("black-pawn");
      $("#f1").removeClass("white-bishop");
      $("#g2").addClass("white-bishop");
      $("#f8").removeClass("black-bishop");
      $("#e7").addClass("black-bishop");
      $("#g1").removeClass("white-knight");
      $("#f3").addClass("white-knight");
      moveCounter = 9;

    // TODO: Tell the Model -- `game` -- to advance to the last move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "reset"...
  jQuery(".fa-backward").on('click'/* dunno */, function(event){
    $("#d2").addClass("white-pawn");
    $("#d4").removeClass("white-pawn");
    $("#g8").addClass("black-knight");
    $("#f6").removeClass("black-knight");
    $("#c2").addClass("white-pawn");
    $("#c4").removeClass("white-pawn");
    $("#e7").addClass("black-pawn");
    $("#e6").removeClass("black-pawn");
    $("#g2").addClass("white-pawn");
    $("#g3").removeClass("white-pawn");
    $("#d7").addClass("black-pawn");
    $("#d5").removeClass("black-pawn");
    $("#f1").addClass("white-bishop");
    $("#g2").removeClass("white-bishop");
    $("#f8").addClass("black-bishop");
    $("#e7").removeClass("black-bishop");
    $("#g1").addClass("white-knight");
    $("#f3").removeClass("white-knight");
    moveCounter = 0;
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

// Controller for "watch game play automatically"...
  jQuery(".fa-play").on('click', function (event){
      setTimeout(function() {
        $("#d2").removeClass("white-pawn");
      }, 500);
      setTimeout(function() {
        $("#d4").addClass("white-pawn");
      moveCounter = 1;
      }, 1000);
      setTimeout(function() {
        $("#g8").removeClass("black-knight");
      }, 1500);
      setTimeout(function() {
        $("#f6").addClass("black-knight");
      moveCounter = 2;
      console.log(moveCounter);
      }, 2000);
      setTimeout(function() {
        $("#c2").removeClass("white-pawn");
      }, 2500);
      setTimeout(function() {
        $("#c4").addClass("white-pawn");
      moveCounter = 3;
      console.log(moveCounter);
      }, 3000);
      setTimeout(function() {
        $("#e7").removeClass("black-pawn");
      }, 3500);
      setTimeout(function() {
        $("#e6").addClass("black-pawn");
        moveCounter = 4;
        console.log(moveCounter);
      }, 4000);
      setTimeout(function() {
        $("#g2").removeClass("white-pawn");
      }, 4500);
      setTimeout(function() {
        $("#g3").addClass("white-pawn");
        moveCounter = 5;
        console.log(moveCounter);
      }, 5000);
      setTimeout(function() {
        $("#d7").removeClass("black-pawn");
      }, 5500);
      setTimeout(function() {
        $("#d5").addClass("black-pawn");
        moveCounter = 6;
        console.log(moveCounter);
      }, 6000);
      setTimeout(function() {
        $("#f1").removeClass("white-bishop");
      }, 6500);
      setTimeout(function() {
        $("#g2").addClass("white-bishop");
        moveCounter = 7;
        console.log(moveCounter);
      }, 7000);
      setTimeout(function() {
        $("#f8").removeClass("black-bishop");
      }, 7500);
      setTimeout(function() {
        $("#e7").addClass("black-bishop");
        moveCounter = 8;
        console.log(moveCounter);
      }, 8000);
      setTimeout(function() {
        $("#g1").removeClass("white-knight");
      }, 8500);
      setTimeout(function() {
        $("#f3").addClass("white-knight");
        moveCounter = 9;
        console.log(moveCounter);
      }, 9000);
     // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for pause...
  jQuery(".fa-pause").on('click'/* dunno */, function(event){
    return true;
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

})(window || module && module.exports || this)
