const gridBox = document.querySelector(".grid-box");
const gridSideInput = document.querySelector("#grid-side");
const generateButton = document.querySelector("#generateBtn");
const resetButton = document.querySelector("#resetBtn");

let drag = false;

const totalGridWidth = parseInt(getComputedStyle(gridBox).width);
let gridElementWidth = 0;
let prevNumberOfGridElements = 0;

function isInputValid(inputElement) {
  const value = inputElement.value;
  if (!value || value > 100) {
    inputElement.value = "";
  }
}

function rgbStringToInt(rgbString) {
  let [red, green, blue] = rgbString
    .substring(4, rgbString.length - 1)
    .split(",");

  red = parseInt(red);
  green = parseInt(green);
  blue = parseInt(blue);

  return [red, green, blue];
}

function generateDarkerColor(rgbString, darknessPercentage) {
  let [red, green, blue] = rgbStringToInt(rgbString);

  red = red - Math.ceil((red * darknessPercentage) / 100);
  green = green - Math.ceil((green * darknessPercentage) / 100);
  blue = blue - Math.ceil((blue * darknessPercentage) / 100);

  if (red < 0) {
    red = 0;
  }

  if (green < 0) {
    green = 0;
  }

  if (blue < 0) {
    blue = 0;
  }
  return { red, green, blue };
}

function generateColor() {
  return Math.round(Math.random() * 255);
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
  gridElement.style.backgroundColor = "rgb(255,255,255)";
  // Mouse click and drag
  gridElement.addEventListener("mousedown", (e) => {
    drag = true;

    // 10 percent darker shade on each click
    const darkerColors = generateDarkerColor(
      e.target.style.backgroundColor,
      10
    );
    e.target.style.backgroundColor = `rgb(${darkerColors.red},${darkerColors.green},${darkerColors.blue})`;
  });

  // random bg color on mousemove
  gridElement.addEventListener("mousemove", (e) => {
    if (drag) {
      e.target.style.backgroundColor = `rgb(${generateColor()},${generateColor()},${generateColor()})`;
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
  prevNumberOfGridElements = numberOfGridElements;
  calculateGridElementWidth(numberOfGridElements);
  generateGridElements(gridBox, numberOfGridElements, gridElementWidth);
}

gridSideInput.addEventListener("input", (e) => isInputValid(e.target));

generateButton.addEventListener("click", () => {
  deleteGridElements();
  generateSketchpad(gridSideInput.value);
});

resetButton.addEventListener("click", () => {
  deleteGridElements();
  generateSketchpad(prevNumberOfGridElements);
});

generateSketchpad();
