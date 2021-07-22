function go()
{
	let name1 = document.getElementById('username1').value;
	let name2 = document.getElementById('username2').value;
	if(name1==""||name2=="")
	{
		alert("Enter the name");
	}
	else if(name1==name2)
	{
		alert("Enter different name");
	}
	else
	{	
		
		document.location.href="main.html?player1="+name1+"&player2="+name2+"&mod=multi&val=x";
	}
	
}
