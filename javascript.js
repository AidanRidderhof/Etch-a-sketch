const container = document.querySelector("#container");

for (let i = 0; i < 100; i++) {
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

const clear = document.querySelector("#clear")
clear.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  });
})

const redraw = document.querySelector('#redraw')
redraw.addEventListener('click', () => {
  let size = prompt("Enter a number 1-100");
})

//make the container initialization a function and call it in redraw