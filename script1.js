function triS(form)
{
	var h = Number.parseInt(form.h.value);
	var a = Number.parseInt(form.a.value);
	if (h > 0 && a > 0)
	{
		alert("S△ = " + (h * a / 2));
	} 
	else 
	{
		alert("Ошибка!");
	}
}