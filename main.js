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
  setPreset() {
    if (e.target.value === "signature") {
      ctx.lineWidth = signaturePreset.strokeWidth;
      ctx.strokeStyle = signaturePreset.strokeStyle;
      strokeInput.value = signaturePreset.strokeWidth;
      colorWell.value = signaturePreset.strokeStyle;
    }
  }
}

let signaturePreset = new Preset(3, "#000000");
let redDoodle = new Preset(10, "#ff0000");
let blueDoodle = new Preset(10, "#0000ff");
let yellowDoodle = new Preset(10, "#ffff00");
let greenDoodle = new Preset(10, "#00ff55");

const presets = document.getElementById("presets");
const strokeInput = document.querySelector("input[type=number]");
let hue = 0;

presets.addEventListener("change", e => {
  if (e.target.value === "signature") {
    ctx.lineWidth = signaturePreset.strokeWidth;
    ctx.strokeStyle = signaturePreset.strokeStyle;
    strokeInput.value = signaturePreset.strokeWidth;
    colorWell.value = signaturePreset.strokeStyle;
  }
  if (e.target.value === "doodle-red") {
    ctx.lineWidth = redDoodle.strokeWidth;
    ctx.strokeStyle = redDoodle.strokeStyle;
    strokeInput.value = redDoodle.strokeWidth;
    colorWell.value = redDoodle.strokeStyle;
  }
  if (e.target.value === "doodle-green") {
    ctx.lineWidth = greenDoodle.strokeWidth;
    ctx.strokeStyle = greenDoodle.strokeStyle;
    strokeInput.value = greenDoodle.strokeWidth;
    colorWell.value = greenDoodle.strokeStyle;
  }
  if (e.target.value === "doodle-blue") {
    ctx.lineWidth = blueDoodle.strokeWidth;
    ctx.strokeStyle = blueDoodle.strokeStyle;
    strokeInput.value = blueDoodle.strokeWidth;
    colorWell.value = blueDoodle.strokeStyle;
  }
  if (e.target.value === "doodle-yellow") {
    ctx.lineWidth = yellowDoodle.strokeWidth;
    ctx.strokeStyle = yellowDoodle.strokeStyle;
    strokeInput.value = yellowDoodle.strokeWidth;
    colorWell.value = yellowDoodle.strokeStyle;
  }
  if (e.target.value === "crazy") {
    ctx.strokeStyle = `hsl(${hue}, 100%, 100%)`;
    ctx.lineWidth = strokeWidth;
    strokeInput.style.display = "none";
    colorWell.style.display = "none";
    setInterval(() => hue++, 100);
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
