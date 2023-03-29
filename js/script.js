
const mainWrapper = document.querySelector('.main-wrapper')
const container = document.querySelector('.container')

for (let i = 0; i < 100; i++) {
  const square = createSquare();

  

  console.log(square);

  container.appendChild(square)



}






function createSquare() {

  const divSquare = document.createElement('div')

  divSquare.classList.add('square');

  return divSquare;
}