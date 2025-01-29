const container = document.querySelector("#container");
let cells = document.querySelectorAll('.cell');

for (let i = 0; i < 100; i++) {
  let square = document.createElement("div");
  square.classList.add("cell");
  container.appendChild(square);
}

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