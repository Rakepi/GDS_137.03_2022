var d = false;
var a = false;
//Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e)
{
	if(e.keyCode == 68)
	{
		d = true;
	}
	if(e.keyCode == 65)
	{
		a = true;
	}
}
function release(e)
{
	if(e.keyCode == 68)
	{
		d = false;
	}
	if(e.keyCode == 65)
	{
		a = false;
	}
}