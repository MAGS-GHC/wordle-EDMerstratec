let wordToGuess;
let wordInput = "";
let round = 0;
let currentLetter = 0;
const wordLength = 5;
//validWordList defined in Initialization.js

//listen to keyboard input
window.addEventListener("keydown", function (keyboardInp) {
    if (round > 5) {
        return;
    }
    if (keyboardInp.key == "Enter") {
        checkValidWord();
    }
    else if (keyboardInp.key == "Backspace" && currentLetter != 0) {
        currentLetter--;
        wordInput = wordInput.slice(0,-1);
        document.getElementById("row" + round + "column" + currentLetter).value = "";
    }
    else if (currentLetter < wordLength && /^[a-zA-Z]$/.test(keyboardInp.key)) {
        wordInput += (keyboardInp.key).toUpperCase();
        document.getElementById("row" + round + "column" + currentLetter).value = (keyboardInp.key).toUpperCase();
        currentLetter++;
    }
})

function compareWords() {
    let wordToGuessTemp = wordToGuess;
    for (let i=0; i<wordLength; i++) {
        if (wordToGuessTemp.includes(wordInput[i])) {
            if (wordToGuess[i] === wordInput[i]) {
                document.getElementById("row"+ round + "column" + (i)).style.backgroundColor = "green"
            }
            else {
                document.getElementById("row"+ round + "column" + (i)).style.backgroundColor = "yellow"
            }
            wordToGuessTemp = wordToGuessTemp.replace(wordInput[i], "!");
        }
        else {
            document.getElementById("row"+ round + "column" + (i)).style.backgroundColor = "grey"
        }
    }
}


function checkValidWord () {
    if (validWordList.includes(wordInput.toLowerCase())) { 
        compareWords();
        if (wordInput === wordToGuess) {
           youWin();
        }
        else {updateCurrentRound();}
    }
    else {
        document.getElementById("gameStateMessage").innerText = "Word not recognized!"
    }
}

function updateCurrentRound() {
    wordInput = "";
    currentLetter = 0;
    round++;
    if (round>5) {
        gameEndPrompt();
    }
    else {
        document.getElementById("gameStateMessage").innerText = "Round " + (round+1) + "! Guess!";
    }
}

function gameEndPrompt() {
    document.getElementById("gameStateMessage").innerText = "No more guesses! The word was: " + wordToGuess + "!";
}

function youWin() {
    document.getElementById("gameStateMessage").innerText = "A winner is you!";
    round = 6;
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
    document.getElementById("gameStateMessage").innerText = "Guess the word!";
}
