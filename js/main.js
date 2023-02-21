const gridBox = document.querySelector(".grid-box");
const gridElementWidth = 64;
const totalGridWidth = parseInt(getComputedStyle(gridBox).width);

const numberOfGridElements = Math.floor(totalGridWidth / gridElementWidth);

function CreateGridElement(gridBox, gridElementWidth) {
  const gridElement = document.createElement("div");
  gridElement.style = `border: 1px solid var(--clr-grid-border);width: ${gridElementWidth}px;height: ${gridElementWidth}px`;
  gridElement.addEventListener(
    "mouseover",
    (e) => (e.target.style.backgroundColor = "black")
  );
  gridBox.appendChild(gridElement);
}

for (let i = 1; i <= numberOfGridElements; i++) {
  for (let j = 1; j <= numberOfGridElements; j++) {
    CreateGridElement(gridBox, gridElementWidth);
  }
}
