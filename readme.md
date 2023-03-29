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