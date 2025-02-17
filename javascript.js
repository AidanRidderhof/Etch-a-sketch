const container = document.querySelector("#container");

function resize(size) {
  //deletes existings cells
  let cell = document.getElementsByClassName('cell');
  container.innerHTML = '';
  //creates cells
  for (let i = 0; i < size*size; i++) {
    let square = document.createElement("div");
    square.classList.add("cell");
    container.appendChild(square);
}
  //sizes adds hover effect
  let cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.height = ((400-(size*2))/size) + 'px';
    cell.style.width = ((400-(size*2))/size) + 'px';
    cell.style.border = 'solid';
    cell.style.borderWidth = 1 + 'px';
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'black';
  });
  });
}

function clearBoard() {
  let cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  });
}


resize(10);



const clear = document.querySelector("#clear")
clear.addEventListener('click', clearBoard);

const redraw = document.querySelector('#redraw')
redraw.addEventListener('click', () => {
  let size = prompt("Enter a number 1-100");
  if (size<=100){
    resize(size);
  }
})
