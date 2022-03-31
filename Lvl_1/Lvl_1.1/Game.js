var canvas;
var context;
var timer;

var interval = 1000/60;
var player;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new Player();
player.color = "blue";
player.height = 100;
player.width = 100;
player.x = 100;
player.y = 100;

timer = setInterval(animate, interval);


function animate(){
context.clearRect(0,0,canvas.width, canvas.height);

player.x += 0;

player.draw();

}