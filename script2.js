function formula(form)
{
	var x = Number.parseInt(form.x.value);
	if (x > 0 && x <= 500)
	{
		var answer = 0;
		var i = 0;
		var s = (i*2+1)*x+i;
		while (s <= 500)
		{
			answer += s;
			i++;
			s = (i*2+1)*x+i;
		}
		alert(answer);
	}
	else
	{
		alert("Ошибка!");
	}
}