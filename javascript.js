let gridSize = 10;
let gridSquareWidth = 50;
let gridSquareBorderWidth = 1;
let gridContainerWidth = gridSquareWidth*gridSize;

// Build the grid
const gridContainer = document.querySelector('.gridContainer');
for(let i=0;i<gridSize;i++){ // create rows for the grid
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('gridRow'); // add the gridRow class so we can apply css

    for(let j=0;j<gridSize;j++){
        const boxDiv = document.createElement('div');
        boxDiv.classList.add('gridSquare');
        boxDiv.style.flex = "1";
        boxDiv.style.minHeight = `${gridSquareWidth-(2*gridSquareBorderWidth)}px`;
        rowDiv.appendChild(boxDiv);
    }
    gridContainer.appendChild(rowDiv);
}

document.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains("gridSquare")){
        e.target.style.backgroundColor = "black";
    } 
});