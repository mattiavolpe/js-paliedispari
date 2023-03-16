// TODO I WILL DELETE IT AT THE END OF CODING
"use strict";

/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

// <---------- PALINDROM ---------->
// ASK THE USER TO INPUT THE WORD
const word = prompt("Inserisci una parola");

// SET A CHECK VARIABLE
let isPalindrome = false;

// CYCLE THROUGH HALF THE WORD TO CHECK IF EACH LETTER MATCHES ITS "SAME INDEXED LETTER WHEN STARTING COUNTING FROM THE END"
for (let i = 0; i < word.length / 2; i++) {
  if (word[i] == word[word.length - 1 - i]) {
    isPalindrome = true;
  } else {
    isPalindrome = false;
    i = word.length / 2;
  }
}

// CHECK VALUE OF ISPALINDROME
isPalindrome ? console.log(`La parola ${word} è palindroma`) : console.log(`La parola ${word} non è palindroma`);