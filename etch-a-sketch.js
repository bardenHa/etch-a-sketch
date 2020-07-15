const container = document.querySelector('.grid-container');
let numberOfSquares = 32;
let amountOfSquares = numberOfSquares*numberOfSquares;
let widthOfSquares = ((document.getElementById('grid-container').clientWidth)/numberOfSquares);
console.log(widthOfSquares);

// setting properties for grid squares
const gridSquare = document.createElement('div');
gridSquare.classList.add('grid-square');
gridSquare.style.width = 'auto';
gridSquare.style.height = 'auto';
console.log(amountOfSquares);

document.documentElement.style.setProperty('--squares', numberOfSquares);

for (i = 1 ; i <= amountOfSquares ; i++) {
    console.log(i)
    container.appendChild(gridSquare.cloneNode(true));
}
