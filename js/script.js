
const mainWrapper = document.querySelector('.main-wrapper')
const container = document.querySelector('.container')
let generatedNumbers = [];

for (let i = 0; i < 100; i++) {
  const square = createSquare();
  let randomNum = uinqueRandomNum(generatedNumbers, 100, 1);
  let spanNumber = document.createElement('span');
  spanNumber.append(randomNum)
  container.appendChild(square);
  let squareId = randomNum;

  square.addEventListener('click', function(){
    this.classList.toggle('clicked');
    console.info("hai clicacto il N° " + squareId);
    square.append(spanNumber);
    if(!square.classList.contains('clicked')){
      square.removeChild(spanNumber)    }
    
    /*DA FIXARE perché il tasto non appena viene clicacto per la seconda vlta torna viola ma con il doppio del tersto su */
  })
}




/*                FUNCTION                     */

function createSquare() {

  const divSquare = document.createElement('div')

  divSquare.classList.add('square');

  return divSquare;
}

function uinqueRandomNum(generatedNumbers, max, min) {
  let randomNumber = Math.floor(Math.random() * (max - min +1)+min);

  while (generatedNumbers.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * (max - min +1)+min);
  }
  generatedNumbers.push(randomNumber);

  return randomNumber;
}


