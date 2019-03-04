function validate()
{	//getting all the values from textfields
var fname=document.getElementById("firstname").value;
var lname=document.getElementById("lastname").value;
var email=document.getElementById("email").value;
var pswd=document.getElementById("pswd").value;
var pin=document.getElementById("pincode").value;
var phone=document.getElementById("phone").value;
var loc =document.getElementById("location").value;
//checking for any empty field
if(fname=="")
{
	alert("fill out first name");
}
if(lname=="")
{
	alert("fill out last name");
}
if(email=="")
{
	alert("fill out email");
}
if(pswd=="")
{
	alert("fill password");
}
if(pin=="")
{
	alert("fill out pincode");
}
if(phone=="")
{
	alert("fill out phone number");
}
//all the regex to check if the ip is correct:
var phoneregex=/\d{10}/;
var pres=phoneregex.test(phone);
var fregex=/\D/;
var lregex=/\D/;
var pinregex=/[0-9]{3}-[0-9]{3}/;
var emailregex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var fres=fregex.test(fname);
var lres=lregex.test(lname);
var pinres=pinregex.test(pin);
var emailres=emailregex.test(email);
if (pres==false){alert("invalid phone number");}
else {alert("phone:"+phone);}
if (lres==false){alert("you sure this is your last name");}
else {alert("lname:"+lname);}
if (fres==false){alert("you sure this is your first name");}
else {alert("fanme:"+fname);}
if (emailres==false){alert("enter email properly");}
else {alert("email:"+email);}
if (pinres==false){alert("enter zipcode properly");}
else {alert("zipcode:"+pin);}
if(loc==0)
{
	alert("no locations selected?")
}
}
function checked(form){
	checkbox(form);
	radio(form);
}
//function for checkbox selected por not checking
function checkbox(form){
	if(form.paymode1.checked==false && form.paymode2.checked==false && form.paymode3.checked==false)
	{
		//console.log("hi");
		alert("atleast select one paymode!!!");
		return true;
	}
	return false;
}
//function for radio button selected por not checking
function radio(form)
{
	if(form.gender1.checked==false && form.gender2.checked==false && form.gender3.checked==false)
	{
		//console.log("hi");
		alert("atleast select one gender!!!");
		return true;
	}
	return false;
}
document.getElementById("submit").onclick = function(){validate()};
