const rows = 16;
const columns = 16;

// Get the grid container element
const gridContainer = document.querySelector(".grid-container");

// Create the grid dynamically
for (let row = 0; row < rows; row++) {
  for (let column = 0; column < columns; column++) {
    console.log(row);
    console.log(column);
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";

    gridContainer.appendChild(gridItem);
  }
}
