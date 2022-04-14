var canvas;
var context;
var timer;
var interval = 1000/60;

var hTimer = 3000/30;
var player1;
var food;
var hunger = 100;

//canvas/context
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//Hunger bar --------------------------
hBar = new GameObject();
hBar.x = 120;
hBar.y = 30;
hBar.height = 20;
hBar.width = 200;
hBar.color = "Red";
//Player 1 ----------------------------
player1 = new GameObject();
player1.x = 150;
player1.y = canvas.height/2;
player1.height = 120;
player1.width = 120;
player1.color = "Purple";
player1.vx = 0;
player1.vy = 0;
//Food --------------------------------
food = new GameObject();
food.x = canvas.width/2 + 20;
food.y = canvas.height/2;
food.height = 30;
food.width = 30;
food.color = "coral";
//-------------------------------------

timer = setInterval(animate, interval);
//MAIN function -----------------------
function animate(){
    //clear canvas here
    context.clearRect(0,0,canvas.width, canvas.height);	
    
    // Player 1 Move -------------------->>>>
    if(d)player1.x += 3;
        //console.log("moving right") ---
    if(a)player1.x += -3;
        //console.log("moving left") ---
    if(w)player1.y += -3;
        //console.log("moving up") ---
    if(s)player1.y += 3;
        //console.log("moving down") ---
    
    //----------------------------------->>>>
    //Wall Collision for PLAYER ------------------>>>>
    if(player1.x < 0 + 60){

	    player1.x = 60;
    }
    if(player1.y < 0 + 60){

        player1.y = 60;
    }
    if(player1.x + 60 > canvas.width){

	    player1.x = canvas.width - 60;
    }
    if(player1.y + 60 > canvas.height){

        player1.y = canvas.height - 60;
    }
    //----------------------------------->>>
    //Starvation/Hungertimer ---------------
    hTimer --;
    if(hTimer == 0){
        hTimer = 3000/30;
        hunger -= 10;
        hBar.width -= 20;
        console.log('count down');
    }
    if(hunger < 0)hunger = 0;
    if(hBar.width < 0)hBar.width = 0;

    //food collision -----------------------
    
    if(player1.hitTestObject(food)){

        hBar.width += 20;
        hunger += 10;
        food.x += 100;

        if(hunger > 100)hunger = 100;
        if(hBar.width > 200)hBar.width = 200;
        console.log('YUM YUM')
        
    }
    //--------------------------------------
    //Loops food back to Screen center ->>>>
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
    hBar.drawRect();
    food.drawCircle();
}
