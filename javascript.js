const container = document.querySelector("#container");

for (let i = 0; i < 100; i++) {
  let square = document.createElement("div");
  square.classList.add("cell");
  container.appendChild(square);
}
