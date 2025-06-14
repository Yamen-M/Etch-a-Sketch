document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';

const wrapper = document.createElement("div");

const CustomGrid = document.createElement("button");
const resetGrid = document.createElement("button");
const toggleColor = document.createElement("button");
const eraser = document.createElement("button");



function CreateSideBar()
{
    
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
    
    wrapper.appendChild(mainContainer)
    document.body.appendChild(wrapper)
}

createGrid();
