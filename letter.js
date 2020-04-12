function Letter(letter, guessed, currentLetter) {
    this.letter = letter;
    this.guessed = guessed;
    this.currentLetter = currentLetter;
    this.toString = function() {
        if (this.guessed === true) {
            this.currentLetter = this.letter

        } else {
            this.currentLetter = "_";
        }
    };
}

module.exports = Letter;