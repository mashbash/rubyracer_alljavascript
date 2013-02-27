$(document).ready(function(){

  var player1 = new Player("bob", "#player1_strip");
  var player2 = new Player("tom", "#player2_strip");

  var game = new Game(player1, player2);
  
  $(this).on('keyup', function(event) {
    if (event.keyCode == 65) {
      player1.incrementPosition();
      console.log(player1.position);
    }  
    if (event.keyCode == 76) {
      player2.incrementPosition();
      console.log(player2.position);
    }
    game.render();
    console.log(player1)
    console.log(player2)
    console.log("player1 position" + player1.allPositions())
    console.log("player2 position" + player2.allPositions())
    // console.log("player 1 location " + player1Location)
    //console.log("player 2 location " + player2Location) 
  });

  /* Game class*/
  function Game(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;

  }

  Game.prototype.render = function() {
    var player1Location = player1.boardPosition();
    $(player1.allPositions()).removeClass("active");
    $(player1Location).addClass("active");
    var player2Location = player2.boardPosition();
    $(player2.allPositions()).removeClass("active");
    $(player2Location).addClass("active");
  }

  /* Player class*/
  function Player(name, playerStrip) {
    this.name = name;
    this.position = 0;
    this.playerStrip = playerStrip;
  }

  Player.prototype.incrementPosition =  function() {
    this.position ++;  
  }

  Player.prototype.boardPosition = function() {
    return this.playerStrip + " ." + this.position;
  }

  Player.prototype.allPositions = function() {
    return this.playerStrip + " td";
  }



  // Player.prototype.updateBoardPosition = function() {
  //     this.incrementPosition();
  //     var playerLocation = this.player_strip + " ." + this.position;
  //     $(this.player_strip + " td").removeClass("active");
  //     $(playerLocation).addClass("active");
  //   }
});
