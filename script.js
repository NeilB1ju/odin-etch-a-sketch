//Tracks if user is pressing down the mouse or not 
let mouseDown = false
document.body.onmousedown = () => {
    mouseDown = true
    e.preventDefault();
}
document.body.onmouseup = () => (mouseDown = false)


//Creating the grid
let grid=document.querySelector(".container"); 

function generateGrid(size){
    grid.replaceChildren(); //Removes all previously creasted divs
    let gridSize=grid.offsetWidth;
    let divSize=(gridSize/size); //Calculates size of the divs that are created
    for(let i=0;i<size*size;i++){
        let div=document.createElement("div");
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.classList.add('grid'); 

        //Adding event listeners to allow us to change the color of the divs
        div.addEventListener('click', () => {
            if(tracker==1){
                div.style.background=color;
            }
            if(tracker==2){
                c=getRandomColor();
                div.style.background=c;
            }
            if(tracker==3){
                div.style.background="#EDEDED";
            }
        });

        div.addEventListener('mouseover', () => {
            if(mouseDown==true){ //Checks if the user is pressing down the mouse or not
                if(tracker==1){
                    div.style.background=color;
                }
                if(tracker==2){
                    c=getRandomColor();
                    div.style.background=c;
                }
                if(tracker==3){
                    div.style.background="#EDEDED";
                }
            }
        });

        grid.appendChild(div);
    }
}
generateGrid(16); //Initial grid generation


//Accepting user input for color 
let colorSelector=document.getElementById('color');
let color=colorSelector.value;

colorSelector.onchange = (e) => {
    color=e.target.value;
}


//Implementing button functionality
let colorButton=document.querySelector('.color-button');
let clearButton=document.querySelector('.clear-button');
let eraserButton=document.querySelector('.eraser-button');
let rainbowButton=document.querySelector('.rainbow-button');
let tracker=0; //Used to track what button has been pressed
// Values 1,2 and 3 indicate color, rainbow and eraser respectively 


//Function to indicate which mode is currently being used
function buttonPress(tracker){
    tracker=tracker-1;
    a=[colorButton, rainbowButton, eraserButton];
    for(let i=0;i<3;i++){
        if(i==tracker){
            a[i].style.background="#333333";
            a[i].style.color="#EDEDED"
        }
        else{
            a[i].style.background="#EDEDED";
            a[i].style.color="black"
        }
    }
}


//Functionality for color button
colorButton.addEventListener('click', () => {
    tracker=1;
    buttonPress(tracker);
})


//Functionality for rainbow button
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

rainbowButton.addEventListener('click', () => {
    tracker=2;
    buttonPress(tracker);
})


//Functionality for eraser button
eraserButton.addEventListener('click', () => {
    tracker=3;
    buttonPress(tracker);
})


//Functionality for clear grid button
function clearGrid(){
    let nodes = grid.childNodes;
    for(let i=0; i<nodes.length; i++) {
        nodes[i].style.background = "#EDEDED";
    }
}

clearButton.addEventListener('click', () =>{
    clearGrid();
});

