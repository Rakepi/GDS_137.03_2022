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
player.vy = -4;

robo = new Player();
robo.vx = 2;
robo.vy = -2;

P3 = new Player();
P3.vx = -3;
P3.vy = 3;
timer = setInterval(animate, interval)

//function for animating
function animate(){

    //clear canvas here
    context.clearRect(0,0,canvas.width, canvas.height);	
    
    player.move();
    robo.move();
    P3.move();

    //colission --->>
    if(player.x > canvas.width - player.width/2){
        player.vx = -player.vx;
        player.color = "skyblue";   
    }
    if(player.x < 0 + player.width/2){
        player.vx = -player.vx;
        player.color = "lavender";   
    }
    //collision top and bottom --->>
    if(player.y > canvas.height - player.height/2){
        player.vy = -player.vy;
        player.color = "yellow";   
    }
    if(player.y < 0 + player.height/2){
        player.vy = -player.vy;
        player.color = "lime";
    }

    //P2 (robo) collision --->>
    if(robo.x > canvas.width - robo.width/2){
        robo.vx = -robo.vx;
        robo.color = "blue"   
    }
    if(robo.x < 0 + robo.width/2){
        robo.vx = -robo.vx;
        robo.color = "orange"   
    }
    //collision top and bottom --->>
    if(robo.y > canvas.height - robo.height/2){
        robo.vy = -robo.vy;
        robo.color = "coral"   
    }
    if(robo.y < 0 + robo.height/2){
        robo.vy = -robo.vy;
        robo.color = "red"
    }

    //P3 collision --->>
    if(P3.x > canvas.width - P3.width/2){
        P3.vx = -P3.vx;
        P3.color = "red";
    }
    if(P3.x < 0 + P3.width/2){
        P3.vx = -P3.vx;
        P3.color = "violet";
    }
    //collision top and bottom --->>
    if(P3.y > canvas.height - P3.height/2){

        P3.vy = -P3.vy;
        P3.color = "pink";
    }
    if(P3.y < 0 + P3.height/2){

        P3.vy = -P3.vy;
        P3.color = "teal";
       
    }

	//draw on/update the canvas here
    player.draw();
    robo.draw();
    P3.draw();

    
}