// Letter Choices for the computer to pick
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Record, Score, Remaining Guesses & Letters Guessed
    var wins = 1;
    var losses = 1;
    var guessesRemaining = 8;
    var lettersGuessed = [];


    var reset = function () {
        computerSelection = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerSelection);
        guessesRemaining = 8;
        lettersGuessed = [];
    };

    var display = function() {
        document.querySelector('#lettersGuessed').innerHTML = lettersGuessed.join(",");
        document.querySelector('#wins').innerHTML = wins;
        document.querySelector('#losses').innerHTML = losses;
        document.querySelector('#guessesRemaining').innerHTML = guessesRemaining;
    };


// This is where the Computer will randomly select a letter from the alphabet
    var computerSelection = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerSelection);


    document.onkeyup = function(event) {
    
    var userGuess = event.key;
        if (event.key === computerSelection) {
            wins++;
            reset();

        }

        else {
            guessesRemaining--;
            lettersGuessed.push(userGuess);
        }

        if (guessesRemaining == 0) {
            losses++;
            reset();

        }

        display();
    };