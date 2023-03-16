/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

const evenOdd = prompt("Pari o dispari?");

const userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);

const pcNumber = Math.floor(Math.random() * 5) + 1;
console.log(pcNumber);

const somma = userNumber + pcNumber;
console.log(somma);

if ((evenOdd == "pari" && somma % 2 == 0) || (evenOdd == "dispari" && somma % 2 != 0)) {
  console.log("Hai vinto");
} else {
  console.log("Hai perso");
}