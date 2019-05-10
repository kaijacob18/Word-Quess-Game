// array of words for hangman //
var basketballPlayers = ["Michael Jordan", "Charles Barkley", "Magic Johnson", "Larry Bird", "Isiah Thomas", , "Kobe Bryant", "Dennis Rodman", "Hakeem Olajuwon", "Reggie Miller", "Chris Webber", "Julius Erving", "Karreem Adul Jabbar", "Karl Malone", "Shaquille Oneal", "Scottie Pippen", "Kevin Duran", "James Harden", "Lebron James", "Derrick Rose", "Chris Paul", "Dwayne Wade", ];

var LegendPlayers = basketballPlayers[Math.floor(Math.random() * basketballPlayers.length)];

var PickedPlayer = basketballPlayers[LegendPlayers];
var numberofGuessCount = 9;
var wins =0;
var losses=0;
var wrongGuessLetter="";
var rightGuessLetter="";
var boardGame="";
for (var i = 0; i < PickedPlayer.length; i++){

    boardGame[i]="_";
}

var userInput = "";

function resetGame(){
    
    var basketballPlayers = ["Michael Jordan", "Charles Barkley", "Magic Johnson", "Larry Bird", "Isiah Thomas", , "Kobe Bryant", "Dennis Rodman", "Hakeem Olajuwon", "Reggie Miller", "Chris Webber", "Julius Erving", "Karreem Adul Jabbar", "Karl Malone", "Shaquille Oneal", "Scottie Pippen", "Kevin Duran", "James Harden", "Lebron James", "Derrick Rose", "Chris Paul", "Dwayne Wade", ];

    var LegendPlayers = basketballPlayers[Math.floor(Math.random() * basketballPlayers.length)];
    
    var PickedPlayer = basketballPlayers[LegendPlayers];
    var numberofGuessCount = 9;
    var wrongGuessLetter="";
    var rightGuessLetter="";
    var boardGame="";
    for (var i = 0; i < PickedPlayer.length; i++){
    
        boardGame[i]="_";
    }
    
    var userInput = "";

}

document.onkeyup = function(event){
    userInput = event.key.toLowerCase();
}

var

var remainingLetters = basketballplayers.length;

while(remainLetters > 0) {
    alert(solutionArray.join (" "));

    var guess = prompt ("Guess a letter : ");

    for (var j = 0; j < basketballplayers.length; j++) {
        if (basketballplayer[j]) === guess){

            
        }
    }
}