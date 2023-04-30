let gridSize = 30;
let gridSquareWidth = 50;
let gridSquareBorderWidth = 1;
let gridContainerWidth = gridSquareWidth*gridSize;


const gridContainer = document.querySelector('.gridContainer');
//gridContainer.style.width = `${gridContainerWidth}px`;
for(let i=0;i<gridSize;i++){
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('gridRow');
    for(let j=0;j<gridSize;j++){
        const boxDiv = document.createElement('div');
        boxDiv.classList.add('gridSquare');
        boxDiv.style.minWidth = `${gridSquareWidth-(2*gridSquareBorderWidth)}px`;
        boxDiv.style.minHeight = `${gridSquareWidth-(2*gridSquareBorderWidth)}px`;
        rowDiv.appendChild(boxDiv);
    }
    gridContainer.style.display = "flex";
    gridContainer.appendChild(rowDiv);
}

document.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains("gridSquare")){
        e.target.style.backgroundColor = "black";
    }
    
});