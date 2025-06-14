document.body.style.display = 'flex';
document.body.style.justifyContent = 'space-between';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.margin = '0';
document.body.style.padding = '0';
document.documentElement.style.margin = '0';
document.documentElement.style.padding = '0';

const wrapper = document.createElement("div");
const btnContainer = document.createElement("div");
const gridContainer = document.createElement("div");

const btnCustomGrid = document.createElement("button");
const btnResetGrid = document.createElement("button");
const btnToggleColor = document.createElement("button");
const btnErase = document.createElement("button");
const titleDiv = document.createElement('div');




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

function createSideBar()
{
    btnContainer.appendChild(titleDiv);

    btnCustomGrid.style.marginTop = "auto";
    btnResetGrid.style.marginTop = "10px";
    btnToggleColor.style.marginTop = "10px";
    btnErase.style.marginTop = "10px";
    btnErase.style.marginBottom = "225px"

    btnContainer.appendChild(btnCustomGrid);
    btnContainer.appendChild(rbtnResetGrid);
    btnContainer.appendChild(btnToggleColor);
    btnContainer.appendChild(btnErase);
    
    wrapper.appendChild(btnContainer)
}

function createGrid()
{
    const mainContainer = document.createElement("div");
    mainContainer.style.display = "flex";
    mainContainer.style.flexWrap = "wrap";
    mainContainer.style.width = "640px";
    mainContainer.style.height = "640px";


    for(i = 0; i < 256; i++)
    {
        const pixel = document.createElement("div");
        pixel.style.width = "40px";
        pixel.style.height = "40px";
        pixel.style.border = "1px solid black";
        pixel.style.boxSizing = "border-box";
        mainContainer.appendChild(pixel);
    }
    
    gridContainer.appendChild(mainContainer)
    wrapper.appendChild(gridContainer)
    document.body.appendChild(wrapper)
}

createSideBar();
createGrid();
