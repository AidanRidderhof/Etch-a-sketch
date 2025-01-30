const container = document.querySelector("#container");

function resize(size) {
  let cell = document.getElementsByClassName('cell');
  while(cell.length > 0){
    cell[0].parentNode.removeChild(cell[0]);
}

  for (let i = 0; i < size*size; i++) {
    let square = document.createElement("div");
    square.classList.add("cell");
    container.appendChild(square);
}

  let cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
  cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'black';
  });
  });

}

resize(10);

let cells = document.querySelectorAll('.cell');
const clear = document.querySelector("#clear")
clear.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  });
})

const redraw = document.querySelector('#redraw')
redraw.addEventListener('click', () => {
  let size = prompt("Enter a number 1-100");
  resize(size);
})

//make the container initialization a function and call it in redraw