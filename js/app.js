let urlParams = new URLSearchParams(window.location.search);

let mode = urlParams.get('mod');
let val= urlParams.get('val');

let button=document.getElementsByClassName('btn');
let image=document.getElementsByTagName('img');
let dumval=val;

if((mode == "comp") && (val=="o"))
{
	let num = Math.floor(Math.random() * 9);
	image[num].src="image/x-icon.png";		
	button[num].disabled=true;
	button[num].value="x";
	image[num].style.zIndex="1";
	image[num].style.opacity="1";
}
function clicking(id)
{
	image[id].style.opacity="1";
	if(mode=="multi")
	{
		if(val=="x")
		{
			let value=val;
			image[id].src="image/x-icon.png";
			
			val="o";
			button[id].disabled=true;
			button[id].value="x";
			result();
		}
		else if(val=="o")
		{
			let value=val;
			image[id].src="image/o-icon.png";
			val="x";
			button[id].disabled=true;
			button[id].value="o";
			result();
		}
		image[id].style.zIndex="1";
		
	}
	else if(mode=="comp")
	{
		if(val=="x")
		{		
			image[id].style.opacity="1";
			image[id].style.zIndex="1";
			image[id].src="image/x-icon.png";
			button[id].disabled=true;
			button[id].value="x";

			document.getElementById('main-container').style.pointerEvents="none";
			setTimeout(function() {
				comp(id);
			},1000);
			
		}
		else if(val=="o")
		{
			let value=val;
			image[id].src="image/o-icon.png";
			button[id].disabled=true;
			button[id].value="o";
			image[id].style.zIndex="1";
			result();
			if(over("o"))
			{
				return;
			}
			let count=0;
			for(let i=0;i<9;i++)
			{
				if(button[i].value=='x'||button[i].value=='o')
				{
					count++;
				}	
			}
			document.getElementById('main-container').style.pointerEvents="none";
			setTimeout(function() {
			
				if(count<9)
				{
					while(true)
					{
						let num = Math.floor(Math.random() * 9);
					
						if(button[num].value!="o" && button[num].value!="x")
						{
						
							image[num].src="image/x-icon.png";
							button[num].disabled=true;
							button[num].value="x";			
							image[num].style.zIndex="1";			
							document.getElementById('main-container').style.pointerEvents="auto";
							break;			
						}
					}		
				}
				else
				{
					result();
				}
		
				result();	
			},1000);
		}
	}
}

