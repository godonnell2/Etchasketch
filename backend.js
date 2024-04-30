let num = 16;

function changeGridSize(num) {
  num = Number(window.prompt("Type a number from 1 to 99", ""));
  if (num > 100) {
    Number(window.prompt("Please type a number from 1 to 99", ""));
  } else {
    gridContainer.replaceChildren();
    console.log(num);
    createGrid(num);
  }
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
        cell.style.backgroundColor = generateRandomColor();
        console.log(cell.style.opacity);
        let cellOpacity = Number(cell.style.opacity);
        cell.style.opacity = 0.1 + cellOpacity;
      });
    }
  }
}
createGrid(num);

function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}
