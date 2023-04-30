let gridSize = 16;
let gridSquareWidth = 50;
let gridSquareBorderWidth = 1;
let gridContainerWidth = gridSquareWidth*gridSize;

// Build the grid
function buildGrid(size){

    const gridContainer = document.querySelector('.gridContainer');

    while(gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild)
    }

    for(let i=0;i<size;i++){ // create rows for the grid
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('gridRow'); // add the gridRow class so we can apply css

        //create the grid squares in the row
        for(let j=0;j<size;j++){
            const boxDiv = document.createElement('div');
            boxDiv.classList.add('gridSquare');
            boxDiv.style.flex = "1";

            rowDiv.appendChild(boxDiv);
        }
        gridContainer.appendChild(rowDiv);
    }
}
document.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains("gridSquare")){
        e.target.style.backgroundColor = "black";
    } 
});

// functions all declared, now run the following to complete page setup
buildGrid(gridSize);

const btnResize = document.querySelector('.setGridSize');
btnResize.addEventListener('click', (e) => {
    let size = Math.floor(prompt("Enter the required grid size","16"));
    if (size != NaN) {
        if(size > 100) size = 100;
        if (size == gridSize) return;
        gridSize = size;
        buildGrid(size);
   }
});

const btnReset = document.querySelector('.reset');
btnReset.onclick = function(){buildGrid(gridSize)}