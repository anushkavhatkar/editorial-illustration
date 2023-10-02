let canvas = document.getElementById("canvas");

// 1 BASIC CANVAS SETUP
let canvasDimension = "750px";
let canvasDimensionValue = parseInt(canvasDimension, 10);

canvas.style.backgroundColor = "#00d568";
canvas.style.width = canvasDimension;
canvas.style.height = canvasDimension;


// 2 BASIC GRID/CELLS SETUP
let cells = 10;
var cellSize = canvasDimensionValue/cells;
console.log(cellSize);

canvas.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
canvas.style.gridTemplateRows = `repeat(${cells}, 1fr)`;

let xCells = cells;
let yCells = cells;
var totalCells = xCells*yCells;
console.log(totalCells);


