const gridBox = document.querySelector(".grid-box");
const numberOfGridElements = 5;
const totalGridWidth = parseInt(getComputedStyle(gridBox).width);

const gridElementWidth = Math.floor(totalGridWidth / numberOfGridElements);

function CreateGridElement(gridBox, gridElementWidth) {
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
      CreateGridElement(gridBox, gridElementWidth);
    }
  }
}

generateGridElements(gridBox, numberOfGridElements, gridElementWidth);
