function random() 
{
    var min = parseInt(document.getElementById('min').value);
	var max = parseInt(document.getElementById('max').value);
    let c = (Math.floor(Math.random() * (max - min)) + min);
    return c;
}

function program()
{
    var arr = new Array();
    for(var i=0; i<8; i++)
    {
      arr[i] = new Array();
    }
    for(var i=0; i<8; i++)
    {
        for(var j=0; j<8; j++)
        {        
            arr[i][j]=random();
        }
    }
    let str=' ';
    document.getElementById("st").innerHTML ='';
    for(let i = 0; i < 8; i ++)
    {
        for(let j = 0; j < 8; j ++)
        {
            if (arr[i][j] >= 0)
			{
				str+='+'+arr[i][j] + ' ' + ' ';
			}
            else str+=arr[i][j] + ' ';
        }
        document.getElementById("st").innerText +=str;
        document.getElementById("st").innerText += "\n"
        str='';
    }
    document.getElementById("st").innerText += "\n"
    let check=Number ;
    let checked=Number;
    let itog=Number;
    checked=0;
    for(var i=0; i<8; i++)
	{
        for(var j=0; j<8; j++)
		{
            if(arr[j][i]>0)
            {
                check=check+1;
            }
        }
        if (checked<check){checked=check; itog = i;}
        check=0;
    }
    for(var i=0; i<8; i++)
	{
        check=arr[i][i];
        arr[i][i]=arr[i][itog];
        arr[i][itog]=check;
    }
   
    
    for(let i = 0; i < 8; i ++)
    {
        for(let j = 0; j < 8; j ++)
        {
            if (arr[i][j] >= 0)
			{
				str+='+'+arr[i][j] + ' ';
			}
            else str+=arr[i][j] + ' ';
            
        }
        document.getElementById("st").innerText +=str;
        document.getElementById("st").innerText += "\n"
        str='';
    }
}


function user(){
    var arr = new Array();
    for(var i=0; i<8; i++)
    {
      arr[i] = new Array();
    }
    for(var i=0; i<8; i++)
	{
        for(var j=0; j<8; j++)
		{
            let answer=prompt("Введите элемент массива:");
            if ((answer*0!=0)||(answer*2==0))
            {
                alert("Ошибка!");
                return;
            }
            else
            {
                arr[i][j]=answer;
            }
        }
    }
    
    let check=Number ;
    let checked=Number;
    let itog=Number;
    checked=0;
    for(var i=0; i<8; i++)
	{
        for(var j=0; j<8; j++)
		{
            if(arr[j][i]>0)
            {
                check=check+1;
            }
        }
        if (checked<check)
		{
			checked=check;
			itog = i;
		}
        check=0;
    }
    for(var i=0; i<8; i++)
	{
        check=arr[i][i];
        arr[i][i]=arr[i][itog];
        arr[i][itog]=check;
    }
    for(let i = 0; i < 8; i ++)
    {
        for(let j = 0; j < 8; j ++)
        {
            document.getElementById("st").innerHTML +=arr[i][j]; 
        }
        document.getElementById("st").innerText += "\n"
    }
}

    
    
  