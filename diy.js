var squares = document.querySelectorAll(".squares");
var colorDisplay = document.querySelector("#colorDisplay");
var resetBtn = document.querySelector("#resetBtn");
var messageDisplay = document.querySelector("#message");


reset();



function reset(){

	messageDisplay.textContent = "";

	resetBtn.addEventListener("click", function(){
	reset();
});

	var colors = newArr();

	var pickedColor = colors[randomNumber(6)];

	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++){

	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		console.log(clickedColor);

		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			
		}
		else{
			messageDisplay.textContent = "Try Again";
			this.style.background = "#232323";
		}
	});
}
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++){
				squares[i].style.background = color;
			}
}

function randomNumber(num){
	var random = Math.floor(Math.random()*num);
	return random;
}

function newArr(){
	var arr = [];
	for (var i = 0; i < squares.length; i++){
		
		var r = randomNumber(256);
		var g = randomNumber(256);
		var b = randomNumber(256);
		arr.push("rgb(" + r + ", " + g + ", " + b + ")");
	}
	return arr;
}