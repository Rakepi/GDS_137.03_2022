var canvas;
var context;
var timer;
var player;
var interval = 1000/60;

//canvas/context
canvas = document.getElementById("canvas");
context = canvas.getContext("2d")

//new player and timer intervals
player = new Player();
player.vx = 4;
timer = setInterval(animate, interval)

//function for animating
function animate(){
    // clear canvas and then move player

    //clear canvas here
    context.clearRect(0,0,canvas.width, canvas.height);	
    // move player here...
    player.move();

	//draw on/update the canvas here
	player.draw();
}