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


function renderGrid() {
    canvas.innerHTML = '';

// 3 BASIC ARRAY SETUP
    let assetNumber = 18;
    let blankCellsNumber = Math.floor(0.2*totalCells);
    let binaryNumber = totalCells-assetNumber-blankCellsNumber;

    let assetsArray = [];
    let binaryArray = [];
    let blankCellsArray = [];
    let superArray = [];


// 4 PUSH ASSET ARRAY
    for (let i=1; i<assetNumber; i++) {
        let assetImage = document.createElement('img');
        assetImage.setAttribute('src', `/assets/${[i]}.png`);
        assetImage.style.width = cellSize-22 + "px";
        assetImage.style.height = cellSize-22 + "px";
        
        assetImage.style.position = "relative";
        assetImage.style.top = "1em";

        assetsArray.push(assetImage);
}

// 5 PUSH BINARY ARRAY
for (let j=0; j<binaryNumber; j++) {
    let binaryGlyph = document.createElement('p');
    binaryGlyph.style.width = cellSize + "px";
    binaryGlyph.style.height = cellSize + "px";

    let result = Math.random() < 0.5 ? 0 : 1;

    function randomBinaryGlyph(result) {
    if (result === 0) {
    binaryGlyph.innerHTML = "0";
    } else {
    binaryGlyph.innerHTML = "1";
    }
    };

    randomBinaryGlyph(result);

    binaryArray.push(binaryGlyph);
}


// 6 PUSH BLANK ARRAY
for (let b=0; b<blankCellsNumber; b++) { 
    let blankCell = document.createElement('div');
    blankCell.style.width = cellSize + "px";
    blankCell.style.height = cellSize + "px";

    blankCellsArray.push(blankCell);
}

// 7 PUSH ALL ARRAYS TO SUPER ARRAY
superArray.push(...assetsArray, ...binaryArray, ...blankCellsArray);


// 8 SHUFFLING SUPER ARRAY 
// Taken from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array/6274381#6274381 
    function shuffleArray(arr) {
    var j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = arr[index];
        arr[index] = arr[j];
        arr[j] = x;
    }
    return arr;
}

shuffleArray(superArray);


// 9 FUNCTION THAT ADDS THEM TO CANVAS
superArray.forEach((element) => {
    canvas.appendChild(element);
})

};

renderGrid();

// 10 FUNCTION THAT RERENDERS GRID EVERY HALF SECOND
setInterval(renderGrid, 300);









//function that refreshes canvas every 2 seconds
//mouseover function 