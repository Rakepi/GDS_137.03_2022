	//----------------------------------------------------------Instructions------------------------------------------------
	//---------------------In this assignment you will draw multiple squares on the screen in random locations--------------
	//---------------------First you will create an array of particles. Then you will move and draw them.-------------------
	//---------------------Follow the comments below to complete this assignment--------------------------------------------
var canvas;
var context;
var timer;
var interval;
var player;



function randNum(maxLimit = canvas.width && canvas.height - 1)
{
	let rand = Math.random() * maxLimit;
	//console. log(rand);
	rand = Math. floor(rand);
	return rand;
}


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");		
	
	//----------------------------------------------Step 1: Create particles------------------------------------------------
	//Declare an "amount" variable and set it to 12
	var amount = 12;
	var particals = [];
	var angle = 90;
	var y = canvas.height - 200;
	var vy = 2;
	var vx = 1;
	//Create an array called "particles" to store the particles

	for(i = 0; i < amount; i++)
	{
		particals[i] = new GameObject();
		particals[i].color = "red"
		angle += 90;
		rad = angle * Math.PI/180;
		particals[i].x = randNum();
		particals[i].y = randNum();
		y += -100;
		particals[i].vx = 1;
		particals[i].vy = 2;
	}
	
	console.log(particals);
	//Create a for loop that loops the number of times specified by the "amount" variable

		//Within the for loop do the following: 
		//	1.Instantiate new GameObject and store it in each index of the particles array
		//	2.set each particle's x property to a random number from 0 - the canvas.width 
		//	3.set each particle's y property to a random number from 0 - the canvas.height
	
	//---------------------------------------------------------------------------------------------------------------
	
	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
		
	//--------------------------------------Step 2: Draw Particles---------------------------------------------------------
	//DrawRect()for each particle using a for loop.
	//The for loop should use the particles.length for its limit
	for(i = 0; i < particals.length; i++)
	{	
		if(particals[i].y > canvas.height - particals[i].height/2)
		{
			particals[i].vy += -vy;
		}
		if(particals[i].y < 0 + particals[i].height/2)
		{
			particals[i].vy += -vy;
		}
		if(particals[i].x > canvas.width - particals[i].width/2)
		{
			particals[i].vx += -vx;

		}
		if(particals[i].x < 0 + particals[i].width/2 )
		{
			particals[i].vx += -vx;
				
		}
		particals[i].drawRect();
		particals[i].move();
	}
	
	
	//----------------------------------------------------------------------------------------------------------------------
}

//-----------------------------------------------FINAL STEP: View Particles-------------------------------------------------
//Refresh your program a few times to see the particles spawn in random locations!