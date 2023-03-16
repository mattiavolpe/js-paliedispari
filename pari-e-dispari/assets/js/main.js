// TODO I WILL REMOVE IT AFTER CODING
"use strict";
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

const pcNumber = Math.floor(Math.random() * 5) + 1;

const somma = userNumber + pcNumber;
console.log(somma);

if ((evenOdd == "pari" && somma % 2 == 0) || (evenOdd == "dispari" && somma % 2 != 0)) {
  console.log("Hai vinto");
} else {
  console.log("Hai perso");
}