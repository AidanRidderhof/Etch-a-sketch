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