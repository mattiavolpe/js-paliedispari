/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

let evenOdd = prompt("Pari o dispari?");
let evenOddToLowerCase = evenOdd.toLowerCase();
while (evenOddToLowerCase != "pari" && evenOddToLowerCase != "dispari") {
  alert('Assicurati di inserire "pari" o "dispari"');
  evenOdd = prompt("Pari o dispari?");
  evenOddToLowerCase = evenOdd.toLowerCase();
}

let userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
while (userNumber < 1 || userNumber > 5 || (isNaN(userNumber))) {
  alert("Assicurati di inserire un numero tra 1 e 5, estremi inclusi");
  userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
}

const pcNumber = pcNumberGenerator();

const sum = userNumber + pcNumber;

declareWinner(evenOddToLowerCase, userNumber, pcNumber, sum);

// <---------- FUNCTIONS ---------->

function pcNumberGenerator() {
  return Math.floor(Math.random() * 5) + 1;
}

function declareWinner(userChoice, userChoicedNumber, pcChoicedNumber, sum) {
  if ((userChoice == "pari" && sum % 2 == 0) || (userChoice == "dispari" && sum % 2 != 0)) {
    alert(`Tu hai scelto ${userChoice} ed hai inserito ${userChoicedNumber}. Il PC ha scelto ${pcChoicedNumber}. La somma è ${sum}, quindi HAI VINTO`);
  } else {
    alert(`Tu hai scelto ${userChoice} ed hai inserito ${userChoicedNumber}. Il PC ha scelto ${pcChoicedNumber}. La somma è ${sum}, quindi HAI PERSO`);
  }
}