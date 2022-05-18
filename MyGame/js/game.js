
// Designer/Dev - Nathan Price (...STARVATION MAZE GAME JS FILE...)
var canvas;
var context;
var timer;
var interval = 1000/60;
// -----------------------------------
var hTimer = 3000/30;
var player1;
var food;
var hunger = 100;

//canvas/context
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//Hunger bar --------------------------
hBar = new GameObject();
hBar.x = 230;
hBar.y = 30;
hBar.height = 20;
hBar.width = 400;
hBar.color = "Red";
// ------------------------------------
barBack = new GameObject();
barBack.x = hBar.x;
barBack.y = hBar.y;
barBack.height = 30;
barBack.width = 420;
barBack.color = "black";
//Player 1 ------------- Playable Character....
player1 = new GameObject();
player1.x = 150;
player1.y = canvas.height/2;
player1.height = 100;
player1.width = 100;
player1.color = "Purple";
player1.vx = 0;
player1.vy = 0;
//---------------------- Enemy follow distance
player = new GameObject();
player.x = player1.x;
player.y = player1.y;
player.height = 300;
player.width = 300;
follower = new GameObject();
//Food --------------------------------
food = new GameObject();
food.x = canvas.width/2 + 20;
food.y = canvas.height/2;
food.height = 30;
food.width = 30;
food.color = "coral";
// Death Screen ------------- Game state end 
death = new GameObject();
death.x = canvas.width/2;
death.y = canvas.height/2;
death.width = canvas.width;
death.height = canvas.height;
death.color = "red";
//Enemies-------------------------------
enemy = new GameObject();
enemy.x = canvas.width - 200;
enemy.y = canvas.height/2;
enemy.width = 60;
enemy.height = 60;
enemy.color = "red";
follower = enemy;

//--------------------------------------
 timer = setInterval(animate, interval);


//MAIN function ------------------------
function animate(){
    //clear canvas here
    context.clearRect(0,0,canvas.width, canvas.height);	
    
    // Player Movement -------------------->>>>
    if(d){
        player1.x += 3;
        //console.log("moving left") ---
        player.x = player1.x;
    }
    if(a){
        player1.x += -3;
        //console.log("moving left") ---
        player.x = player1.x;
    }
    if(w){
        player1.y += -3;
        //console.log("moving left") --- 
        player.y = player1.y;
    }
    if(s){
        player1.y += 3;
        //console.log("moving left") ---
        player.y = player1.y;  
    }

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

    //Enemy Follow ----------------------
    if(player.hitTestObject(enemy))
    {
        var dx = player1.x - follower.x;
	    var dy = player1.y - follower.y;
	    var dist = Math.sqrt(dx * dx + dy * dy)/*Math.sqrt(dx * dx + dy * dy)*/;
	    var radians = Math.atan2(dy, dx);
	
	    follower.vx = Math.cos(radians)*follower.force;
	    follower.vy = Math.sin(radians)*follower.force;
	    follower.x += follower.vx * 2;
	    follower.y += follower.vy * 2;
    }
    //Enemies make hunger stronger when they attack you cause u to starve faster...
    if(player1.hitTestObject(enemy) && hTimer == 3000/30)
    {
        //hTimer --; works with and without this... but keep it incase needed later.
        hunger -= 5;
        hBar.width -= 20;
        console.log("Pow bang wapow")
    } 
    //Starvation/Hungertimer ---------------
    hTimer --;
    if(hTimer == 0){
        hTimer = 3000/30;
        hunger -= 5;
        hBar.width -= 20;
        console.log(hBar.width);
    }

    if(hunger < 0)hunger = 0;
    if(hBar.width < 0)hBar.width = 0;

    //food collision -----------------------
    if(player1.hitTestObject(food)){
        hBar.width += 20;
        hunger += 10;
        food.x += 100;

        if(hunger > 100)hunger = 100;
        if(hBar.width > 400)hBar.width = 400;
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
    //Draw here ------------------------>>>>
    follower.drawCircle();
    player1.drawRect();
    enemy.drawRect();
    barBack.drawRect();
    //---------------
    hBar.drawRect();
    food.drawCircle();

    //drawing of the starvation death screen here...
    if(hBar.width <= 0)
    {
        death.drawRect();
        context.font = "bold 30px Arial";
		context.textAlign = "center";
		context.fillStyle = "black";
		context.fillText("Starvation!!!", canvas.width/2, canvas.height/2);
        context.fillText("X_X", canvas.width/2, canvas.height/2 + 45);
    }
}
