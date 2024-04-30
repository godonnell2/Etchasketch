let num = 16;

function changeGridSize(num) {
  num = Number(window.prompt("Type a number from 1 to 99", ""));
  gridContainer.replaceChildren();
  console.log(num);
  createGrid(num);
}

// Get the grid container element
const gridContainer = document.querySelector(".grid-container");

function createGrid(num) {
  // Create the grid dynamically
  for (let row = 0; row < num; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    gridContainer.append(rowDiv);
    for (let column = 0; column < num; column++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      //cell.innerText = `${row}, ${column}`;
      rowDiv.append(cell);

      cell.addEventListener("mouseover", (event) => {
        cell.style.backgroundColor = "lightblue";
      });
    }
  }
}
createGrid(num);
