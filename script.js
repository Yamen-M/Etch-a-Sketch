document.body.style.display = 'flex';
document.body.style.justifyContent = 'space-between';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.margin = '0';
document.body.style.padding = '0';
document.documentElement.style.margin = '0';
document.documentElement.style.padding = '0';

var mainContainer;
var size;

const wrapper = document.createElement("div");
const btnContainer = document.createElement("div");
const gridContainer = document.createElement("div");

const btnCustomGrid = document.createElement("button");
const btnResetGrid = document.createElement("button");
const btnToggleColor = document.createElement("button");
const btnErase = document.createElement("button");
const titleDiv = document.createElement('div');

btnCustomGrid.textContent = "Customize Grid Size";
btnCustomGrid.addEventListener('click', () => customGrid());

btnResetGrid.textContent = "Reset Grid";
btnResetGrid.addEventListener('click', () => {
    mainContainer.remove();
    createGrid(size);
});

btnToggleColor.textContent = "Toggle Black/Color"
btnErase.textContent = "Eraser"


titleDiv.textContent = 'Etch-a-Sketch - :D';
titleDiv.style.fontFamily = "Arial, sans-serif"
titleDiv.style.fontSize = '24px';
titleDiv.style.fontWeight = 'bold';
titleDiv.style.marginBottom = '20px';
titleDiv.style.paddingLeft = '5px'; 

wrapper.style.display = "flex";
wrapper.style.height = "100vh";

gridContainer.style.flex = '1';              
gridContainer.style.display = 'flex';       
gridContainer.style.justifyContent = 'center';
gridContainer.style.alignItems = 'center';
gridContainer.style.paddingLeft = "300px";

btnContainer.style.width = "250px";
btnContainer.style.backgroundColor = "#eee";
btnContainer.style.display = "flex";
btnContainer.style.flexDirection = "column"
btnContainer.style.justifyContent = "flex-start"
btnContainer.style.gap = "10px"
btnContainer.style.padding = "20px";
btnContainer.style.height = "100vh";

function customGrid(){
    let size_input = prompt("Please enter preferred grid size (between 1 and 100): ");
    size = parseInt(size_input,10);

    while(isNaN(size) || size < 1 || size > 100) {
        size_input = prompt("Invalid Number!\nPlease enter VALID grid size (between 1 and 100): ");
        size = parseInt(size_input,10);
    }

    mainContainer.remove();
    createGrid(size);
}


function createSideBar()
{
    btnContainer.appendChild(titleDiv);

    btnCustomGrid.style.marginTop = "auto";
    btnResetGrid.style.marginTop = "10px";
    btnToggleColor.style.marginTop = "10px";
    btnErase.style.marginTop = "10px";
    btnErase.style.marginBottom = "225px"

    btnContainer.appendChild(btnCustomGrid);
    btnContainer.appendChild(btnResetGrid);
    btnContainer.appendChild(btnToggleColor);
    btnContainer.appendChild(btnErase);
    
    wrapper.appendChild(btnContainer)
}

function createGrid(size)
{
    mainContainer = document.createElement("div");
    mainContainer.style.display = "flex";
    mainContainer.style.flexWrap = "wrap";
    mainContainer.style.width = "640px";
    mainContainer.style.height = "640px";

    const gridPixelSize = 640/size;

    for(i = 0; i < size*size; i++)
    {
        const pixel = document.createElement("div");
        pixel.style.width = gridPixelSize +"px";
        pixel.style.height = gridPixelSize + "px";
        pixel.style.border = "1px solid black";
        pixel.style.boxSizing = "border-box";
        mainContainer.appendChild(pixel);
    }
    
    gridContainer.appendChild(mainContainer)
    wrapper.appendChild(gridContainer)
    document.body.appendChild(wrapper)
}

createSideBar();
createGrid(16);
