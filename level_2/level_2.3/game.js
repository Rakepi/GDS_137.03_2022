
var canvas;
var context;
var timer;
var player1;
var interval = 1000/60;

//canvas/context
canvas = document.getElementById("canvas");
context = canvas.getContext("2d")

// Paddle dimentions
player1 = new GameObject();
player1.x = 15;
player1.y = canvas.height/2;
player1.height = 120;
player1.width = 18;
player1.color = "Red";

player1.vx = 0;
player1.vy = 0;
timer = setInterval(animate, interval)

//function for animating
function animate(){

    //clear canvas here
    context.clearRect(0,0,canvas.width, canvas.height);	

    if(w){

        //console.log("moving up")
        player1.y += -3;
    }
    if(s){

        //console.log("moving down")
        player1.y += 3;
    }

    //Collision for P1 ------------------>>>>
    if(player1.y < 60){

        player1.y = 60;

    }
    if(player1.y + 60 > canvas.height){

        player1.y = canvas.height - 60;

    }
    //----------------------------------->>>>

	//update the canvas here
	player1.drawRect();
}