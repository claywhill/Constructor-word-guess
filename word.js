var Letter = require("./letter");

function Word(word, letters, guessRemaining) {
    this.word = word;
    this.letters = letters;
    this.guessRemain = guessRemain;
    this.parseLetters = function() {
        for (var i = 0; i < word.length; i++) {
            this.letters.push(new Letter(this.word[i], false, "_"));
        }
    };
    this.guessWord = function() {
        var wordsArr = [];
        for (var i = 0; i < word.length; i++) {
            this.letters[i].display();
            guessWord.push(this.letters[i].currentLetter);
        }
    };

    this.wrongLetter = function(guess) {
        if (this.word.indexOf(guss)) {
            this.guessRemain--;
        }
    };
}









// var words = ["The Beatles", "Pink Floyd", "The Who", "Rolling Stones", "Led Zeppelin", "Eagles", "Fleetwood Mac", "AC DC", "Cream", "Def Leppard", "Journey", "Queen", "Aerosmith", "ZZ Top", "Foreigner", "Creedence Clearwater Revial", "Lynyrd Skynyrd", "Black Sabbath", "Guns N Roses", "Blue Oyster Cult"];