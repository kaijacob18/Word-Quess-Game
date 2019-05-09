// array of words for hangman //
var basketballplayers = ["michael jordan", "charles barkley", "magic johnson", "larry bird", "isiah thomas", , "kobe bryant", "dennis rodman", "hakeem olajuwon", "reggie miller", "chris webber", "julius erving", "karreem adul jabbar", "karl malone", "shaquille oneal", "scottie pippen", "kevin duran", "james harden", "lebron james", "derrick rose", "chris paul", "dwayne wade", ];

var basketballplayer = basketballplayers[Math.floor(Math.random() * basketballplayers.length)];

var solutionarray =[];
for (var i = 0; i < basketballplayers.length; i++){
    solutionArray[i] = "_";
}

var remainingLetters = basketballplayers.length;

while(remainLetters > 0) {
    alert(solutionArray.join (" "));

    var guess = prompt ("Guess a letter : ");

    for (var j = 0; j < basketballplayers.length; j++) {
        if (basketballplayer[j]) === guess){

            
        }
    }
}