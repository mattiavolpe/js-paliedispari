/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

// ASK THE USER IF HE WANTS EVEN OR ODD
let evenOdd = prompt("Pari o dispari?");
let evenOddToLowerCase;

// CHECK IF USER CLICKS ON CANCEL
evenOdd == null ? evenOddToLowerCase = evenOdd : evenOddToLowerCase = evenOdd.toLowerCase();

// REPEAT PROMPT IF INSERTED WORD IS NOT EQUAL TO PARI OR DISPARI
while (evenOddToLowerCase != "pari" && evenOddToLowerCase != "dispari") {
  alert('Assicurati di inserire "pari" o "dispari"');
  evenOdd = prompt("Pari o dispari?");
  evenOdd == null ? evenOddToLowerCase = evenOdd : evenOddToLowerCase = evenOdd.toLowerCase();
}

// ASK THE USER TO INSERT A NUMBER
let userNumber = Number(prompt("Inserisci un numero da 1 a 5"));

// REPEAT PROMPT IF INSERTED NUMBER IS NOT IN THE RANGE
while (userNumber < 1 || userNumber > 5 || (isNaN(userNumber))) {
  alert("Assicurati di inserire un numero tra 1 e 5, estremi inclusi");
  userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
}

// GENERATE A RANDOM NUMBER FOR THE PC
const pcNumber = pcNumberGenerator();

// SUM THE NUMBER
const sum = userNumber + pcNumber;

// DECLARE THE WINNER
declareWinner(evenOddToLowerCase, userNumber, pcNumber, sum);

// <---------- FUNCTIONS ---------->

// FUNCTION TO GENERATE THE RANDOM PC NUMBER
function pcNumberGenerator() {
  return Math.floor(Math.random() * 5) + 1;
}

// FUNCTION TO DECLARE THE WINNER
function declareWinner(userChoice, userChoicedNumber, pcChoicedNumber, sum) {
  if ((userChoice == "pari" && sum % 2 == 0) || (userChoice == "dispari" && sum % 2 != 0)) {
    alert(`Tu hai scelto ${userChoice} ed hai inserito ${userChoicedNumber}. Il PC ha scelto ${pcChoicedNumber}. La somma è ${sum}, quindi HAI VINTO`);
  } else {
    alert(`Tu hai scelto ${userChoice} ed hai inserito ${userChoicedNumber}. Il PC ha scelto ${pcChoicedNumber}. La somma è ${sum}, quindi HAI PERSO`);
  }
}