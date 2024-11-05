// Funzione per generare un numero random tra 1 e 5
function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// Funzione per controllare se è pari o dispari
function isEven(number) {
    return number % 2 === 0;
}

// Chiede all'utente di scegliere pari o dispari
let userChoice = prompt("Scegli 'pari' o 'dispari':")

// Chiede all'utente di inserire un numero da 1 a 5
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));
while (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
    userNumber = parseInt(prompt("Non ti ho chiesto niente di difficile eh, ora inserisci un numero da 1 a 5:"));
}

// Generaun numero random per il computer
let computerNumber = generateRandomNumber();
console.log(`Il numero generato dal computer è: ${computerNumber}`);

// Sommiamo i due numeri
let sum = userNumber + computerNumber;

// Verifica se la somma è pari o dispari
let result = isEven(sum) ? "pari" : "dispari";
if (result === userChoice) {
    console.log("Hai vinto!");
} else {parseInt
    console.log("Ha vinto il computer!");
}