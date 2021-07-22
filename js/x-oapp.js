
function x()
{
	let name = document.getElementById('playername').value;
	if(name=="")
	{
		alert("Enter your name");
	}
	else
	{
		document.location.href="main.html?mod=comp&val=x&name="+name;
	}
}
function o()
{
	let name = document.getElementById('playername').value;
	if(name=="")
	{
		alert("Enter your name");
	}
	else
	{
		document.location.href="main.html?mod=comp&val=o&name="+name;
	}
}