// controls for player (a , d)
var a = false;
var d = false;

//Event Listeners...
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions...
function press(e)
{
	if(e.keyCode == 65)
	{
		a = true;
	}
	if(e.keyCode == 68)
	{
		d = true;
	}
}
function release(e)
{
	if(e.keyCode == 65)
	{
		a = false;
	}
	if(e.keyCode == 68)
	{
		d = false;
	}
}