
var canvas;
var context;
var timer;
var player1;
var Ball;
var Net;
var interval = 1000/60;

//canvas/context
canvas = document.getElementById("canvas");
context = canvas.getContext("2d")
//Player 1 ----------------------------
player1 = new GameObject();
player1.x = 15;
player1.y = canvas.height/2;
player1.height = 120;
player1.width = 16;
player1.color = "Pink";
player1.vx = 0;
player1.vy = 0;
//-------------------------------------

//Ball --------------------------------
Ball = new GameObject();
Ball.x = canvas.width/2;
Ball.y = canvas.height/2;
Ball.height = 30;
Ball.width = 30;
Ball.color = "coral";
Ball.vx = -4;
Ball.vy = 0;
//-------------------------------------

//Net ---------------------------------
Net = new GameObject();
Net.x = canvas.width/2;
Net.y = canvas.height/2;
Net.height = canvas.height;
Net.width = 10;
Net.color = "red";
//-------------------------------------

timer = setInterval(animate, interval)

//function for animating
function animate(){

    //clear canvas here
    context.clearRect(0,0,canvas.width, canvas.height);	
    // Player 1 Move -------------------->>>>
    if(w){

        //console.log("moving up") ---
        player1.y += -3;
    }
    if(s){

        //console.log("moving down") ---
        player1.y += 3;
    }
    //----------------------------------->>>>

    //Collision for P1 ------------------>>>>
    if(player1.y < 60){

	    player1.y = 60;

    }
    if(player1.y + 60 > canvas.height){

	    player1.y = canvas.height - 60;

    }
    //----------------------------------->>>>

    //Ball movement ------------------------->>>>
    Ball.move();
    if(Ball.x > canvas.width - Ball.width/2){

        Ball.vx = -Ball.vx;

    }
    
    if(Ball.y > canvas.height - Ball.height/2){

        Ball.vy = -Ball.vy;
        
    }
    if(Ball.y < 0 + Ball.height/2){

        Ball.vy = -Ball.vy;
       
    }
    //Ball & Paddle Collision ---
    if(Ball.hitTestObject(player1)){

        Ball.vx = -Ball.vx;
        Ball.x = player1.x + player1.width/2 + Ball.width/2;
        if(Ball.y > player1.y - player1.height/3){
            Ball.vy += 5;
        }
        if(Ball.y < player1.y + player1.height/6){
            Ball.vy += -5;
        }
    }

    

    //Loops ball back to Screen center ->>>>
    if(Ball.x < 0){

        Ball.x = canvas.width/2;
        Ball.y = canvas.height/2;
        Ball.vx = -3;
        Ball.vy = 0;
        

    }
    //----------------------------------->>>>

    ///update the canvas (Draw)
    Net.drawRect();
    player1.drawRect();
    Ball.drawCircle();
    
}