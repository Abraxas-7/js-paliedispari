function isPalindrome(inputWord) {
    // Converte la parola in minuscolo per ignorare le differenze tra maiuscole e minuscole
    inputWord = inputWord.toLowerCase();

    // Verifichiamo se la parola è uguale alla sua versione invertita
    let reversedWord = inputWord.split("").reverse().join("");
    
    let resultMessage;
    if (inputWord === reversedWord) {
        resultMessage = "La parola inserita è palindroma.";
    } else {
        resultMessage = "La parola inserita non è palindroma.";
    }

    return resultMessage;
}

// Lettura della parola da controllare
let userWord = prompt("Inserisci una parola:");

// Chiamata alla funzione e assegnazione del risultato
let finalResult = isPalindrome(userWord);

// Visualizzazione del risultato
console.log(finalResult);