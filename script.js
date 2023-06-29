//Getting values from the inputs
let color=document.getElementById('color').value;


//Creating the grid
let grid=document.querySelector(".container"); 

function generateGrid(size){
    grid.replaceChildren(); //Removes all previously creasted divs
    let divSize=(grid.offsetWidth/size);
    for(let i=0;i<size*size;i++){
        let div=document.createElement("div");
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.style.background = "red"
        div.classList.add('grid');   
        grid.appendChild(div);
    }
}
generateGrid(16); //Initial grid generation


//Updating grid size on user input 
let sizeText=document.querySelector(".grid-size-text");
size.onchange = (e) => {
    sizeText.textContent=`${e.target.value}x${e.target.value}`;
    generateGrid(e.target.value);
}
size.onmousemove = (e) => {
    sizeText.textContent=`${e.target.value}x${e.target.value}`;
    generateGrid(e.target.value);
}

