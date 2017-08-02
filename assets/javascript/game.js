// Letter Choices for the computer to pick
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Record, Score, Remaining Guesses & Letters Guessed
    var wins = 1;
    var losses = 1;
    var guessesRemaining = 8;
    var lettersGuessed = [];

    var reset = function () {
        computerSelection = alphabet[Math.floor(Math.random() * alphabet.length)];
        guessesRemaining = 9;
        lettersGuessed = null;
    };


// This is where the Computer will randomly select a letter from the alphabet
    var computerSelection = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerSelection);


    document.onkeyup = function(event) {
        if (guessesRemaining < 0){
            lettersGuessed = "";
            reset()};
    
    var userGuess = (event.key);
        if (userGuess.length === 1 && /[A-Z]/i.test(userGuess)) {
            document.querySelector('#lettersGuessed').innerHTML += userGuess + ', ';
            guessesRemaining--;
            document.querySelector('#guessesRemaining').innerHTML = guessesRemaining;

        }

        if (userGuess === computerSelection) {
            alert ("You Win!  Congratulations!");
            document.querySelector('#wins').innerHTML = wins++;

        }

        else if (guessesRemaining == 0) {
                reset();
                alert ("You lose!");
                document.querySelector('#losses').innerHTML = losses++;

        }
    };