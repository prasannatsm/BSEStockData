function Trim(s){
while((s.substring(0,1)==' ')||(s.substring(0,1)=='\n')||(s.substring(0,1)=='\r')){
s=s.substring(1,s.length)}
while((s.substring(s.length-1,s.length)==' ')||(s.substring(s.length-1,s.length)=='\n')||(s.substring(s.length-1,s.length)=='\r')){
s=s.substring(0,s.length-1)}
return s}

var submit=true;
function fmouseover(id)
{
	if(submit)
	{
		var imgPre="Img";
		id=id.substring(3);
		curImg=id;
		for(var i=1;i<=curImg;i++)
		{
			var str=document.getElementById(imgPre+i).src;
			var mytool_array1=str.split("/");
			if(mytool_array1[mytool_array1.length-1]=="star.JPG")
			{
				document.getElementById(imgPre+i).src="../../../../../../Images/orange.JPG";
			}
		}
	}
}
function fmouseout(id)
{
	if(submit)
	{
		var imgPre="Img";
		id=id.substring(3);
		curImg=id;
		for(var i=1;i<=curImg;i++)
		{
			var str=document.getElementById(imgPre+i).src;
			var mytool_array=str.split("/");
			if(mytool_array[mytool_array.length-1]=="orange.JPG")
			{
				document.getElementById(imgPre+i).src="../../../../../../Images/star.JPG";
			}
		}
	}
}
function fmouseclick(id)
{
	if(submit)
	{
		var str=document.getElementById("Img1").src;
		var mytool_array=str.split("/");
		if(mytool_array[mytool_array.length-1]!="blue.JPG")
		{
			fshowdiv("show");
		}
		id=id.substring(3);
		curImg=id;
		for(var i=1;i<=curImg;i++)
		{
			document.getElementById("Img"+i).src="../../../../../../Images/blue.JPG";
		}
	}
}
function fshowdiv(id) 
{  
	document.getElementById(id).style.display = '';
}
function fhidediv(id) 
{
	document.getElementById(id).style.display = 'none';
	for(var i=1;i<=5;i++)
	{
		document.getElementById("Img"+i).src="../../../../../../Images/star.JPG";
	}
	ota=document.getElementById("txtfeedback");
	ota.value="Give your suggestion or in case of technical problem, let us know with your email id.";
}
function submitres(id)
{
	if(submit)
	{
		str="";
		ota = document.getElementById("txtfeedback");
		if (ota.value == "Give your suggestion or in case of technical problem, let us know with your email id.") {
		    len = 0;
		    val = "";
		}
		else {
		    len = ota.value.length;
		    val = ota.value; 
		}
		
		//trim spaces
		val = Trim(val);
		if(len < 500)
		{
			if(document.getElementById("rbinfono").checked==true)
				str="0";
			else if(document.getElementById("rbinfoyes").checked==true)
				str="1";
			if(document.getElementById("rbuserno").checked==true)
				str+=":0";
			else if(document.getElementById("rbuseryes").checked==true)
				str+=":1";
			else
				str+=":";
			if(document.getElementById("rbloadno").checked==true)
				str+=":0";
			else if(document.getElementById("rbloadyes").checked==true)
				str+=":1";
			else
				str+=":";
			rating=0;
			for(var i=1;i<=5;i++)
			{
				var obj=document.getElementById("Img"+i);
				if(obj.src.indexOf("blue")>-1)
					rating++;
				obj.title="Thank you for your feedback";
			}
			str+=":"+rating;
			str+=":"+escape(val);
			if(rating==1 && val=="")
			        {
			            alert("Please enter your comments");   
			            return false;
			        }
			var requestUrl="http://www.bseindia.com/bseplus/Common/Ratings.aspx?s="+str+"&random="+Math.random();
			var xmlHttp1=ajaxFunction();
			xmlHttp1.open("GET",requestUrl,true);
			xmlHttp1.send(null);
			document.getElementById(id).style.display = 'none';
			submit=false;
		}
		else
		{
			alert("Comments should be less than 500 characters");
		}
	}
}
function ajaxFunction()
{
	var xmlHttp;
	try
	{
	xmlHttp=new XMLHttpRequest();
	}
	catch(e)
	{//IE
		try
		{
		xmlHttp=new ActiveXObject("Msxml2.XMLHTTP"); 
		}
		catch(e)
		{
			try
			{
				xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e)
			{
				alert("Your browser does not support AJAX!");
				return false;
			}
		}
	}
	return xmlHttp;
}
function stt()
{
	odl=document.getElementById("dl");
	odl.innerHTML="42";
	if(odl.style.display=="none")
		odl.style.display="";
	else
		odl.style.display="none";
}