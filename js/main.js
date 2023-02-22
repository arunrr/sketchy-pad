const gridBox = document.querySelector(".grid-box");
const gridSideInput = document.querySelector("#grid-side");
const generateButton = document.querySelector(".button");
let drag = false;

const totalGridWidth = parseInt(getComputedStyle(gridBox).width);
let gridElementWidth = 0;

function isInputValid(inputElement) {
  const value = inputElement.value;
  if (!value || value > 100) {
    inputElement.value = "";
  }
}

function deleteGridElements() {
  gridBox.innerHTML = "";
}

function calculateGridElementWidth(numberOfGridElements) {
  gridElementWidth = Math.floor(totalGridWidth / numberOfGridElements);
}

function createGridElement(gridBox, gridElementWidth) {
  const gridElement = document.createElement("div");
  gridElement.style = `border: 1px solid var(--clr-grid-border);width: ${gridElementWidth}px;height: ${gridElementWidth}px`;
  // Mouse click and drag
  gridElement.addEventListener("mousedown", () => {
    drag = true;
  });

  gridElement.addEventListener("mousemove", (e) => {
    if (drag) {
      e.target.style.backgroundColor = "black";
    }
  });

  gridElement.addEventListener("mouseup", () => {
    drag = false;
  });

  gridBox.appendChild(gridElement);
}

function generateGridElements(gridBox, numberOfGridElements, gridElementWidth) {
  for (let i = 1; i <= numberOfGridElements; i++) {
    for (let j = 1; j <= numberOfGridElements; j++) {
      createGridElement(gridBox, gridElementWidth);
    }
  }
}
function generateSketchpad(numberOfGridElements = 20) {
  calculateGridElementWidth(numberOfGridElements);
  generateGridElements(gridBox, numberOfGridElements, gridElementWidth);
}

gridSideInput.addEventListener("input", (e) => isInputValid(e.target));

generateButton.addEventListener("click", () => {
  deleteGridElements();
  generateSketchpad(gridSideInput.value);
});

generateSketchpad();
