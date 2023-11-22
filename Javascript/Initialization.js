//grid creation, 6 rows, 5 columns
createInputBoxes(6,5);
function createInputBoxes(rowsTotal,columnsTotal) {
    for (let row=0; row<rowsTotal; row++){
        for (let column=0; column<columnsTotal; column++) {
            let inputBox = document.createElement("input");
            inputBox.innerHTML = "row" + row + "column" + column;
            inputBox.id = "row" + row + "column" + column;
            document.getElementById("gridInput").appendChild(inputBox);
        }
    }
}
//interesting observations: "let inputBox" will not append multiple times if defined outside of the scope of either loop or function. In that case, only the last iteration stays appended

//build array of possible words from chosen source file

let validWordList = '';
getValidWords("https://gist.githubusercontent.com/dracos/dd0668f281e685bad51479e5acaadb93/raw/6bfa15d263d6d5b63840a8e5b64e04b382fdb079/valid-wordle-words.txt");

async function getValidWords(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  validWordList = myText.split('\n');
  if (validWordList[validWordList.length - 1] === '') { //For some reason, last line of pulled file has a newline after last word. Pop it off to remove blank at last index
    validWordList.pop();
  }
  wordToGuess = validWordList[Math.floor(Math.random() * validWordList.length)];

}