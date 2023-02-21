const gridBox = document.querySelector(".grid-box");

const totalGridWidth = parseInt(getComputedStyle(gridBox).width);
let gridElementWidth = 0;

function calculateGridElementWidth(numberOfGridElements = 10) {
  gridElementWidth = Math.floor(totalGridWidth / numberOfGridElements);
}

function createGridElement(gridBox, gridElementWidth) {
  const gridElement = document.createElement("div");
  gridElement.style = `border: 1px solid var(--clr-grid-border);width: ${gridElementWidth}px;height: ${gridElementWidth}px`;
  gridElement.addEventListener(
    "mouseover",
    (e) => (e.target.style.backgroundColor = "black")
  );
  gridBox.appendChild(gridElement);
}

function generateGridElements(gridBox, numberOfGridElements, gridElementWidth) {
  for (let i = 1; i <= numberOfGridElements; i++) {
    for (let j = 1; j <= numberOfGridElements; j++) {
      createGridElement(gridBox, gridElementWidth);
    }
  }
}
function generateSketchpad(numberOfGridElements) {
  calculateGridElementWidth(numberOfGridElements);
  generateGridElements(gridBox, numberOfGridElements, gridElementWidth);
}

generateSketchpad(50);
