const rows = 6;
const columns = 6;

// Get the grid container element
const gridContainer = document.querySelector(".grid-container");

// Create the grid dynamically
for (let row = 0; row < rows; row++) {
  const rowDiv = document.createElement("div");
  rowDiv.className = "row";
  gridContainer.append(rowDiv);
  for (let column = 0; column < columns; column++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.innerText = `${row}, ${column}`;
    rowDiv.append(cell);
    console.log(row);
    console.log(cell);
  }
}
