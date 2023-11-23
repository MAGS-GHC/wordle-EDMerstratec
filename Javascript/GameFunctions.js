let wordToGuess;
let wordInput = "";
let round = 0;
let currentLetter = 0;
const wordLength = 5;
//validWordList defined in Initialization.js

//listen to keyboard input
window.addEventListener("keydown", function (keyboardInp) {
    if (keyboardInp.key == "Enter") {
        checkValidWord();
    }
    else if (keyboardInp.key == "Backspace" && currentLetter != 0) {
        currentLetter--;
        wordInput = wordInput.slice(0,-1);
        document.getElementById("row" + round + "column" + currentLetter).value = "";
        console.log(wordInput)
    }
    else if (currentLetter < wordLength && /^[a-zA-Z]$/.test(keyboardInp.key)) {
        wordInput += (keyboardInp.key).toUpperCase();
        document.getElementById("row" + round + "column" + currentLetter).value = (keyboardInp.key).toUpperCase();
        currentLetter++;
    }
})


function checkWord () {
    for (let i = 0; i<5; i++) {
        if (wordToGuess[i] === wordInput[i]) {
            document.getElementById("row"+ round + "column" + (i)).style.backgroundColor = "green"
        }
        else if (wordInput[i] === wordToGuess[0] || wordInput[i] === wordToGuess[1] || wordInput[i] === wordToGuess[2] || wordInput[i] === wordToGuess[3] || wordInput[i] === wordToGuess[4]) {
            document.getElementById("row"+ round + "column" + (i)).style.backgroundColor = "yellow"
        }
        else {
            document.getElementById("row"+ round + "column" + (i)).style.backgroundColor = "grey"
        }
    }
    wordInput = "";
}


function checkValidWord () {
    if (validWordList.includes(wordInput.toLowerCase())) { 
        checkWord ();
        updateCurrentRound();
    }
    else {
        alert("Word not recognized")
    }
    if (wordInput === wordToGuess) {
        //game end
       if(confirm("Completed! Press OK to play again")){
            newGame();
        }

    }
}

function updateCurrentRound() {
    currentLetter = 0;
    round++;
}

function newGame() {
    
    let allInputs = document.querySelectorAll("input");
    allInputs.forEach(clearInput => clearInput.value = "") 
    allInputs.forEach(clearInput => clearInput.style.backgroundColor = "");
    wordToGuess = "";
    wordInput = "";
    round = 0;
    currentLetter = 0;
    wordToGuess = validWordList[Math.floor(Math.random() * validWordList.length)].toUpperCase();
}
