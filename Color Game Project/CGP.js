

// var colors = [
// 	"rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")",
// 	"rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")",
// 	"rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")",
// 	"rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")",
// 	"rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")",
// 	"rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")"
// 	]


var h1 = document.querySelector("h1");
var jumbotron = document.querySelectorAll(".jumbotron")[0];
var easy = document.querySelectorAll(".col-xs-1")[0];
var hard = document.querySelectorAll(".col-xs-1")[2];
var squares = document.querySelectorAll(".square");
var restart = document.querySelectorAll(".col-xs-4")[0];
var isCorrect = document.querySelectorAll(".col-xs-4")[1];
var extra = document.querySelectorAll(".container div");

start();

easy.addEventListener("click", function(){
	for (var i = 3; i < squares.length; i++) {
		squares[i].classList.remove("square");
	}
	start();
});

hard.addEventListener("click", function(){
	for (var i = 3; i < squares.length; i++) {
		squares[i].classList.add("square");
	}
	start();
});

restart.addEventListener("click", function(){
	start();
	restart.textContent = "Play Again?";
});

function start(){
	isCorrect.textContent = "";
	var colors = [];
	for (var i = 0; i < squares.length; i++) {
		colors.push("rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")") ;
	}

	function pickColor(){
		return colors[Math.floor(Math.random() * colors.length)];
	}

	var picked = pickColor();
	h1.textContent = picked.toUpperCase();

	for (var i = 0; i < squares.length; i++) {

		squares[i].style.visibility = "visible";
					
	}

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function(){
			if(this.style.backgroundColor != picked){
				isCorrect.textContent = "Try again!";
				this.style.visibility = "hidden";
			}
			else{

				for (var i = 0; i < squares.length; i++) {
					isCorrect.textContent = "Correct!";
					squares[i].style.visibility = "visible";
					squares[i].style.backgroundColor = picked;
					jumbotron.style.backgroundColor = picked;
				}
			}
		});
	}
}