function result()
{
	let count=0;
	for(let i=0;i<9;i++)
	{
		if(button[i].value=='x'||button[i].value=='o')
		{
			count++;
		}
				
	}
	if((over("x")&&(val=="o")&&(mode=="comp"))||(over("o")&&(val=="x")&&(mode=="comp")))
	{
		let l = document.getElementById("lab");
		l.innerText=" COMPUTER WINS";
		win();
		stop();
	}
	else if(over("x"))
	{
		if(mode=="multi")
		{
			let n = urlParams.get('player1');
			n = n.toUpperCase();
			let l = document.getElementById("lab");
			l.innerText= n +" WINS";
			win();
			stop();
		}
		else if((mode=="comp")&&val=="x")
		{
			let n = urlParams.get('name');
			n = n.toUpperCase();
			let l = document.getElementById("lab");
			l.innerText= n +" WINS";
			win();
			stop();
		}
		
		
	}
	else if(over("o"))
	{
		if(mode=="multi")
		{
			let n2 = urlParams.get('player2');
			n2 = n2.toUpperCase();
			let l = document.getElementById("lab");
			l.innerText= n2 +" WINS";
			win();
			stop();
		}
		else if((mode=="comp")&&val=="o")
		{
			let n = urlParams.get('name');
			n = n.toUpperCase();
			let l = document.getElementById("lab");
			l.innerText= n +" WINS";
			win();
			stop();
		}
		
	}
	else if(!over("x")&&!over("o")&&(count==9))
	{
		let l = document.getElementById("lab");
		l.innerText= "TIE";
		stop();
	}
		
}
function stop()
{
	for(let i=0;i<9;i++)
	{
		if(button[i].value!="o" && button[i].value!="x")
		{
			button[i].disabled=true;
			image[i].style.visibility="hidden";
		}
	}
}
let c=0;
function over(x)
{
	if(button[0].value==x && button[1].value==x && button[2].value==x)
	{
		c=1;
		return true;
		return;
		
	}
	else if(button[0].value==x && button[3].value==x && button[6].value==x)
	{
		c=2;
		return true;
		return;
		
	}
	else if(button[3].value==x && button[4].value==x && button[5].value==x)
	{
		c=3;
		return true;
		return;
		
	}
	else if(button[6].value==x && button[7].value==x && button[8].value==x)
	{
		c=4;
		return true;
		return;
		
	}
	else if(button[1].value==x && button[4].value==x && button[7].value==x)
	{
		c=5;
		return true;
		return;
		
	}
	else if(button[2].value==x && button[5].value==x && button[8].value==x)
	{
		c=6;
		return true;
		return;
	}	
	else if(button[0].value==x && button[4].value==x && button[8].value==x)
	{
		c=7;
		return true;
		return;

	}	
	else if(button[2].value==x && button[4].value==x && button[6].value==x)
	{
		c=8;
		return true;
		return;

	}
	else
	{
		return false;
	}
}
function win()
{
	if(c==1)
	{
		button[0].style.backgroundColor="50C878";
		button[1].style.backgroundColor="50C878";
		button[2].style.backgroundColor="50C878";
	}
	else if(c==2)
	{
		button[0].style.backgroundColor="50C878";
		button[3].style.backgroundColor="50C878";
		button[6].style.backgroundColor="50C878";
	}
	else if(c==3)
	{
		button[3].style.backgroundColor="50C878";
		button[4].style.backgroundColor="50C878";
		button[5].style.backgroundColor="50C878";
	}
	else if(c==4)
	{
		button[6].style.backgroundColor="50C878";
		button[7].style.backgroundColor="50C878";
		button[8].style.backgroundColor="50C878";
	}
	else if(c==5)
	{
		button[1].style.backgroundColor="50C878";
		button[4].style.backgroundColor="50C878";
		button[7].style.backgroundColor="50C878";
	}
	else if(c==6)
	{
		button[2].style.backgroundColor="50C878";
		button[5].style.backgroundColor="50C878";
		button[8].style.backgroundColor="50C878";
	}
	else if(c==7)
	{
		button[0].style.backgroundColor="50C878";
		button[4].style.backgroundColor="50C878";
		button[8].style.backgroundColor="50C878";
	}
	else if(c==8)
	{
		button[2].style.backgroundColor="50C878";
		button[4].style.backgroundColor="50C878";
		button[6].style.backgroundColor="50C878";
	}
}

function restarted()
{
	
	val=dumval;
	let l = document.getElementById("lab");
	l.innerHTML= "";
	for(var i=0;i<9;i++)
	{
		button[i].value="no";
		button[i].disabled=false;
		image[i].style.zIndex="";
		button[i].style.backgroundColor="#0B0C10";
		image[i].style.visibility = "visible";
	}

	if((mode == "comp") && (val=="o"))
	{
		let num = Math.floor(Math.random() * 9);
		image[num].src="image/x-icon.png";		
		button[num].disabled=true;
		button[num].value="x";
		image[num].style.zIndex="1";
	}
}

function comp(id)
{
	let value=val;
	result();
	let count=0;
	for(let i=0;i<9;i++)
	{
		if(button[i].value=='x'||button[i].value=='o')
		{
			count++;
		}
					
	}
	document.getElementById('main-container').style.pointerEvents="auto";
	if(count<9)
	{
		while(true)
		{
			let num = Math.floor(Math.random() * 9);

			if(button[num].value!="o" && button[num].value!="x")
			{
				
				image[num].src="image/o-icon.png";
				button[num].disabled=true;
				button[num].value="o";			
				image[num].style.zIndex="1";
				break;			
			}
		}
	}
	else
	{
		result();
	}
		
	result();	
}

function hovering(id,event)
{
	if(button[id].value!="o" && button[id].value!="x")
	{
		if(event=="leave")
		{
			image[id].style.zIndex="-1";
			image[id].style.opacity="1";
			return;
		}
		if(val=="x")
		{
			image[id].src="image/x-icon.png";
			
		}
		else if(val=="o")
		{
			image[id].src="image/o-icon.png";
			
		}
		image[id].style.zIndex="1";
		image[id].style.opacity="0.4";
	}

}