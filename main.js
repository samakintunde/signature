const canvas = document.getElementById("canvas");
const ctx = canvas.getContext(
  "2d"
  // {alpha: false}
);

// To modify stroke color
let strokeColor;
const colorWell = document.querySelector("input[type=color]");

colorWell.addEventListener("input", e => {
  strokeColor = colorWell.value;
  ctx.strokeStyle = strokeColor;
});

// To modify Stroke Width
let strokeWidth = 10;
const strokeWidthInput = document.getElementById("stroke-width");

strokeWidthInput.addEventListener("input", e => {
  strokeWidth = e.target.value;
  ctx.lineWidth = strokeWidth;
});

// To set presets
class Preset {
  constructor(width, color) {
    this.strokeWidth = width;
    this.strokeStyle = color;
  }
}

let signaturePreset = new Preset(3, "#000000");
console.log(signaturePreset);

const presets = document.getElementById("presets");

presets.addEventListener("select", () => {
  console.log(presets.value);
  if ((presets.value = "signature")) {
    strokeWidth, (strokeStyle = { signaturePreset });
  }
});

// To set initial params
ctx.strokeStyle = strokeColor;
ctx.lineWidth = strokeWidth;
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// To draw to canvas
function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});
canvas.addEventListener("mouseout", () => {
  isDrawing = false;
});

// const downloadBtn = document.getElementById("download-button");
