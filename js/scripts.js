function check()
{
	Name=document.getElementById("NAME");
	Email=document.getElementById("EMAIL");
	Contact=document.getElementById("CONTACT");
	Message=document.getElementById("MESSAGE");
	if(Name.value=="")
	{
		alert("Please fill Name");
	}
	else if(Email.value=="")
	{
		alert("Please fill Email");
	}
	else if(Contact.value=="")
	{
		alert("Please fill Contact");
	}
	else if(Message.value=="")
	{
		alert("Please fill Message");
	}
	
}

function checkWhatHide()
{
HourRate=document.getElementById("HourRate");	
HourRate.style="display:none";
}
function checkWhatShow()
{
HourRate=document.getElementById("HourRate");	
HourRate.style="display:block";
}