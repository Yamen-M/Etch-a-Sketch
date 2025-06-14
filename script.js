document.body.style.display = 'flex';
document.body.style.justifyContent = 'space-between';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.margin = '0';
document.body.style.padding = '0';
document.documentElement.style.margin = '0';
document.documentElement.style.padding = '0';

var mainContainer;
var size = 16;
var color = "black";

const wrapper = document.createElement("div");
const btnContainer = document.createElement("div");
const gridContainer = document.createElement("div");

const btnCustomGrid = document.createElement("button");
const btnResetGrid = document.createElement("button");
const btnToggleColor = document.createElement("button");
const btnErase = document.createElement("button");
const titleDiv = document.createElement('div');
const currentTool = document.createElement("div");

currentTool.textContent = 'Etch-a-Sketch - :D';
currentTool.style.fontFamily = "Arial, sans-serif";
currentTool.style.fontSize = '20px';
currentTool.style.fontWeight = 'bold';
currentTool.style.marginBottom = '20px';
currentTool.style.paddingLeft = '5px'; 

btnCustomGrid.textContent = "Customize Grid Size";
btnCustomGrid.addEventListener('click', () => customGrid());

btnResetGrid.textContent = "Reset Grid";
btnResetGrid.addEventListener('click', () => {
    mainContainer.remove();
    createGrid(size);
});

btnToggleColor.textContent = "Toggle Black/Color";
btnToggleColor.addEventListener('click', () =>{
    
    if(color !== "black"){
        color = "black";
        displayTool("Black");
    }
    else{
        color = "random";
        displayTool("Color")
    }
})

btnErase.textContent = "Eraser";
btnErase.addEventListener('click', () =>{
    
    if(color !== "white"){
        color = "white";
        displayTool("Eraser");
    }
})

titleDiv.textContent = 'Etch-a-Sketch - :D';
titleDiv.style.fontFamily = "Arial, sans-serif";
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


function displayTool(tool){
    currentTool.textContent = `Selected tool: ${tool}`
}

function randomColor(){
    var HEXcolors = "0123456789ABCDEF";
    var color = "#";

    for(i = 0; i < 6; i++)
    {
        color += HEXcolors[Math.floor(Math.random() * 16)];
    }
    
    return color;
}


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
    btnErase.style.marginBottom = "80px";
    currentTool.style.marginBottom = "125px";

    btnContainer.appendChild(btnCustomGrid);
    btnContainer.appendChild(btnResetGrid);
    btnContainer.appendChild(btnToggleColor);
    btnContainer.appendChild(btnErase);
    displayTool("Black")
    btnContainer.appendChild(currentTool);
    
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

        pixel.addEventListener("mouseenter", () => {
            if(color === "black")
                pixel.style.backgroundColor = "black";
            else if(color === "white")
                pixel.style.backgroundColor = "white";
            else
                pixel.style.backgroundColor = randomColor();
        });

        mainContainer.appendChild(pixel);
    }
    
    gridContainer.appendChild(mainContainer)
    wrapper.appendChild(gridContainer)
    document.body.appendChild(wrapper)
}

createSideBar();
createGrid(size);
