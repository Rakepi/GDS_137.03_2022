// variables for objects within game...
var ball;
var player;
//other variables...
var canvas;
var context;
var timer;
var interval = 1000/60;
var force = 1;
var ax = .2;       // ask jay about
var vx = force;    // ask jay about
var vy = force;    // ask jay about 
var friction = .2; // ask jay about
var gravity = 5;
var score = 0;
// Canvas...
canvas = document.getElementById("canvas");
context = canvas.getContext("2d")

// ask how to draw a line because you forgot...

//Start of Game Code...
//Ball vvv...
ball = new GameObject();
ball.x = canvas.width/2;
ball.y = canvas.height/2;
ball.height = 40;
ball.width = 40;
ball.color = "Turquoise";
ball.vx = 0;
ball.vy += gravity;

//Player vvv...
player = new GameObject();
player.x = canvas.width/2;
player.y = 550;
player.height = 40;
player.width = 250;
player.color = "gold";
player.vx = 0;
player.vy = 0;

timer = setInterval(animate, interval)

function animate()
{
    //Canvas clear...
    context.clearRect(0,0,canvas.width, canvas.height);	
    // Player Move -------------------->>>>
    if(a)
    {
         //console.log("moving left")   ---
         vx += ax * force;
         player.x += -vx;
    }
    if(d)
    {
         //console.log("moving right ") ---
         vx += ax * force;
         player.x += vx;
    }
    if(lft)
    {
        //console.log("moving left")   ---
        vx += ax * force;
        player.x += -vx;
    }
    if(rght)
    {
        //console.log("moving right ") ---
        vx += ax * force;
        player.x += vx;
    }
     //Collision for Player -------------->>>>
    if(player.x < 125)
    {
         player.x = 125;
    }
     if(player.x + 125 > canvas.width)
    {
         player.x = canvas.width - 125;
    }
     //----------------------------------->>>>

     //Ball collision with canvas...
     if (ball.y + 20 > canvas.height)
    {
         ball.vy += -gravity;
    }
     if(ball.y - 20 < 0)
    {
         ball.vy += gravity;
    }
    if(ball.x + 20 > canvas.width)
    {
        ball.vx -= ball.vx;
    }
    if(ball.x - 20 < 0)
    {
        ball.vx += ball.vx;
    }

   


    // score card for # of bounces on paddle...
    context.font = "20px Georgia";
    context.fillText("Score:", 20, 30)
    context.fillText(score,85, 30);
    
    
    ball.move();
    //Draw here...
    ball.drawCircle();
    player.drawRect();
}

