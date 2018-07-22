var players = [];
function player(name) {
    this.playerName =name;
    this.rollscore = [];
    this.total = 0; 
}
$(document).ready(function() {
    var playerone = $("input#player1").val();
    var playertwo = $("input#player2").val();


    var newPlayerOne = new Player(playerOne);
        var newPlayerTwo = new Player(playerTwo);
        console.log(newPlayerOne);
        console.log(newPlayerTwo);


        players.push(newPlayerOne, newPlayerTwo);
        $("h3#player1").text(players[0].playerName);
        $("h3#player2").text(players[1].playerName);
        alert("Let's begin " + players[0].playerName);


});