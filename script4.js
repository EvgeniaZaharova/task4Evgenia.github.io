function getRandomInt(min,max)
{	
	return (Math.floor(Math.random()*(parseFloat(max)-parseFloat(min)))+parseFloat(min));
}


	var k=[];
	
function getArray(n) 
{
	for(var i=0; i<n*n; i++) 
	{
		k[i]=(getRandomInt(document.getElementById('min').value,document.getElementById('max').value));
	}
	return k;

}

function getResultArray(mass) 
{
	var n = parseFloat(document.getElementById('N').value);
	var help;
	for(var i=0;i<n*n;i++)
	{
		for(var j=0;j<n*n-1;j++) 
		{
			if(mass[j]<=mass[j+1]) 
			{
				help = mass[j];
				mass[j] = mass[j+1];
				mass[j+1]=help;
			}
		}
	}
	return mass;
}

function out()
{
	var mashelp=[];
	var helps=parseFloat(document.getElementById('N').value);
	k=getArray(helps);
	k=getResultArray(k);
	var index=0;
	var help=0;
		for(var i=0; i<helps; i++) 
		{
			mashelp[i]=[];
			if(help==0) 
			{
				for(var j=0; j<helps; j++) 
				{
					mashelp[i][j] = k[index];
					index++;
				}
			help=1;	
			}
			else
			{
				for(var j2=helps-1; j2>=0; j2--) 
				{
					mashelp[i][j2] = k[index];
					index++;
				}
			help=0;	
			}
		}
	var res="<table border='0'><tr>";
		for (var i = 0; i <helps; i++)
		{
			for (var j = 0; j <helps; j++)	
			{
				res =res+"<td>";
				res = res + mashelp[i][j];
				res = res + "</td>";
			}
			res=res+"</tr>"	
		}
	res = res + "</table>";	
	document.getElementById('otv').innerHTML = res;
}


  

