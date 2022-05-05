
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
hBar.x = 120;
hBar.y = 30;
hBar.height = 20;
hBar.width = 200;
hBar.color = "Red";
// ------------------------------------
barBack = new GameObject();
barBack.x = hBar.x;
barBack.y = hBar.y;
barBack.height = 30;
barBack.width = 220;
barBack.color = "black";
//Player 1 ----------------------------
player1 = new GameObject();
player1.x = 150;
player1.y = canvas.height/2;
player1.height = 100;
player1.width = 100;
player1.color = "Purple";
player1.vx = 0;
player1.vy = 0;
// ------------------------------------
player = new GameObject();
player.x = player1.x;
player.y = player1.y;
player.width = 75;
player.height = 75;
player.color = "violet";
//Food --------------------------------
food = new GameObject();
food.x = canvas.width/2 + 20;
food.y = canvas.height/2;
food.height = 30;
food.width = 30;
food.color = "coral";
// -------------------------------------
food1 = new GameObject();
food1.x = food.x - 8;
food1.y = food.y - 10;
food1.width = 10;
food1.height = 10;
food1.color = "green";
// Death Screen ------------------------
death = new GameObject();
death.x = canvas.width/2;
death.y = canvas.height/2;
death.width = canvas.width;
death.height = canvas.height;
death.color = "red";
//--------------------------------------
    timer = setInterval(animate, interval);
//MAIN function ------------------------
function animate(){
    //clear canvas here
    context.clearRect(0,0,canvas.width, canvas.height);	
    
    // Player Movement -------------------->>>>
    if(d)
    {
        player1.x += 3;
        //console.log("moving left") ---
        player.x += 3;  
    }
    if(a)
    {
        player1.x += -3;
        //console.log("moving left") ---
        player.x += -3;  
    }
    if(w)
    {
        player1.y += -3;
        //console.log("moving left") ---
        player.y += -3;  
    }
    if(s)
    {
        player1.y += 3;
        //console.log("moving left") ---
        player.y += 3;  
    }
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
    //--------------------------------------
    if(player.x < 0 + 60)
    {
	    player.x = 60;
    }
    if(player.y < 0 + 60)
    {
        player.y = 60;
    }
    if(player.x + 60 > canvas.width)
    {
	    player.x = canvas.width - 60;
    }
    if(player.y + 60 > canvas.height)
    {
        player.y = canvas.height - 60;
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
        food1.x += 100;

        if(hunger > 100)hunger = 100;
        if(hBar.width > 200)hBar.width = 200;
        console.log('YUM YUM')
        
    }
    //--------------------------------------
    //Loops food back to Screen center ->>>>
    if(food.x < 0){
        food.x = canvas.width/2 + 15;
        food.y = canvas.height/2;
        food1.x = food.x - 8;
        food1.y = food.y - 10;
    }
    if(food.x > canvas.width){
        food.x = 15;
        food.y = canvas.height/2;
        food1.x = food.x - 8;
        food1.y = food.y - 10;
    }
    //Draw here ------------------------>>>>
    barBack.drawRect();
    player1.drawRect();
    player.drawRect();
    hBar.drawRect();
    food.drawCircle();
    food1.drawCircle();

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
