function compareWords() {
    for (let i = 0; i<wordLength; i++) {
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
}

function compareWords() {
    let wordToGuessTemp = wordToGuess;
    for (let i=0; i<wordLength; i++) {
        if (wordToGuessTemp.includes(wordInput[i])) {
            if (wordToGuessTemp[i] === wordInput[i]) {
                document.getElementById("row"+ round + "column" + (i)).style.backgroundColor = "green"
            }
            else {
                document.getElementById("row"+ round + "column" + (i)).style.backgroundColor = "yellow"
            }
        }
        else {
            document.getElementById("row"+ round + "column" + (i)).style.backgroundColor = "grey"
        }
        wordToGuessTemp.slice(1);
        console.log(wordToGuessTemp);
    }
}