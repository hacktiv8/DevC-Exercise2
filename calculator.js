var display = document.formNilai.formTeks;
function btn(num)
{
	display.value += num;
}

function hitung() 
{
	display.value = eval(display.value);
}

function bcksp()
{
	display.value = display.value.substr(0,display.value.length-1);
}

function clr()
{
	display.value ="";
}
