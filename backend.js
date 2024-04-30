const rows = 16;
const columns = 16;

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
    //cell.innerText = `${row}, ${column}`;
    rowDiv.append(cell);

    cell.addEventListener("mouseover", (event) => {
      cell.style.backgroundColor = "lightblue";
    });
  }
}
