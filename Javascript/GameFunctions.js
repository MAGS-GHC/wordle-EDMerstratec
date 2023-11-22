let wordToGuess;
let wordInput = "";
let round = 0;
//validWordList defined in Initialization.js

updateCurrentRound();

//Enter key work kode til enterkey = 13
const inputElements = document.querySelectorAll("input");
inputElements.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
            checkValidWord();
        }
    });
});




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
}


function checkValidWord () {
    wordInput = "";
    for (let i=0; i<5; i++) { //assemble to one word
        wordInput += document.getElementById("row" + round + "column" + i).value.toLowerCase();
    }
    if (wordInput.length === 5 && /^[a-zA-Z]*$/.test(wordInput) && validWordList.includes(wordInput)) { 
        //redundant checks for length and letters only, but perhaps performance from checking left to right?
        checkWord ();
        round++;
        updateCurrentRound();
    }
    else {
        alert("Not Valid?")
    }
    if (wordInput === wordToGuess) {
        //game end
       if(confirm("Completed! Press OK to play again")){
            restart();
        }

    }
}

function updateCurrentRound() {
}

function restart (){
    
    let allInputs = document.querySelectorAll("input");
    allInputs.forEach(clearInput => clearInput.value = "") 
    allInputs.forEach(clearInput => clearInput.style.backgroundColor = "");
    wordToGuess = "";
    wordInput = "";
    round = 0;
    updateCurrentRound()
    wordToGuess = validWordList[Math.floor(Math.random() * validWordList.length)];
}
