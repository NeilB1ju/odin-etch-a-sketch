//Getting values from the inputs
let color=document.getElementById('color').value;
let size=document.getElementById('size');

//Updating grid size on screen
let sizeText=document.querySelector(".grid-size-text");
size.onchange = (e) => sizeText.textContent=`${e.target.value}x${e.target.value}`;
size.onmousemove = (e) => sizeText.textContent=`${e.target.value}x${e.target.value}`;

