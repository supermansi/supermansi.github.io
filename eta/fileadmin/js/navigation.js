function flyout(obj)
{
	for(i = 0; i < obj.childNodes.length; i++)
	{
		if(obj.childNodes[i].tagName == "UL")
		{
			obj.childNodes[i].style.display = "block";
			return;
		}
	}
}
function flyin(obj)
{
	for(i = 0; i < obj.childNodes.length; i++)
	{
		if(obj.childNodes[i].tagName == "UL")
		{
			obj.childNodes[i].style.display = "none";
			return;
		}
	}
}

function flyout2(obj)
{
	
	for(i = 0; i < obj.childNodes.length; i++)
	{
		if(obj.childNodes[i].tagName == "UL")
		{
			//alert("hallo"+i);
			obj.childNodes[i].style.display = "block";
			return;
		}
	}
}