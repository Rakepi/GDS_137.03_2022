var canvas;
var context;
var timer;
var player1;
var food;
var interval = 1000/60;

//canvas/context
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//Player 1 ----------------------------
player1 = new GameObject();
player1.x = 150;
player1.y = canvas.height/2;
player1.height = 120;
player1.width = 120;
player1.color = "Purple";
player1.vx = 0;
player1.vy = 0;
//-------------------------------------

//Food --------------------------------
food = new GameObject();
food.x = canvas.width/2 + 20;
food.y = canvas.height/2;
food.height = 30;
food.width = 30;
food.color = "coral";
food.vx = 0;
food.vy = 0;
//-------------------------------------

timer = setInterval(animate, interval);

//function for animation
function animate(){

    //clear canvas here
    context.clearRect(0,0,canvas.width, canvas.height);	
    // Player 1 Move -------------------->>>>
    if(d){
        //console.log("moving up") ---
        player1.x += 3;
    }
    if(a){
        //console.log("moving down") ---
        player1.x += -3;
    }
    //----------------------------------->>>>

    //Wall Collision for P1 ------------------>>>>
    if(player1.x < 0 + 60){

	    player1.x = 60;

    }
    if(player1.x + 60 > canvas.width){

	    player1.x = canvas.width - 60;
    }
    //----------------------------------->>>


    //food collision
   
    if(player1.hitTestObject(food)){
        
      food.x += 10; 
   }
    //Loops ball back to Screen center ->>>>
    if(food.x < 0){

        food.x = canvas.width/2 + 15;
        food.y = canvas.height/2;
    }
    if(food.x > canvas.width){

        food.x = 15;
        food.y = canvas.height/2;
    }
    //----------------------------------->>>>

    player1.drawRect();
    food.drawCircle();
}
