let correct = "";
let testWord = "";
let round = 0;
let myTest = [];


//grid creation, 6 rows, 5 columns
createInputBoxes(6,5);
function createInputBoxes(rowsTotal,columnsTotal) {
    for (let row=0; row<rowsTotal; row++){
        for (let column=0; column<columnsTotal; column++) {
            let inputBox = document.createElement("pre");
            inputBox.innerHTML = "row" + row + "column" + column;
            inputBox.id = "row" + row + "column" + column;
            document.getElementById("gridInput").appendChild(inputBox);
        }
    }
}
//interesting observations: "let inputBox" will not append multiple times if defined outside of the scope of either loop or function. In that case, only the last iteration stays appended










//Enter key work kode til enterkey = 13
const inputElements = document.querySelectorAll("input");
inputElements.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
            checkValidWord();
        }
    });
});


getText("/Assets/valid-wordle-words.txt");

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  myTest = myText.split('\n');
  correct = myTest[Math.floor(Math.random() * myTest.length)];

}

function checkWord () {
    for (let i = 0; i<5; i++) {
        if (correct[i] === testWord[i]) {
            document.getElementById("r"+ round + "c" + (i)).style.backgroundColor = "green"
        }
        else if (testWord[i] === correct[0] || testWord[i] === correct[1] || testWord[i] === correct[2] || testWord[i] === correct[3] || testWord[i] === correct[4]) {
            document.getElementById("r"+ round + "c" + (i)).style.backgroundColor = "yellow"
        }
        else {
            document.getElementById("r"+ round + "c" + (i)).style.backgroundColor = "grey"
        }
    }
}


function checkValidWord () {
    testWord = "";
    console.log(testWord)
    for (let i=0; i<5; i++) {
        testWord += document.getElementById("r" + round + "c" + i).value;
    }
    if (testWord.length === 5 && /^[a-zA-Z]*$/.test(testWord)) { 
        checkWord ();
        round++;
    }
    else {
        alert("Not Valid?")
    }
    if (testWord === correct) {
        //game end
       if(confirm("Completed! Press OK to play again")){
            restart();
        }

    }
}

function restart (){
    
    let allInputs = document.querySelectorAll("input");
    allInputs.forEach(clearInput => clearInput.value = "") 
    allInputs.forEach(clearInput => clearInput.style.backgroundColor = "");
    correct = "";
    testWord = "";
    round = 0;
    correct = myTest[Math.floor(Math.random() * myTest.length)];
}