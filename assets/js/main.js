/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

// <---------- PALINDROME ---------->
// ASK THE USER TO INPUT THE WORD
let word = prompt("Inserisci una parola");

// CHECK IF THERE'S MORE THAN ONE WORD OR AN EMPTY INPUT
while(checkIfSingleNonEmptyWord(word)) {
  word = prompt("Inserisci una parola");
}

// CONVERT THE WORD TO LOWERCASE FOR NOT CASE SENSITIVE CHECKING
const wordLowerCase = word.toLowerCase();
console.log(wordLowerCase);

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
  let checker = false;
  for (let i = 0; i < wordToCheck.length / 2; i++) {
    if (wordToCheck[i] == wordToCheck[wordToCheck.length - 1 - i]) {
      checker = true;
    } else {
      checker = false;
      i = wordToCheck.length / 2;
    }
  }
  return checker;
}