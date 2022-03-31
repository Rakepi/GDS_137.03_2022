
var canvas;
var context;
var timer;
var player1 
var interval = 1000/60;

//canvas/context
canvas = document.getElementById("canvas");
context = canvas.getContext("2d")

// paddle dimentions
player1 = new GameObject();
player1.x = 30;
player1.y = canvas.height/2;
player1.height = 125;
player1.width = 18;
player1.color = "Red";

player1.vx = 0;
player1.vy = 0;
timer = setInterval(animate, interval)

//function for animating
function animate(){

    //clears canvas
    context.clearRect(0,0,canvas.width, canvas.height);	

	//update the canvas
	player1.drawRect();
}