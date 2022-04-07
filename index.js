const painting = document.querySelector('.painting');
//const pixels = document.querySelectorAll(".pixel");
let selectedColor = "blue";

//allows the clicked pixels to have their colors changed when clicked;
painting.addEventListener('click', function(e){
	e.target.style.backgroundColor = selectedColor
});

//allows the pixels to be turned white when doubled clicked;
painting.addEventListener('dblclick',function(e){
    e.target.style.backgroundColor = "white"
});

const palette = document.querySelector('.palette')

//allows the selected color to be changed to the clicked color ;
palette.addEventListener('click', function(e){
    selectedColor = e.target.id;
});

//creates the Clear button, to turn the pixels all white;
const clearButton = document.createElement("clear-button");
clearButton.textContent = "Clear";
document.querySelector('body').appendChild(clearButton);

let pixels = document.querySelectorAll(".pixel")


//turns all of the pixels in the paint app white;
clearButton.addEventListener('click', function(){
      
});

