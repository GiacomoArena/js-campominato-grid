js-campominato-grid
===
## **Consegna**  
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## Procedimenti  

 - Creare la struttura in HTML e CSS 

 - quindi il container con i vari box 10 x 10 ed il pulsante iniziale 

 - richiamare il container principale e il main-wrapper in una variabile

 - iniziare un ciclo for che avrá al suo interno una funzione che mi genera i vari box ("square")  
 ```
 
function createSquare() {

  const divSquare = document.createElement('div')

  divSquare.classList.add('square');

  return divSquare;
}
 ```
 .
 - creare una funzione per la produzione di numeri casuali da 1 a 100 sempre differenti che poi assegneremo come valore a square
 ``` 
 function uinqueRandomNum(generatedNumbers, max, min) {
  let randomNumber = Math.floor(Math.random() * (max - min +1)+min);

  while (generatedNumbers.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * (max - min +1)+min);
  }
  generatedNumbers.push(randomNumber);

  return randomNumber;
}
 ```
 .
 - creare un addeventlistener che al click tramite
 ```
 this.classList.toggle('clicked');
 ```
 .
 andremo a rimuovere o inserire la classe clicked che al momento cambia il background dello square 
   
- creare la variabile "squareId" che sará =  "randomNum" per poi nel eventlistener essere visualizzato con un log tramite un click.
- creare un button che ha una posizione centrale e dare una classe "hide" al container per poterlo nascondere cosí che  tramite un addeventlistener al click venga rimossa la classe hide al container e inserita invece al button.