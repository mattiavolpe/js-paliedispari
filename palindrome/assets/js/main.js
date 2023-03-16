/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/

// ASK THE USER TO INPUT THE WORD
let word = prompt("Inserisci una parola");

// CHECK IF THERE'S MORE THAN ONE WORD OR AN EMPTY INPUT
while(checkIfSingleNonEmptyWord(word)) {
  word = prompt("Inserisci una parola");
}

// CONVERT THE WORD TO LOWERCASE FOR NOT CASE SENSITIVE CHECKING
const wordLowerCase = word.toLowerCase();

// CYCLE THROUGH HALF THE WORD TO CHECK IF EACH LETTER MATCHES ITS "SAME INDEXED LETTER WHEN STARTING COUNTING FROM THE END"
let isPalindrome = checkIfPalindrome(wordLowerCase);

// CHECK VALUE OF ISPALINDROME
isPalindrome ? console.log(`La parola ${word} è palindroma`) : console.log(`La parola ${word} non è palindroma`);

// <---------- FUNCTIONS ---------->

// FUNCTION TO CHECK IF THERE'S MORE THAN ONE WORD OR AN EMPTY INPUT
function checkIfSingleNonEmptyWord(insertedWord) {
  if (insertedWord == "") {
    alert("Inserisci un'unica parola e non lasciare il campo vuoto");
    return true;
  } else {
    for (let i = 0; i < insertedWord.length; i++) {
      if (insertedWord[i] == " ") {
        alert("Inserisci un'unica parola e non lasciare il campo vuoto");
        return true;
      }
    }
  }
}

// FUNCTION TO CYCLE THROUGH HALF THE WORD TO CHECK IF EACH LETTER MATCHES ITS "SAME INDEXED LETTER WHEN STARTING COUNTING FROM THE END"
function checkIfPalindrome(wordToCheck) {
  for (let i = 0; i < wordToCheck.length / 2; i++) {
    if (wordToCheck[i] != wordToCheck[wordToCheck.length - 1 - i]) {
      return false;
    }
  }
  return true;
}