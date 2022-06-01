var canvas;
var context;

// 1 second / FPS
var interval = 1000/60;

// Setup the Canvas
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

// Score
var score = 0;

// Player Variables & Settings
var player = new GameObject();
player.width = 50;
player.height = 50;
player.x = canvas.width / 2;
player.y = canvas.height - player.height;
player.color = "blue";

// Friction
frictionX = .85;
frictionY = .97;

// Set the Animation Timer
timer = setInterval(animate, interval);

// Particles Variables
var amount = 7;
var particles1 = [];
var particles2 = [];
var colors = ["red", "green"];

// Color Timer
var colorTimer;

// Particles
for(var i = 0; i < amount; i++)
{
    // Particles 1
    particles1[i] = new GameObject({width: 2, height: 2});
    particles1[i].color = "red";
    particles1[i].x = Math.random() * canvas.width;
    particles1[i].y = Math.random() * -canvas.height;
    particles1[i].vy = Math.random() * 10 + 5;
    particles1[i].width = 25;
    particles1[i].height = particles1[i].width;

    // Particles 2
    particles2[i] = new GameObject({width: 2, height: 2});
    particles2[i].color = "green";
    particles2[i].x = Math.random() * canvas.width;
    particles2[i].y = Math.random() * -canvas.height;
    particles2[i].vy = Math.random() * 10 + 5;
    particles2[i].width = 25;
    particles2[i].height = particles2[i].width;
}

function resetColor()
{
    player.color = "blue";
}

function animate()
{

    // Clear the Screen
    context.clearRect(0,0,canvas.width, canvas.height);

    // Move Player Left and Right
    if(a)
    {
        player.vx += player.ax * -player.force;
        console.log("here");
    }
    if(d)
    {
        player.vx += player.ax * player.force;
        console.log("there");
    }

    // Apply Friction
    player.vx *= frictionX;
    player.x += player.vx;
    player.y += player.vy;
    

    // Left Collision of Canvas
    if(player.x < 0 + player.width / 2)
    {
        player.x = 0 + player.width / 2;
        player.xv = 0;
    }
    // Right Collision of Canvas
    if(player.x > canvas.width - player.width / 2)
    {
        player.x = canvas.width - player.width / 2;
        player.xv = 0;
    }

    // Particles
    for(var p = 0; p < particles1.length; p++)
    {
        // Particles 1
        particles1[p].x += particles1[p].vx;
        particles1[p].y += particles1[p].vy;

        if(particles1[p].y > canvas.height)
        {
            particles1[p].y = 0;
        }

        // Particles 1 Collision
        if(particles1[p].hitTestObject(player))
        {
            clearTimeout(colorTimer);
            colorTimer = setTimeout(resetColor, 500);

            particles1[p].y = Math.random() -canvas.height;
            particles1[p].x = Math.random() * canvas.width;
            player.color = "green";
            score = 0;

            for(var i = 0; i < amount; i++)
            {
                particles1[i].y = Math.random() * -canvas.height;
                particles2[i].y = Math.random() * -canvas.height;
            }
        }

        // Particles 2
        particles2[p].x += particles2[p].vx;
        particles2[p].y += particles2[p].vy;

        if(particles2[p].y > canvas.height)
        {
            particles2[p].y = 0;
        }

        // Particles 2 Collision
        if(particles2[p].hitTestObject(player))
        {
            clearTimeout(colorTimer);
            colorTimer = setTimeout(resetColor, 500);

            particles2[p].y = Math.random() * -canvas.height;
            particles2[p].x = Math.random() * canvas.width;
            player.color = "red";

            
            score++;
        }

        particles1[p].drawRect();
        particles2[p].drawCircle();
    }

    // Draw Player
    player.drawRect();

    // Draw Scoreboard
    context.font = "30px Arial bold black";
    context.textAlign = "left";
    context.color = "#555555";
    context.fillText("Score:", 20, 30)
    context.fillText(score,105, 30);
}