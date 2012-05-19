var arrChkIds = new Array(0)
var arrPeers = new Array(0)
var arrSearchPeers = new Array(0)
var strTopTbl = ""
var scripcodeslb="";
function ajaxFunction()
{
    var xmlHttp
    try
    {
        xmlHttp = new XMLHttpRequest()
    }
    catch (e)
    {
        try
        {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP")
        }
        catch (e)
        {
            try
            {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")
            }
            catch (e)
            {
                alert("Your browser does not support AJAX!")
                return false
            } 
        } 
    }
    return xmlHttp
}
var a2
var PGType = 'Q'; var pgPart = "";
var peerString = "";
var c1 = 0;
var arrPGCd = new Array(0);
var lname
var autoref
var timer = ""
var preltp
function DisplayGlossary() { }
function startTimer()
{
    if (document.getElementById("dvimg"))
        document.getElementById("dvimg").innerHTML = "<img id='imgref' src='../../../../../../Images/ref2.gif' alt='' style='cursor:default'/>"
    autoref = 0
    refresh()
    if (timer != "")
    {
        clearInterval(timer)
        timer = ""
    }
    timer = setInterval("refresh()", 60000)
}
function refresh()
{
    if (autoref >= 1)
    {
        document.getElementById("dvimg").innerHTML = "<img id='imgref' src='../../../../../../Images/ref1.gif' alt='' onclick=\javascript:startTimer();\ onmousedown=javascript:mdown(this.id); onmouseup=javascript:mup(this.id); style='cursor:pointer;'/>"
        clearInterval(timer)
        timer = ""
    }
    else
    {
       HideDiv()

	var aa = '11' 
 	url = location.href
		
   	 if (url.indexOf('=') == -1)
   	 {
       
        var a = url.split('/')
	
       if (a.length > 1)
		{
        	
			aa = a[6]
			bb = a[10]

		}

    }
 

	if (aa == 'Derivatives')
	{
		
	fSetTab('tab5')


	  dispSetPageDV(bb,'1')


	

	}
	else
	{
 
      	 GetPage('tab1')


	}
        autoref++
		setTimeout('document.getElementById("tdiads").innerHTML = document.getElementById("dviads").innerHTML',2000);
    } 
}
function resetltpcol()
{
    obj = document.getElementById("dvltp")
    obj.style.backgroundColor = ""
    //resetMdPrice()
}
function GetPage(tabid, sPF)
{//debugger;

	  
    url = location.href
    if (url.indexOf('=') == -1)
    {
        EnableTabs()
        document.getElementById("dvError").style.display = "none"
        var a = url.split('/')
        a1 = a[0]
        a2 = a[9]
        if (document.getElementById("dvcnt") != null)
            document.getElementById("dvcnt").style.display = "block"
        if (document.getElementById("dvcnt01") != null)
            document.getElementById("dvcnt01").style.display = "none"
        if (document.getElementById("dvMore") != null)
            document.getElementById("dvMore").style.display = "none"
        if (tabid == "tab3")
        {
            DispPeerGroup(a2, PGType, 1)
            fSetTab("tab3")
            document.getElementById("dvError").style.display = "none"
        }
        else if (tabid == "tab4")
        {
            DispCharting()
            fSetTab("tab4")
            document.getElementById("dvError").style.display = "none"
        }
	 else if (tabid == "tab5")
        {
		 
		 f6("0");

             SetPageDV("1");
            fSetTab("tab5")
             document.getElementById("dvError").style.display = "none"
        }
        else
        {
            GetData("../../../../../AdvStockReach.aspx", a2, tabid, sPF)
        } 
    }
    else
    {
        a2 = ""
        if (document.getElementById("dvcnt") != null)
        {
            document.getElementById("dvcnt").style.display = "none"
            document.getElementById("dvcnt").style.height = "0"
        }
        if (document.getElementById("dvcnt01") != null)
            document.getElementById("dvcnt01").style.display = "block"
    } 
}



function dispSeries()
{

	var e0 = document.getElementById('ddl0'); 
	var e1 = document.getElementById('ddl1');
	var e2 = document.getElementById('ddl2');
	ddlval0 = e0.options[e0.selectedIndex].value
	ddlval1 = e1.options[e1.selectedIndex].value
	ddlval2 = e2.options[e2.selectedIndex].value
	 
		if (ddlval0 != 0)
	{
 
 
		if (ddlval0 !="EF"&& ddlval0 !="IF")

		{

			if (ddlval1 != 0)
			{
			
				
				if (ddlval2 != 0)

				{
				 dispSetPageDV(e2.options[e2.selectedIndex].value,0);

				}

				else

				{
					alert('Please select Strike Price!!! ');
					return false;

				}
		
			}
			else
			{

				alert('Please select Expiry Date!!! ');
				return false;
			}	

			

		}

		else
		{	
				if (ddlval0 == "EF" || ddlval0 =="IF" )
				{
						if (ddlval1 != 0)

						{
						 	dispSetPageDV(e1.options[e1.selectedIndex].value,0);

						}

						else

						{
							alert('Please select Expiry Date!!! ');
							return false;
		
						}
				}
				 

		}	

	}
	else
	{
	alert('Please select Instrument Type !!!! ');
	return false;
	
	}

 
 return false;
}



function removeAllOptions(selectbox)
{
var i;
for(i=selectbox.options.length-1;i>=0;i--)
{
selectbox.remove(i);
}
}

 function GetddlData()
{

 
GetPageDDL(document.getElementById('ddl0').value,document.getElementById('ddl1').value,2)
}

function GetPageDDL(val,val1,ddlname)
{
 
 

 if (val == "EF" || val == "IF" )
{


 

 
   var selobjddl = document.getElementById('ddl2');

   selobjddl.selectedIndex = 0;

  selobjddl.disabled=true; 

 var e1 = document.getElementById('ddl1');
 e1.onchange =null;

 //e1.removeEventListener("onchange", GetPageDDL('a','b',2), false);
 
//e1.detachEvent('onchange', GetPageDDL('a','b',2));


}



 
  if (val =="EO - Call" || val =="EO - Put" )
   {

 
 var selobjddl = document.getElementById('ddl2');
 selobjddl.selectedIndex = 0;

 selobjddl.disabled=false; 

 removeAllOptions(selobjddl)
					
 selobjddl.options[0]=new Option('Select..','0');

 
 var e1 = document.getElementById('ddl1');
// e1.addEventListener("onchange", GetPageDDL('a1','b1',2), false);
 
if (e1.onchange == null)
{

 
e1.onchange =GetddlData;
}

  }   
 


if (url.indexOf('=') == -1)
    {
        
        document.getElementById("dvError").style.display = "none"
        var a = url.split('/')
        a1 = a[0]
        a2 = a[9]
}



var scrip = "0";
var secname = "tabe";
var sPF ="xys";

      
var requestUrl = "http://www.bseindia.com/bseplus/stockreach/AdvStockReach.aspx" + "?scripcode=" + a2 + "&section=" + secname + "&IsPF=" + sPF + "&random=" + Math.random() + "&ddlVal=" + val + "&DDLName=" + ddlname + "&ddlval1=" + val1  

     var xmlHttp1 = ajaxFunction()
       xmlHttp1.onreadystatechange = function() 
	{
	      if (xmlHttp1.readyState == 4) 
		{
          		var str = xmlHttp1.responseText
 
                    			var astr = str.split("#DVSECTION#")
					var str1 = astr[1].split("#@#")
					if (str1[0] ="#BseDV#")
				{
 
  
 

				switch (str1[str1.length-1]) 
					{
					 
						case "0":
						
						var selObj0 = document.getElementById('ddl0');
						
						//if (selObj0.length > 0)
						//{
						 	//selObj0.remove(elSel.length - 1);
						//}
	
						 for (i = 1; i < str1.length -1; i++)
				                 {
						 
						  selObj0.options[i]=new Option(str1[i],str1[i]);

                				 }
					        

				                break;

 					        case "1":
						 
						var selObj1 = document.getElementById('ddl1');
	
											
						removeAllOptions(selObj1)
					
						selObj1.options[0]=new Option('Select..','0');

						 for (i = 1; i < str1.length -1; i++)
				                 {
						  selObj1.options[i]=new Option(str1[i],str1[i]);

                				 }

					        break;
						case "2":
						 
						var selObj2 = document.getElementById('ddl2');
						selObj2.disabled = false;
	
						removeAllOptions(selObj2)
						selObj2.options[0]=new Option('Select..','0');

						 for (i = 1; i < str1.length -1; i++)
				                 {
							var strval = str1[i].split(';')
							 
						  
							selObj2.options[i]=new Option(strval[0],strval[1]);

                				 }
					        break;

 						case "3":
						 
						var selObj4 = document.getElementById('ddl1');
						 	 

							removeAllOptions(selObj4)
						selObj4.options[0]=new Option('Select..','0');

						 for (i = 1; i < str1.length -1; i++)
				                 {
							var strval1 = str1[i].split(';')

						  selObj4.options[i]=new Option(strval1[0],strval1[1]);

                				 }
					        break;




					}
 

		 
				}                         
                       				 


	 	}
	}

 xmlHttp1.open("GET", requestUrl, true)
    xmlHttp1.send(null)



}






function GetData(page, scrip, secname, sPF)
{
    var requestUrl = page + "?scripcode=" + scrip + "&section=" + secname + "&IsPF=" + sPF + "&random=" + Math.random()

 
	scripcodeslb=scrip;
    var xmlHttp1 = ajaxFunction()
    xmlHttp1.onreadystatechange = function() {
        if (xmlHttp1.readyState == 4) {
            var str = xmlHttp1.responseText
 
 	
            if (str.split('#$#')[0] == 'BsePlus') {
                if (secname == "tab2") {
                    if (str.split('#$#')[1] == 'error') {
                        document.getElementById("dvDisp").innerHTML = "<div style='padding:25px 25px 25px 25px; font-size:16px;height:200px;'>Due to technical reason data could not be refreshed.<br/><br/><a style = 'cursor:pointer;' onclick=\"javascript:ActivateTab('tab2');\" style='color:blue'>Click here to refresh the data<a/></div>"
                        clearInterval(timer)
                        DisableTabs("tab2")
                    }
                    else if (str.split('#$#')[1] == 'nodata') { }
                    else {
                        DisplayPage(str)
                        fSetTab("tab2")
                        document.getElementById("dvError").style.display = "none"
                    }
                }
                else {
                    if (str.split('#$#')[1] == 'error') {
                        document.getElementById("dvError").innerHTML = "<div style='padding:25px 25px 25px 25px; font-size:16px;height:200px;'>Due to technical reason data could not be refreshed.<br/><br/><a style = 'cursor:pointer;' onclick=\"javascript:ActivateTab('tab1');\" style='color:blue'>Click here to refresh the data<a/></div>"
                        document.getElementById("dvError").style.display = "block"
                        document.getElementById("dvDispeq").style.display = "none"
                        clearInterval(timer)
                        DisableTabs("tab1")
                    }
                    else if (str.split('#$#')[1] == 'nodata') {
                        document.getElementById("dvError").innerHTML = "<div style='font-size:12px;height:200px;vertical-align:middle;padding-top:110px;color:#C00;text-align:center;'><strong>The Stock Reach information for " + a2 + " does not exist!<br/><br/></strong></div>"
                        document.getElementById("dvError").style.display = "block"
                        document.getElementById("dvDispeq").style.display = "none"
                        clearInterval(timer)
                        DisableTabs("tab1")
                    }
                    else if (str.indexOf('#SECTION#') != -1) {
                  
                        var astr = str.split("#SECTION#")

			 var astrFO = str.split("#SECTIONFO#")
			//alert(astrFO[1]);
                         document.getElementById("tbFoid").innerHTML =astrFO[1]
                        SetPage();
			  

                        if (astr[0] != null) {
 
                            f1(astr[0])
                        }
                        if (astr[1] != null) {
 
                            f2(astr[1])
                        }
                        if (astr[2] != null) {
 
                            f3(astr[2])
                        }
                        if (astr[3] != null) {
 
                            f4(astr[3])
                        }
                        if (astr[4] != null) {
 
                            f5(astr[4])
                        }
   			if (astr[5] != null) {
 
                             f6(astr[5])
                        }
			 
                        fSetTab("tab1")
                        document.getElementById("dvMore").style.display = "none"
                        document.getElementById("dvError").style.display = "none"
                    }
                }
            }
            else {
                document.location.href = "../InvalidUrl.htm?Page=Invalid_Data"
            }
        }
    }
    xmlHttp1.open("GET", requestUrl, true)
    xmlHttp1.send(null)
}



function DisplayPage(strData1)
{
    document.getElementById("dvDispeq").style.display = "none"
    var strData = strData1.substring(strData1.indexOf('#$#') + 3)
    if (strData.indexOf("#SECTION#") != -1)
    {
        var astr = strData.split("#SECTION#")
        var str0 = astr[0].split("#@#")
        var str1 = astr[1].split("#@#")
        var str2 = astr[2].split("#@#")
        var str3 = astr[3].split("#@#")
        var str4 = astr[4].split("#@#")
        var str5 = astr[5].split("#@#")
        var str6 = astr[6].split("#@#")
        var str7 = astr[7].split("#@#")
        var str8 = astr[8].split("#@#")
        if (str0[11] == "01-01-1900") str0[11] = "NA"
        var strFDT = "<div class='filingsbox'><div><table border='0' cellspacing='0' cellpadding='0'><tr>" +
"<td valign='top' class='filcol01'>" +
"<div class='fildata' style='margin-top:10px;'><table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>" +
"<tr><td><strong>" + str0[0] + "</strong></td><td align='right'>" + str0[1] + "</td></tr>" +
"<tr><td><strong>" + str0[2] + "</strong></td><td align='right'>" + str0[3] + "</td></tr>" +
"<tr><td><strong>" + str0[4] + "</strong></td><td align='right'>" + str0[5] + "</td></tr>" +
"<tr><td><strong>" + str0[6] + "</strong></td><td align='right'>" + str0[7] + "</td></tr>" +
"<tr><td><strong>" + str0[8] + "</strong></td><td align='right'>" + str0[9] + "</td></tr>" +
"<tr><td><strong>" + str0[10] + "</strong></td><td align='right'>" + str0[11] + "</td></tr>" +
"</table></div></td>" +
"<td valign='top' class='filcol02'>" +
"<div class='fildata'><h3>Dividend History (Rs.)</h3>" +
"<div class='filingscroll scroll2'>"
        if (str1.length > 1)
        {
            strFDT += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>"
            var strD = ""
            for (i = 0; i < str1.length; i += 3)
            {
                strD += "<tr><td style='padding-left:40px;'>" + str1[i + 1] + "</td><td style='padding-right:50px;' align='right'>" + str1[i + 2] + "</td></tr>"
            }
            strFDT += strD + "</table></div></div></td>"
        }
        else
        {
            strFDT += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02' style='height:105px;'>" +
"<tr><td align='center' style='border-bottom:0px;'><div><strong>No Dividend History available</strong></div></td></tr></table></div></div></td>"
        }
        //annual reports

        strFDT += "<td valign='top' class='filcol02'>" +
"<div class='fildata'><h3>Annual Reports</h3><div class='filingscroll' style='height:auto;'>"
        if (str8.length > 1)
        {
            strFDT += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>" +
        "<tr><td class='tdhead03' align='center'>Year</td><td class='tdhead03' align='center' width='50%'>Download</td></tr></table>" +
"<div class='filingscroll' style='height:150px;'>" +
"<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>";
            for (var ar = 0; ar < str8.length - 1; ar += 2) { strFDT += "<tr><td align='center'>" + str8[ar] + "</td><td align='center' width='50%'><a href='/bseplus/AnnualReport/" + a2 + "/" + str8[ar + 1] + "' target='_blank'><img src='../../../../../../images/pdf.gif' border='0' alt='Download PDF'/></a></td></tr>" }
            strFDT += "</table></div></div></td>"

        }
        else
        {
            strFDT += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02' style='height:105px;'>" +
"<tr><td align='center' style='border-bottom:0px;'><div><strong>No Records Found</strong></div></td></tr></table></div></td></tr>"
        }


        //management
        strFDT += "<tr><td valign='top' class='filcol01'>" +
"<div class='fildata'><h3>Management</h3>"
        if (str3 == "--")
        {
            strFDT += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02' style='height:105px;'>" +
"<tr><td align='center' style='border-bottom:0px;'><div><strong>No Records Found</strong></div></td></tr></table></div></div></td>"
        }
        else
        {
            strFDT += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>" +
"<tr><td class='tdhead03'>Name</td><td class='tdhead03' align='center'>Designation</td></tr></table>" +
"<div class='filingscroll' style='height:150px;'>" +
"<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>";
            for (var a = 0; a < str3.length; a += 2)
            {
                strFDT += "<tr><td><strong>" + str3[a] + "</strong></td><td align='left'>" + str3[a + 1] + "</td></tr>";
            }
            strFDT += "</table></div></div></td>"
        }
        //bonus history
        strFDT += "<td valign='top' class='filcol02'>" +
"<div class='fildata'><h3>Bonus History</h3>" +
"<div class='filingscroll scroll2'>"
        if (str2.length > 1)
        {
            strFDT += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>"
            var strB = ""
            for (i = 0; i < str2.length; i += 3)
            {
                strB += "<tr><td style='padding-left:40px;'>" + str2[i + 1] + "</td><td style='padding-right:50px;' align='right'>" + str2[i + 2] + "</td></tr>"
            }
            strFDT += strB + "</table></div></div></td>"
        }
        else
        {
            strFDT += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02' style='height:105px;'>" +
"<tr><td align='center' style='border-bottom:0px;'><div><strong>No Bonus History available</strong></div></div></td></tr></table></div></td>"
        }
		//Insider Trading
        strFDT += "<td valign='top' class='filcol03'>" +
"<div class='fildata'><h3>Insider Trading</h3><div class='filingscroll' style='height:auto;'>"
        if (str6.length > 1)
        {
            strFDT += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>"
            var strI = "<tr><td class='tdhead03'>" + str6[0] + "</td><td class='tdhead03'>" + str6[1] + "</td>" +
"<td class='tdhead03' align='center'>" + str6[2] + "</td><td class='tdhead03' align='right'>" + str6[3] + "</td><td class='tdhead03' align='right'>" + str6[4] + "</td></tr>"
            for (i = 5; i < str6.length; i += 5)
            {
                strI += "<tr><td>" + str6[i] + "</td><td>" + str6[i + 1] + "</td><td align='center'>" + str6[i + 2] + "</td><td align='right'>" + str6[i + 3] + "</td><td align='right'>" + str6[i + 4] + "</td></tr>"
            }
            strFDT += strI + "</table></div><table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'><tr><td align='right' style='border-bottom:0px;'><div class='more01 align='right' style='font-size:12px;'><a onclick='' href='http://www.bseindia.com/Insidetrade_ScripWise.asp?scripcd=" + a2 + "' target='_blank' style='cursor:pointer'>more</a></div></td></tr></table></div></td></tr>"
        }
        else
        {
            strFDT += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02' style='height:105px;'>" +
"<tr><td align='center' style='border-bottom:0px;'><div><strong>No Records Found</strong></div></td></tr></table></div></td></tr>"
        }


        //Registered Address
        strFDT += "<tr><td valign='top' class='filcol01'>" +
"<div class='fildata'><h3>Registered Office Address</h3><div class='filingscroll' style='height:165px;'>"
        if (str4 == "--")
        {
            strFDT += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02' style='height:105px;'>" +
"<tr><td align='center' style='border-bottom:0px;'><div><strong>No Records Found</strong></div></td></tr></table></div></div></td>"
        }
        else
        {
            strFDT += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>" +
"<tr><td colspan='3' style='padding-right:15px;'>" + str4[0] + "</td></tr><tr><td><strong>Tel.</strong></td><td>:</td><td>" + str4[1] + "</td></tr>" +
"<tr><td><strong>Fax</strong></td><td>:</td><td>" + str4[2] + "</td></tr><tr><td><strong>Email</strong></td><td>:</td>" +
"<td class='bluetxt01'>"
            if (str4[3] == "--" || str4[3] == undefined) { var sr1 = "--" }
            else
            {
                var sr = str4[3]
                var srarr = str4[3].split(',')
                for (i = 0; i < srarr.length; i++)
                {
                    sr = sr.replace(',', ';')
                }
                var sr1 = "href='mailto:" + sr + "'"
            }
            strFDT += "<a  " + sr1 + "'>" + str4[3] + "</a></td></tr><tr><td><strong>Website</strong></td><td>:</td>" +
"<td class='bluetxt01'>"
            if (str4[4] == "--") { var sr2 = "--" } else
            {
                var saw = str4[4]
                var sr2 = ""
                if (str4[4] != null)
                {
                    var sarrw = str4[4].split(',')
                    for (i = 0; i < sarrw.length; i++)
                    {
                        sr2 += "<a href='http://" + sarrw[i].replace(" ", "") + "' target='_blank'>" + sarrw[i] + "</a>,"
                    } 
                } 
            }
            strFDT += sr2.substring(0, sr2.length - 1) + "</td></tr></table></div></div></td>"
        }
        //Registrars
 strFDT += "<td valign='top' class='filcol02'><div class='fildata'><h3>Registrars</h3><div class='filingscroll' style='height:170px;'>"
        if (str5 == "--")
        {
            strFDT += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02' style='height:105px;'>" +
"<tr><td align='center' style='border-bottom:0px;'><div><strong>No Records Found</strong></div></td></tr></table></div></div></td>"
        }
        else
        {

			
           strFDT += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>" +
"<tr><td colspan='3' style='padding-right:15px;'>" + str5[0]+ "<br />" +str5[1] + "</td></tr><tr><td><strong>Tel.</strong></td><td>:</td><td>" + str5[2] + "</td></tr>" +
"<tr><td><strong>Fax</strong></td><td>:</td><td>" + str5[3] + "</td></tr><tr><td><strong>Email</strong></td><td>:</td>" +
"<td class='bluetxt01'>"
		  
            if (str5[4] == "--" || str5[4] == undefined) { var sr1 = "--" }
            else
            {
                var sr = str5[4]
                var srarr = str5[4].split(',')
                for (i = 0; i < srarr.length; i++)
                {
                    sr = sr.replace(',', ';')
                }
                var sr1 = "href='mailto:" + sr + "'"
            }
            strFDT += "<a  " + sr1 + "'>" + str5[4] + "</a></td></tr><tr><td><strong>Website</strong></td><td>:</td>" +
"<td class='bluetxt01'>"
            if (str5[5] == "--") { var sr2 = "--" } else
            {
                var saw = str5[5]
                var sr2 = ""
                if (str5[5] != null)
                {
                    var sarrw = str5[5].split(',')
                    for (i = 0; i < sarrw.length; i++)
                    {
                        sr2 += "<a href='http://" + sarrw[i].replace(" ", "") + "' target='_blank'>" + sarrw[i] + "</a>,"
                    } 
                } 
            }
            strFDT += sr2.substring(0, sr2.length - 1) + "</td></tr></table></div></div></td>"
        }
        //SAST
        strFDT += "<td valign='top' class='filcol03'>" +
"<div class='fildata'><h3>SAST</h3><div class='filingscroll' style='height:auto;'>"
        if (str7.length > 1)
        {
            strFDT += "<table border='0 ' cellspacing='0' cellpadding='0' class='table02' width='100%'>" +
"<tr><td class='tdhead03'>" + str7[0] + "</td><td class='tdhead03'>" + str7[1] + "</td><td class='tdhead03'style='padding-left:0px;' align='center' >" + str7[2] + "</td>" +
"<td class='tdhead03' align='right'>" + str7[3] + "</td><td class='tdhead03' align='right'>" + str7[4] + "</td></tr>"
            var strS = ""
            for (i = 5; i < str7.length; i += 5)
            {
                if (str7[i] == "") str7[i] = "--"
                strS += "<tr><td>" + str7[i] + "</td><td>" + str7[i + 1] + "</td><td align='center'>" + str7[i + 2] + "</td><td align='right'>" + str7[i + 3] + "</td><td align='right'>" + str7[i + 4] + "</td></tr>"
            }
            strFDT += strS + "</table></div>" +
"<table border='0' cellspacing='0' cellpadding='0' class='table02' width='100%'>" +
"<tr><td align='right' style='border-bottom:0px;'><div class='more01 align='right' style='font-size:12px;'><a onclick='' href='http://www.bseindia.com/Sasct_ScripWise.asp?scripcd=" + a2 + "' target='_blank' style='cursor:pointer'>more</a></div></td></tr></table></div></td></tr>"
        }
        else
        {
            strFDT += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02' style='height:105px;'>" +
"<tr><td align='center' style='border-bottom:0px;'><div><strong>No Records Found</strong></div></td></tr></table></div></td></tr>"
        }
        strFDT += "</table></div></div>"
        var strdisp = document.getElementById("dvDisp")
        strdisp.innerHTML = strFDT
    } 
}


function showHourlyStat(strData)
{

 
 
 	var astr = strData.split("#SECTION#")
 

//var strtable = "<table  width='90%'  style='font-size: 9px;padding-top:4px;background:rgb(232, 253, 251); align:center'>";
var strtable = "<table width='500' border='0' cellspacing='0' cellpadding='0'>";
 
 //strtable += "<tr><td align='center' style=' font-size: 12px;color: rgb(1, 141, 124);colspan='6'> Hourly Statistics </td></tr>"
strtable += "<tr><td  bgcolor='#29c1af'><table width='500' border='0' cellspacing='1' cellpadding='0'>"


strtable += "<tr><td height='30' colspan='6' align='center' valign='middle' bgcolor='#29c1af'><font face='Arial, Helvetica, sans-serif' color='#FFFFFF' size='2'><strong>Hourly Statistics</strong></font></td></tr>"

strtable +="<tr><td width='126' height='30' align='center' valign='middle' bgcolor='#C7FAF4'>&nbsp;</td><td colspan='2' align='center' valign='middle' bgcolor='#C7FAF4'><font face='Arial, Helvetica, sans-serif' color='#0D9385' size='-1'>Traded Volume</font></td><td colspan='3' align='center' valign='middle' bgcolor='#C7FAF4'>&nbsp;</td></tr>"

strtable +="<tr><td height='50' align='center' valign='middle' bgcolor='#C7FAF4'><font face='Arial, Helvetica, sans-serif' color='#0D9385' size='-1'>Time</font></td><td width='74' align='center' valign='middle' bgcolor='#C7FAF4'><font face='Arial, Helvetica, sans-serif' color='#0D9385' size='-1'>Contracts</font></td>"
strtable +="<td width='84' align='center' valign='middle' bgcolor='#C7FAF4'><font face='Arial, Helvetica, sans-serif' color='#0D9385' size='-1'>Qty.</font></td>"
strtable +="<td width='91' align='center' valign='middle' bgcolor='#C7FAF4'><font face='Arial, Helvetica, sans-serif' color='#0D9385' size='-1'>Turnover<br />"
strtable +="(Lakh)</font></td><td width='48' align='center' valign='middle' bgcolor='#C7FAF4'><font face='Arial, Helvetica, sans-serif' color='#0D9385' size='-1'>OI<br />"
//strtable +="(Qty)</font></td><td width='70' align='center' valign='middle' bgcolor='#C7FAF4'><font face='Arial, Helvetica, sans-serif' color='#0D9385' size='-1'>OI<br />(Lakh)</font></td></tr>"

strtable +="(Qty)</font></td><td width='70' align='center' valign='middle' bgcolor='#C7FAF4'><font face='Arial, Helvetica, sans-serif' color='#0D9385' size='-1'></font></td></tr>"
 

//strtable += "<tr><td  style=' font-family:arial;font-size: 12px;color: rgb(1, 141, 124); background:#dbefed;padding:8px 8px 4px 8px;font-weight:bold;fore-color:#4c4c4c' > </td><td align='Center' colspan='2' style=' font-family:arial;font-size: 12px;color: rgb(1, 141, 124); background:#dbefed;padding:8px 8px 4px 8px;font-weight:bold;fore-color:#4c4c4c' > Traded Volume</td><td colspan='3' style=' font-family:arial;font-size: 12px;color: rgb(1, 141, 124); background:#dbefed;padding:8px 8px 4px 8px;font-weight:bold;fore-color:#4c4c4c' ></td></tr><tr><td   style=' font-family:arial;font-size: 12px;color: rgb(1, 141, 124); background:#dbefed;padding:8px 8px 4px 8px;font-weight:bold;fore-color:#4c4c4c' ><u><strong> Time</td><td style='font-family:arial; font-size: 12px; color: rgb(1, 141, 124); background:#dbefed;padding:4px 4px 2px 4px;font-weight:bold;fore-color:#4c4c4c'  ><u><strong>No.of Contracts</td><td style='font-family:arial; font-size: 12px; color: rgb(1, 141, 124); background:#dbefed;padding:4px 4px 2px //4px;font-weight:bold;fore-color:#4c4c4c' align='Center'> <u><strong>Qty</td><td style='font-family:arial; font-size: 12px; color: rgb(1, 141, 124); background:#dbefed;padding:4px 4px 2px 4px;font-weight:bold;fore-color:#4c4c4c' > <u><strong>TurnOver <br>(Lakhs)</td><td style=' font-family:arial;font-size: 12px; color: rgb(1, 141, 124); background:#dbefed;padding:4px 4px 2px 4px;font-weight:bold;fore-color:#4c4c4c' > <u><strong>OI <br>(Qty)</td><td style='font-family:arial; font-size: 12px; color: rgb(1, 141, 124); background:#dbefed;padding:4px 4px 2px 4px;font-weight:bold;fore-color:#4c4c4c' > <u><strong>OI <br> (Lakhs)</td></tr>"


for (j=0;j<=astr.length-1 ;j++)


{
	strtable += '<tr>';
	
 
	str = astr[j].split("#@#")
	

	for (i=2;i<=str.length-2;i++)
	{
		
		
		if (str[i] == "")
		
		{
		strtable +="<td align='Center' valign='middle' bgcolor='#E8FDFB'><font face='Arial, Helvetica, sans-serif' color='#000' size='-1'>--</td>";
		}
		else

		{ 
			if (i =="2")
			{
			strtable +="<td align='center' valign='middle' bgcolor='#E8FDFB'><font face='Arial, Helvetica, sans-serif' color='#000' size='-1' >"+str[i] +"&nbsp;</td>";
			}
			else
			{
				strtable +="<td align='right' valign='middle' bgcolor='#E8FDFB'><font face='Arial, Helvetica, sans-serif' color='#000' size='-1' >"+str[i] +"&nbsp;</td>";
			}

		}
	}
		
 strtable +='</tr>';
}

strtable +='</table></td></table>';

 
myWindow=window.open('','','width=520,height=270,scrollbars=no, status=no, toolbar=no,menubar=no,locationbar=no' );
myWindow.document.write(strtable);
myWindow.focus();

}



function dispSetPageDV(strDt,val)
{

 
 
if (val == '1')
{

 

 
 
var requestUrl = "../../../../../AdvStockReach.aspx" + "?scripcode="+strDt+"&section=tab1&IsPF=sPF&random=" + Math.random()

 

 var xmlHttp1 = ajaxFunction()
       xmlHttp1.onreadystatechange = function() 
	 {
	       if (xmlHttp1.readyState == 4) 
		 {
          		var str = xmlHttp1.responseText

 			var astrFO = str.split("#SECTIONFO#")
			 // alert(astrFO[1]);
			  document.getElementById("tbFoid").innerHTML =astrFO[1]
			document.getElementById("tab5").style.display =""

                         //SetPageDV('1') 

 }
 
}
 xmlHttp1.open("GET", requestUrl, true)
    xmlHttp1.send(null)








        if (document.getElementById("dvcnt") != null)
            document.getElementById("dvcnt").style.display = "block"
        if (document.getElementById("dvcnt01") != null)
            document.getElementById("dvcnt01").style.display = "none"
        if (document.getElementById("dvMore") != null)
            document.getElementById("dvMore").style.display = "none"


}


if (url.indexOf('=') == -1)
    {
        
        document.getElementById("dvError").style.display = "none"
        var a = url.split('/')
        a1 = a[0]
        a2 = a[9]
			str1 = a2
}

 
if(str1.length < 6)
{
document.getElementById("tab1").style.display="none";
document.getElementById("tab2").style.display="none";
document.getElementById("tab3").style.display="none";
document.getElementById("tab4").style.display="none";

document.getElementById("result1").style.display="none";
document.getElementById("tdnotics").style.display='none';






}
else
{
document.getElementById("tab1").style.display="";
document.getElementById("tab2").style.display="";
document.getElementById("tab3").style.display="";
document.getElementById("tab4").style.display="";

document.getElementById("result1").style.display="";


}



document.getElementById("dvleft").innerHTML = "<div style='height:650px;'><img src='../../../../../../Images/loading.gif' alt='Loading' style = 'vertical-align:middle'/>&nbsp;&nbsp;Loading...</div>"

var scrip = "0";
var secname = "tabe";
var sPF ="xys";
var strHourlyData;

var requestUrl = "../../../../../AdvStockReach.aspx" + "?scripcode=" + a2 + "&section=" + secname + "&IsPF=" + sPF + "&random=" + Math.random() + "&seriesID=" + strDt 
 
 




 
 var xmlHttp12 = ajaxFunction()
       xmlHttp12.onreadystatechange = function() 
	{
		if (xmlHttp12.readyState == 4) 
		{


          		var str = xmlHttp12.responseText

 
			var astr1 = str.split("#@#SECTIONFO#")
			var astr3 = astr1[1].split("#SECTIONSER#")

			//var astr3 = str.split("#SECTIONSER#")

 	        	var astr = astr1[0].split("#@#")
			var astr7 = astr3[1].split("#@#")

			var astr8 = str.split("#@#Bseplus#")	
			//alert(astr8[1])
			 f1(astr8[1])


 // alert(astr1[0])
			//var strHr = showHourlyStat(astr1[1])
			//alert(strHr)



			document.getElementById("EQtitle").style.display='none';
			document.getElementById("dvTitle").style.display='none';
			document.getElementById("tblEQ").style.display='none';
			document.getElementById("tblDV1").style.display='none';
	

	 		document.getElementById("tdFOtitle").style.display='';
			document.getElementById("tblDV").style.display='';
			document.getElementById("dvFOTitle").style.display='';
 

			document.getElementById("tdFOsid").innerHTML = astr[2];
			document.getElementById("tdFOsc").innerHTML  = astr[1];
			document.getElementById("dvFOTitle").innerHTML  = astr[3];
			document.getElementById("tdExp").innerHTML = astr7[3]
			document.getElementById("tdUAsid").innerHTML = astr7[2]
			document.getElementById("tdUAsid1").innerHTML = astr7[2]


		ltpcol = ""



    if (preltp != undefined)
    {
        if (parseFloat(astr[6].replace(/,/gi, "")) > parseFloat(preltp.replace(/,/gi, "")))
            ltpcol = "background-color:#869FCE"
        else if (parseFloat(astr[6].replace(/,/gi, "")) < parseFloat(preltp.replace(/,/gi, "")))
            ltpcol = "background-color:#FFC5BF"
    }
    if (astr[0] == "Suspended v")
        astr[0] = "Suspended due to penal reasons"
    else if (astr[0] == "Suspended n")
        astr[0] = "Suspended due to Procedural reasons"
    var ltp = astr[24].split(".")[0]
    if (astr[24].split(".")[1] != null)
    {
        ltp += "." + "<span style='font-size:18px;'>" + astr[24].split(".")[1] + "</span>"
    }
    preltp = astr[11]
    if (astr[8] < 0)
        astr[8] = "<span style='font-size:medium;padding-right:2px;'>-</span>" + astr[8].replace('-', "")
    else if (astr[8] > 0) astr[8] = "<span style='font-size:medium;padding-right:2px;'>+</span>" + astr[8]
    if (astr[9] < 0) astr[9] = "<span style='font-size:medium;padding-right:2px;'>-</span>" + astr[9].replace('-', "")
    var strUpDnImg = "", strPerChg = ""
    if (astr[50] != undefined && astr[50].length > 0) strUpDnImg = "<img src='../../../../../../Images/" + astr[50] + ".gif'  alt='' />"; else strUpDnImg = "&nbsp;"
    if (astr[9].length > 0 && astr[8] != "--") strPerChg = astr[8] + " ( " + astr[9] + "% )"; else strPerChg = "&nbsp;"



var camsg ="";
var camsg1="";
    switch (astr[9]) {
        case "0":
            camsg = "Pre-open - No bids";
            camsg1="";
            break;
        case "1":
            if(ltp =="" || ltp =="-")
            {
            camsg="Pre-open - No indicative price";
            strUpDnImg="";
            ltp = "-";
            strPerChg="";
            camsg1="";
            }
	else if(astr[11] !="" && astr[11] !="-")
            {
            camsg="";
            camsg1="";
            }
	else
            {
            camsg="Pre open - Indicative Price";
            camsg1="Indicative Qty. : "+astr[10];
            }
            break;
        default:
            break;
    }




 

 

    document.getElementById("dvError").style.display = "none"
    document.getElementById("dvPeerGrp").style.display = "none"
    document.getElementById("dvDispeq").style.display = "block"
    document.getElementById("dvDisp").style.display = "none"
    document.getElementById("dvChart").style.display = "none"

  


//f5DV('--#@#--#@#--#@#--#@#--#@#--#@#--#@#--#@#--#@#--#@#15 Jul 2010#@##@#'+astr[54]+'#@#1')

 LoadDate(astr[27])

    document.getElementById("dvleft").innerHTML = "<div><table width='550' border='0' cellspacing='0' cellpadding='0'><tr><td width='200' valign='top' valign='top'>"+
"<table width='180' border='0' cellspacing='0' cellpadding='0' style='font-size: 13px;padding-top:15px' style='width:180px;height:100px;'>"+
"<tr><td  colspan='2' style='color:red;'>"+camsg+"</td></tr><tr><td rowspan='2' id='arr01'><div>"+strUpDnImg+"</div>"+
"</td><td  align='left' id='alert'><span id='dvltp' class='txtgrey01' style = 'line-height:35px;;vertical-align:top;font-size: 28px;"+ltpcol+"'>"+ltp+"</span></td>"+
"<td>&nbsp;</td><td>&nbsp;</td>"+
//"<td   align='right'  valign='top' id='tdgrp'></td></tr>"+
"<tr><td style='padding-top: 3px'><div style='padding-top: 2px;padding-left: 5px;'><strong>"+strPerChg+"</strong></div></td>  </tr>"+

"<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><tr>"+

//"<tr><td>&nbsp;</td><td   onclick ='javascript:showHourlyStat("+ '"'+ astr1[1] +'"' +")' style='font-size:11px; text-align:left; cursor:pointer;font-weight: bold;'><div ><strong><u><strong>Hourly Statistics</strong></div></td><td>&nbsp;&nbsp;</td></tr>"+

"<tr><td><div ><strong>&nbsp;&nbsp;</strong></div></td></tr>"+
"<tr><td  align='center'><div class='bluetxt01' style='padding-top: 5px;font-size: 12px;'>&nbsp; <strong></strong></div>"+
"</td></tr><tr><td  colspan='2' style='color:red;'>"+camsg1+"</td></tr><tr><td colspan='2' class='redtxt01' style='padding-top: 7px;border:1px;' id='status'></td></tr>"+

"</table> </td> <td   align='right'  valign='top' id='tdgrp'></td></td></tr></table>"+


"</div>" +
"<div><table width='100%' border='0' cellspacing='0' cellpadding='0' style='height:180px;width:595px;'>"+
"<tr><td>&nbsp;&nbsp;</td></tr>"+
"<tr><td   onclick ='javascript:showHourlyStat("+ '"'+ astr3[0] +'"' +")' style='font-size:11px; text-align:left; cursor:pointer;font-weight: bold;'><div ><strong><u><strong>Hourly Statistics</strong></div></td><td colspan='3' onclick =javascript:ActivateTab('tab5') style='font-size:11px; text-align:right; cursor:pointer;font-weight: bold;'><u><strong>Click for Most Active Series</td></tr><tr><td>&nbsp;</td></tr><tr><td valign='top' width='50%' style='padding-right: 0px;'>" +



"<div class='pancurve_ctr02'><div class='pancurve_lft02'><div class='pancurve_rgt02'><h3>Series Price Movements</h3></div></div></div>" +
"<div class='panmid02sr' id='spm1'><img src='../../../../../../Images/loading.gif' alt='Loading' style = 'vertical-align:middle'/>&nbsp;Loading...</div></td>" +
"<td valign='top' width='50%' style='padding-left: 5px;'><div class='pancurve_ctr02'><div class='pancurve_lft02'>" +

"<div class='pancurve_rgt02'><h3>Market Depth</h3></div></div></div><div class='panmid02sr' id='md1' style='height:150px'>" +
"<img src='../../../../../../Images/loading.gif' alt='Loading' style = 'vertical-align:middle'/>&nbsp;Loading..." +
"</div></td></tr><tr><td id='tdiads' style='padding:10px 3px 3px 3px;text-align:center;'  colspan='2'></td></tr></table></div>"
 
//alert(document.getElementById("dvleft").innerHTML)

document.getElementById("spm1").innerHTML ="<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>" +
"<tr><td id='dhlt1'><strong>Day's High / Low</strong></td><td align='right' id='dhl1'>" + astr[10] +" / "+astr[11] + "</td></tr>" +
"<tr><td id='pct1'><strong>Previous Close / Open</strong></td><td align='right' id='pc1'>" + astr[12]+ " / " +  astr[13]+"</td></tr><tr>" +
"<td id='wapt1'><strong>Turnover"+ astr[56]+"</strong></td><td align='right' id='wap1'>" + astr[57] + "</td></tr><tr>" +
"<td id='ttvt1'><strong>LTQ/TTQ  </strong></td><td align='right' id='ttv1'>" +astr[55]+" / "+ astr[17] + "</td></tr><tr>" +
"<td id='ttvt1'><strong>VWAP  </strong></td><td align='right' id='Vwap1'>" + astr[51] + "</td></tr><tr>" +
"<td id='tt2wkt1'><strong>All Time H/L</strong></td><td align='right' id='tt2wk1'>" +astr[19]+" / "+ astr[18] + "</td></tr><tr>" +
//"<td id='clt1'><strong>Open Interest quantity / % ch</strong></td><td align='right' id='cl1'>"+astr[20]+" / " +astr[21]+"</td></tr><tr><td id='mct1'><strong>Open Interest value(Lakh) / % ch</strong>" +
//"</td><td align='right' id='mc'>"+ astr[52] + " / " + astr[53] + "</td></tr></table>"

//"<td id='clt1'><strong>Open Interest quantity </strong></td><td align='right' id='cl1'>"+astr[20]+"</td></tr><tr><td id='mct1'><strong>Open Interest value(Lakh)</strong>" +
//"</td><td align='right' id='mc'>"+ astr[52] + "</td></tr></table>"



"<td id='clt1'><strong>Open Interest quantity </strong></td><td align='right' id='cl1'>"+astr[20]+"</td></tr></table>"

//alert(document.getElementById("spm1").innerHTML)


document.getElementById("md1").innerHTML ="<table class='table02' border='0' cellSpacing='0' cellPadding='0' width='100%'>" +
"<TR><TD >&nbsp;</TD><TD class='tdhead03' align='left' style='color:#018d7c; font-size:12px;'>Buy</TD>" +
"<TD class='tdhead03' style='text-align:center;'> Qty</TD><TD class='tdhead03' align='center'>Price</TD><TD style='width:5px;padding:0px; border-bottom:0px'>&nbsp;</TD>" +
"<TD class='tdhead03' style='color:#ff0000;font-size:12px;'>Sell</TD>" +
"<TD class='tdhead03' align='center'>Price</TD><TD class='tdhead03' style='text-align:center;'>Qty</TD></TR>" +
"<TR><TD>&nbsp;</TD><TD>&nbsp;</TD><TD id='md0' class='tdbuy01'>" + astr[28] + "</TD>" +
"<TD id='md1' class='tdbuy01'>" + astr[29] + "</TD><TD style='width:5px; padding:0px;'>&nbsp;</TD><TD class='tdsell01'>&nbsp;</TD>" +
"<TD id='md2' class='tdsell01'>" + astr[30] + "</TD><TD id='md3' class='tdsell01'>" + astr[31] + "</TD></TR>" +
"<TR><TD>&nbsp;</TD><TD>&nbsp;</TD><TD id='md4' class='tdbuy01'>" + astr[32] + "</TD>" +
"<TD id='md5' class='tdbuy01'>" + astr[33] + "</TD><TD style='width:5px; padding:0px;'>&nbsp;</TD><TD class='tdsell01'>&nbsp;</TD>" +
"<TD id='md6' class='tdsell01'>" + astr[34] + "</TD><TD id='md7' class='tdsell01'>" + astr[35] + "</TD></TR>" +
"<TR><TD>&nbsp;</TD><TD>&nbsp;</TD><TD id='md8' class='tdbuy01'>" + astr[36] + "</TD>" +
"<TD id='md9' class='tdbuy01'>" + astr[37] + "</TD><TD style='width:5px; padding:0px;'>&nbsp;</TD><TD class='tdsell01'>&nbsp;</TD>" +
"<TD id='md10' class='tdsell01'>" + astr[38] + "</TD><TD id='md11' class='tdsell01'>" + astr[39] + "</TD></TR>" +
"<TR><TD>&nbsp;</TD><TD>&nbsp;</TD><TD id='md12' class='tdbuy01'>" + astr[40] + "</TD>" +
"<TD id='md13' class='tdbuy01'>" + astr[41] + "</TD><TD style='width:5px; padding:0px;'>&nbsp;</TD><TD class='tdsell01'>&nbsp;</TD>" +
"<TD id='md14' class='tdsell01'>" + astr[42] + "</TD><TD id='md15' class='tdsell01'>" + astr[43] + "</TD></TR>" +
"<TR><TD>&nbsp;</TD><TD>&nbsp;</TD><TD id='md16' class='tdbuy01'>" + astr[44] + "</TD>" +
"<TD id='md17' class='tdbuy01'>" + astr[45] + "</TD><TD style='width:5px; padding:0px;'>&nbsp;</TD><TD class='tdsell01'>&nbsp;</TD>" +
"<TD id='md18' class='tdsell01'>" + astr[46] + "</TD><TD id='md19' class='tdsell01'>" + astr[47] + "</TD></TR>" +
"<TR><TD class='greentxtb01'>Total</TD><TD>&nbsp;</TD><TD style='color:#006400;' align='right' >" + astr[48] + "</TD>" +
"<TD>&nbsp;</TD><TD style='width:5px; padding:0px;'>&nbsp;</TD><TD >&nbsp;</TD><td>&nbsp;</td><TD style='color:#ff0000;' align=right>" + astr[49] + "</TD></TR></table>"

 //alert(document.getElementById("md1").innerHTML)

document.getElementById("tdgrp").innerHTML = "<div style='height:170px;'><img src='../../../../../../Images/loading.gif' alt='Loading' style = 'vertical-align:middle'/>&nbsp;Loading...</div>"
DispGraphDERI()	
	f5DV(astr3[1],astr[4])	
		 
		}


	}




	xmlHttp12.open("GET", requestUrl, true)
	xmlHttp12.send(null)
 
}


function SetPageDV(strDt)
{
	


 
if (strDt =="1")
{

 
   strData  =document.getElementById('tbFoid').innerHTML

 

document.getElementById("sh").style.display = "none"
document.getElementById("divDeri").style.display = "none"



document.getElementById("sh1").style.display = ""
document.getElementById("divStk").style.display ="none"
 




if (url.indexOf('=') == -1)
    {
        
        document.getElementById("dvError").style.display = "none"
        var a = url.split('/')
        a1 = a[0]
        a2 = a[9]
}


var requestUrl = "../../../../../AdvStockReach.aspx" + "?scripcode="+a2+"&section=tab5&IsPF=sPF&random=" + Math.random()


var str1 ='gr' 
 var xmlHttp1 = ajaxFunction()
       xmlHttp1.onreadystatechange = function() 
	 {
	       if (xmlHttp1.readyState == 4) 
		 {
          		   var str = xmlHttp1.responseText
 
 			//var astrFO = str.split("#SECTION#")
			//var astr = str.split("#SECTION#")
			 

			   //alert(astrFO[1]);
			 document.getElementById("tbFoid").innerHTML = str
			document.getElementById("tab5").style.display =""

                         //SetPageDV('1') 


	
 




var astr = str.split("#SECTION#")



var strtbl ="<table valign='top' class='table02' align='left' >" +
"<tr><td align='left' colspan='10'></td></tr><tr><td   class='tdhead03' style='color: rgb(1, 141, 124);  font-size: 12px;'>Series Code</td><td class='tdhead03' style='color: rgb(1, 141, 124); font-size: 12px;'>Instrument Type</td><td class='tdhead03' style='color: rgb(1, 141, 124); font-size: 12px;'>Expiry of contract</td><td class='tdhead03' style='color: rgb(1, 141, 124); font-size: 12px;'>Strike Price (Rs.)</td><td class='tdhead03' style='color: rgb(1, 141, 124); font-size: 12px;'>Qty</td><td class='tdhead03' style='color: rgb(1, 141, 124); font-size: 12px;'>LTP/Close (Rs.)</td><td class='tdhead03' style='color: rgb(1, 141, 124); font-size: 12px;'>Net Ch<br>(Rs.)</td><td class='tdhead03' style='color: rgb(1, 141, 124); font-size: 12px;'>No. of Traded contract</td><td class='tdhead03' style='color: rgb(1, 141, 124); font-size: 12px;'>Turn Over (Rs. Lac)</td><td class='tdhead03' style='color: rgb(1, 141, 124); font-size: 12px;'>OI Qty</td></tr>" 	
 

  for ( i = 0; i <= astr.length-1 ; i++)
 {
	 
	var astr1 = astr[i].split("#@#")

	 

		strtbl+= "<tr>"
		
			 for (j = 2; j < astr1.length; j++)
                    {

				// if (j == 0 )
					// {
		                       //  strtbl+= "<td  id=id" +i +" style ='display:none' >"+ astr1[j] +"</td>"
				 //}

			 

			 if (j == 2 )
			 {
			   var strID =astr1[1] ;
                          strtbl+= "<td   onclick =javascript:dispSetPageDV('"+strID+"',0) style='font-size:11px; cursor:pointer;font-weight: bold;'  ><strong><u>"+ astr1[j] +"</strong></td>"
			 }
			else
			{
				 if (j == 3 || j == 4 )
			 	{			
	
					strtbl+= "<td align='center' id=tdId"+j +" style ='padding-left:5px;'>"+ astr1[j] +"</td>"
				}		
				else

				{	if (astr1[j] =="-")
				{
					strtbl+= "<td align='center' id=tdId"+j +" style ='padding-left:5px;'>"+ astr1[j] +"</td>"
				}
				else
					{
					strtbl+= "<td align='right' id=tdId"+j +" style ='padding-left:5px;'>"+ astr1[j] +"</td>"
					}
				}


			}
				
			
 
					

			
	             } 

		strtbl+= "</tr>"
 }



 



 
var strddl0 ="Instrument Type <select id=ddl0 onChange=GetPageDDL(document.getElementById('ddl0').value,'',1)><option value=0>Select...</select>";
var strddl1 ="Expiry Date <select id=ddl1 onChange=GetPageDDL(document.getElementById('ddl0').value,document.getElementById('ddl1').value,2)><option value=0>Select...</option></select>";
//var strddl2 ="Call Put <select id=ddl2 onChange=GetPageDDL(document.getElementById('ddl2').value,3)><option value=0>Select...</option></select>";

var strddl2 ="Strike Price <select id=ddl2  ><option value=0>Select...</option></select>";

 
 strtbl+= "</table>"

    document.getElementById("dvError").style.display = "none"
    document.getElementById("dvPeerGrp").style.display = "none"
    document.getElementById("dvDispeq").style.display = "block"
    document.getElementById("dvDisp").style.display = "none"
    document.getElementById("dvChart").style.display = "none"
//    document.getElementById("dvleft").innerHTML = "<div style ='align:left'><table   border='0' width='100%' cellspacing='0' cellpadding='0' style='font-size: 13px;padding-top:15px' style='width:180px;height:100px;'>"+
//"<tr><td align='left'  style='color:red;'><td align='left'>"+ strtbl +
//"</td><td align='left' id='alert'><span id='dvltp' class='txtgrey01' style = 'line-height:35px;padding:4px;vertical-align:top;font-size: 28px;'></span></td><td></td>"+
//"<td style='padding-top: 3px'><div style='padding-top: 2px;padding-left: 5px;'><strong></select></strong></div></td></tr>"+
//"<tr><td  align='center'><div class='bluetxt01' style='padding-top: 5px;font-size: 12px;'><strong></strong></div>"+
//"</td></tr><tr><td  style='color:red;'>"+strddl0+"</td><td  style='color:red;'>"+strddl1+"</td><td  style='color:red;'>"+strddl2+"</td></tr><tr><td   class='redtxt01' style='padding-top: 7px;border:1px;' id='status'></td></tr></table></div>"


 document.getElementById("dvleft").innerHTML = 
//"<div><table width='100%' border='0' cellspacing='0' cellpadding='0'  style='height:180px;width:595px;'><tr><td valign='top' width='0%' style='padding-right: 0px;'>" +
"<div class='pancurve_ctr02'><div class='pancurve_lft02'><div class='pancurve_rgt02'><h3>Most Active Series</h3></div></div></div>" +

"<div><table width='100%' border='0' cellspacing='0' cellpadding='0' style='height:180px;width:595px;'>"+
"<tr><td >&nbsp;&nbsp;</td></tr>"+
"<tr><td valign='top' width='0%' style='padding-right: 0px;'>" +
"</td><td class='greentxtb01'>"+strddl0+"</td><td></td><td class='greentxtb01' >"+strddl1 +"</td><td></td><td class='greentxtb01'>"+strddl2+"</td><td><button onclick ='javascript: return dispSeries();' 'type='button'>Go</button> </td></tr>"+

 
"<tr><td>" +
"</td><td colspan='7'>"+strtbl+"</td></tr>" +
 "<tr><td>" +
"</td>"+
//"<td class='greentxtb01'>"+strddl0+"</td><td></td><td class='greentxtb01' >"+strddl1 +"</td><td></td><td class='greentxtb01'>"+strddl2+"</td><td><button onclick ='javascript: return dispSeries();' 'type='button'>Go</button> </td>"+
"</tr>"+
"<tr><td>" +
"</td><td ></td><td></td><td ></td></tr>"+ 

"</table></div>"



 
}
 
	}





 xmlHttp1.open("GET", requestUrl, true)
  xmlHttp1.send(null)



  GetPageDDL(a2,'','0')   
 	
}

}

function SetPage()
{
    document.getElementById("dvError").style.display = "none"
    document.getElementById("dvPeerGrp").style.display = "none"
    document.getElementById("dvDispeq").style.display = "block"
    document.getElementById("dvDisp").style.display = "none"
    document.getElementById("dvChart").style.display = "none"
    document.getElementById("dvleft").innerHTML = "<div><table width='100%' border='0' cellspacing='0' cellpadding='0' style='height:185px;width:595px;'><tr><td id='tbldt' valign='top'>" +
"</td><td align='right' valign='top' id='tdgrp'></td></tr>"+
//"<tr><td id='tdiads' style='padding:10px 3px 3px 3px;text-align:center'  colspan='2'></td></tr>" +
"</table></div>" +
"<div><table width='100%' border='0' cellspacing='0' cellpadding='0' style='height:180px;width:595px;'><tr><td valign='top' width='50%' style='padding-right: 0px;'>" +
"<div class='pancurve_ctr02'><div class='pancurve_lft02'><div class='pancurve_rgt02'><h3>Stock Price Movements</h3></div></div></div>" +
"<div class='panmid02sr' id='spm'><img src='../../../../../../Images/loading.gif' alt='Loading' style = 'vertical-align:middle'/>&nbsp;Loading...</div></td>" +
"<td valign='top' width='50%' style='padding-left: 5px;'><div class='pancurve_ctr02'><div class='pancurve_lft02'>" +
"<div class='pancurve_rgt02'><h3>Market Depth</h3></div></div></div><div class='panmid02sr' id='md' style='height:150px'>" +
"<img src='../../../../../../Images/loading.gif' alt='Loading' style = 'vertical-align:middle'/>&nbsp;Loading..." +
"</div></td></tr><tr><td id='tdiads' style='padding:10px 3px 3px 3px;text-align:center;'  colspan='2'></td></tr></table></div>"
   

//document.getElementById("tdgrp").innerHTML = "<div style='text-align:center;padding-top:60px;width:350px;height:100px;'><strong>No Graph Available</strong></div>"
 DispGraph()
}
function f1(str1)
{
	
    var strt = str1.substring(str1.indexOf('#$#') + 3)
    var str = strt.split("#@#")

    if (str[8]=="Y")
	{
		document.getElementById("dvTitle").innerHTML = str[1] + "<sup>$</sup>"
		document.getElementById("tdIndonext").innerHTML = "$ = Indonext Scrip."
	}
	else
	{
		document.getElementById("dvTitle").innerHTML = str[1]
		document.getElementById("tdIndonext").innerHTML = ""
	}
    document.getElementById("sc").innerHTML = str[2]
    if (str[6] == "")
        document.getElementById("grp").innerHTML = str[3]
    else
        document.getElementById("grp").innerHTML = str[3] + " / " + str[6]
    document.getElementById("fv").innerHTML = str[4]
    document.getElementById("sid").innerHTML = str[5] + "&nbsp;"
    document.getElementById("ind").innerHTML = str[7]
    if (document.getElementById("tdPrint") != null)
    {
        document.getElementById("tdPrint").innerHTML = "&nbsp;"
    } 
}
function f2(str2)
{
 
    var str = str2.split("#@#")
 
 
    ltpcol = ""
    if (preltp != undefined)
    {
        if (parseFloat(str[6].replace(/,/gi, "")) > parseFloat(preltp.replace(/,/gi, "")))
            ltpcol = "background-color:#869FCE"
        else if (parseFloat(str[6].replace(/,/gi, "")) < parseFloat(preltp.replace(/,/gi, "")))
            ltpcol = "background-color:#FFC5BF"
    }
    if (str[0] == "Suspended v")
        str[0] = "Suspended due to penal reasons"
    else if (str[0] == "Suspended n")
        str[0] = "Suspended due to Procedural reasons"
    var ltp = str[6].split(".")[0]
    if (str[6].split(".")[1] != null)
    {
        ltp += "." + "<span style='font-size:18px;'>" + str[6].split(".")[1] + "</span>"
    }
    preltp = str[6]
    if (str[7] < 0)
        str[7] = "<span style='font-size:medium;padding-right:2px;'>-</span>" + str[7].replace('-', "")
    else if (str[7] > 0) str[7] = "<span style='font-size:medium;padding-right:2px;'>+</span>" + str[7]
    if (str[8] < 0) str[8] = "<span style='font-size:medium;padding-right:2px;'>-</span>" + str[8].replace('-', "")
    var strUpDnImg = "", strPerChg = ""
    if (str[1] != undefined && str[1].length > 0) strUpDnImg = "<img src='../../../../../../Images/" + str[1] + ".gif'  alt='' />"; else strUpDnImg = "&nbsp;"
    if (str[7].length > 0 && str[7] != "--") strPerChg = str[7] + " ( " + str[8] + "% )"; else strPerChg = "&nbsp;"

var camsg ="";
var camsg1="";
    switch (str[9]) {
        case "0":
            camsg = "Pre-open - No bids";
            camsg1="";
            break;
        case "1":
            if(ltp =="" || ltp =="-")
            {
            camsg="Pre-open - No indicative price";
            strUpDnImg="";
            ltp = "-";
            strPerChg="";
            camsg1="";
            }
	else if(str[11] !="" && str[11] !="-")
            {
            camsg="";
            camsg1="";
            }
	else
            {
            camsg="Pre open - Indicative Price";
            camsg1="Indicative Qty. : "+str[10];
            }
            break;
        default:
            break;
    }

document.getElementById("tbldt").innerHTML="<table border='0' cellspacing='0' cellpadding='0' style='font-size: 13px;padding-top:15px' style='width:180px;height:100px;'>"+
"<tr><td colspan='2' style='color:red;'>"+camsg+"</td></tr><tr><td id='arr01' rowspan='2'><div>"+strUpDnImg+"</div>"+
"</td><td align='left' id='alert'><span id='dvltp' class='txtgrey01' style = 'line-height:35px;padding:4px;vertical-align:top;font-size: 28px;"+ltpcol+"'>"+ltp+"</span></td></tr><tr>"+
"<td style='padding-top: 3px'><div style='padding-top: 2px;padding-left: 5px;'><strong>"+strPerChg+"</strong></div></td></tr>"+
"<tr><td colspan='2' align='center'><div class='bluetxt01' style='padding-top: 5px;font-size: 12px;'>"+str[4]+"&nbsp; <strong>"+str[5]+"</strong></div>"+
"</td></tr><tr><td colspan='2' style='color:red;'>"+camsg1+"</td></tr><tr><td colspan='2' class='redtxt01' style='padding-top: 7px;border:1px;' id='status'>"+str[0]+"</td></tr></table>"

    setTimeout("resetltpcol()", 45000)
}
function f3(str3)
{
    var str = str3.split("#@#")
    document.getElementById("spm").innerHTML = "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>" +
"<tr><td id='dhlt'><strong>Day's High / Low</strong></td><td align='right' id='dhl'>" + str[0] + "</td></tr>" +
"<tr><td id='pct'><strong>Previous Close / Open</strong></td><td align='right' id='pc'>" + str[1] + "</td></tr><tr>" +
"<td id='wapt'><strong>Wtd. Avg Price</strong></td><td align='right' id='wap'>" + str[2] + "</td></tr><tr>" +
"<td id='ttvt'><strong>Total Traded Value " + str[3] + " </strong></td><td align='right' id='ttv'>" + str[4] + "</td></tr><tr>" +
"<td id='tt2wkt'><strong>TTQ / 2W Avg Q " + str[5] + "</strong></td><td align='right' id='tt2wk'>" + str[6] + "</td></tr><tr>" +
"<td id='clt'><strong>Circuit Limits</strong></td><td align='right' id='cl'></td></tr><tr><td id='mct'><strong>Mkt.&nbsp;Cap.&nbsp;Full&nbsp;/&nbsp;Free Float&nbsp;(Cr.)</strong>" +
"</td><td align='right' id='mc'>" + str[8] + "</td></tr></table>"
    if (str[7] == "0.00 / 0.00") { var s = "NA"; } else var s = str[7]
    document.getElementById("cl").innerHTML = s
}

var mdBuyPrev = new Array()
var mdSellPrev = new Array()
function f4(str4)
{
    var str = str4.split("#@#")
    document.getElementById("md").innerHTML = "<table class='table02' border='0' cellSpacing='0' cellPadding='0' width='100%'>" +
"<TR><TD >&nbsp;</TD><TD class='tdhead03' align='left' style='color:#018d7c; font-size:12px;'>Buy</TD>" +
"<TD class='tdhead03' style='text-align:center;'> Qty</TD><TD class='tdhead03' align='center'>Price</TD><TD style='width:5px;padding:0px; border-bottom:0px'>&nbsp;</TD>" +
"<TD class='tdhead03' style='color:#ff0000;font-size:12px;'>Sell</TD>" +
"<TD class='tdhead03' align='center'>Price</TD><TD class='tdhead03' style='text-align:center;'>Qty</TD></TR>" +
"<TR><TD>&nbsp;</TD><TD>&nbsp;</TD><TD id='md0' class='tdbuy01'>" + str[0] + "</TD>" +
"<TD id='md1' class='tdbuy01'>" + str[1] + "</TD><TD style='width:5px; padding:0px;'>&nbsp;</TD><TD class='tdsell01'>&nbsp;</TD>" +
"<TD id='md2' class='tdsell01'>" + str[2] + "</TD><TD id='md3' class='tdsell01'>" + str[3] + "</TD></TR>" +
"<TR><TD>&nbsp;</TD><TD>&nbsp;</TD><TD id='md4' class='tdbuy01'>" + str[4] + "</TD>" +
"<TD id='md5' class='tdbuy01'>" + str[5] + "</TD><TD style='width:5px; padding:0px;'>&nbsp;</TD><TD class='tdsell01'>&nbsp;</TD>" +
"<TD id='md6' class='tdsell01'>" + str[6] + "</TD><TD id='md7' class='tdsell01'>" + str[7] + "</TD></TR>" +
"<TR><TD>&nbsp;</TD><TD>&nbsp;</TD><TD id='md8' class='tdbuy01'>" + str[8] + "</TD>" +
"<TD id='md9' class='tdbuy01'>" + str[9] + "</TD><TD style='width:5px; padding:0px;'>&nbsp;</TD><TD class='tdsell01'>&nbsp;</TD>" +
"<TD id='md10' class='tdsell01'>" + str[10] + "</TD><TD id='md11' class='tdsell01'>" + str[11] + "</TD></TR>" +
"<TR><TD>&nbsp;</TD><TD>&nbsp;</TD><TD id='md12' class='tdbuy01'>" + str[12] + "</TD>" +
"<TD id='md13' class='tdbuy01'>" + str[13] + "</TD><TD style='width:5px; padding:0px;'>&nbsp;</TD><TD class='tdsell01'>&nbsp;</TD>" +
"<TD id='md14' class='tdsell01'>" + str[14] + "</TD><TD id='md15' class='tdsell01'>" + str[15] + "</TD></TR>" +
"<TR><TD>&nbsp;</TD><TD>&nbsp;</TD><TD id='md16' class='tdbuy01'>" + str[16] + "</TD>" +
"<TD id='md17' class='tdbuy01'>" + str[17] + "</TD><TD style='width:5px; padding:0px;'>&nbsp;</TD><TD class='tdsell01'>&nbsp;</TD>" +
"<TD id='md18' class='tdsell01'>" + str[18] + "</TD><TD id='md19' class='tdsell01'>" + str[19] + "</TD></TR>" +
"<TR><TD class='greentxtb01'>Total</TD><TD>&nbsp;</TD><TD style='color:#006400;' align='right' >" + str[20] + "</TD>" +
"<TD>&nbsp;</TD><TD style='width:5px; padding:0px;'>&nbsp;</TD><TD >&nbsp;</TD><td>&nbsp;</td><TD style='color:#ff0000;' align=right>" + str[21] + "</TD></TR></table>"

    //ChangeMdPrice(str)
}
function resetMdPrice()
{
    for (var i = 0; i < 20; i += 4)
    {
        document.getElementById('md' + i).style.backgroundColor = ""
        document.getElementById('md' + (i + 1)).style.backgroundColor = ""
        document.getElementById('md' + (i + 2)).style.backgroundColor = ""
        document.getElementById('md' + (i + 3)).style.backgroundColor = ""

        document.getElementById('md' + i).style.color = "#006400"
        document.getElementById('md' + (i + 1)).style.color = "#006400"
        document.getElementById('md' + (i + 2)).style.color = "#ff0000"
        document.getElementById('md' + (i + 3)).style.color = "#ff0000"
    }
}
function ChangeMdPrice(str)
{
    var mdBuyCurrent = new Array()
    var mdSellCurrent = new Array()
    //Current values
    for (var i = 0; i < 20; i += 4)
    {
        if (str[i] != undefined)
        {
            mdBuyCurrent[i] = str[i + 1];
            mdSellCurrent[i] = str[i + 2];
        }
        if (mdBuyPrev[i] != undefined)
        {
            if (parseFloat(mdBuyCurrent[i].replace(/,/gi, "")) > parseFloat(mdBuyPrev[i].replace(/,/gi, "")))
            {
                document.getElementById('md' + i).style.backgroundColor = "#869FCE"
                document.getElementById('md' + (i + 1)).style.backgroundColor = "#869FCE"
                document.getElementById('md' + i).style.color = "#000"
                document.getElementById('md' + (i + 1)).style.color = "#000"
            }
            else if (parseFloat(mdBuyCurrent[i].replace(/,/gi, "")) < parseFloat(mdBuyPrev[i].replace(/,/gi, "")))
            {
                document.getElementById('md' + i).style.backgroundColor = "#FFC5BF";
                document.getElementById('md' + (i + 1)).style.backgroundColor = "#FFC5BF";
            }
        }
        if (mdSellPrev[i] != undefined)
        {
            if (parseFloat(mdSellCurrent[i].replace(/,/gi, "")) > parseFloat(mdSellPrev[i].replace(/,/gi, "")))
            {
                document.getElementById('md' + (i + 2)).style.backgroundColor = "#869FCE";
                document.getElementById('md' + (i + 3)).style.backgroundColor = "#869FCE";
                document.getElementById('md' + (i + 2)).style.color = "#000"
                document.getElementById('md' + (i + 3)).style.color = "#000"
            }
            else if (parseFloat(mdSellCurrent[i].replace(/,/gi, "")) < parseFloat(mdSellPrev[i].replace(/,/gi, "")))
            {
                document.getElementById('md' + (i + 2)).style.backgroundColor = "#FFC5BF";
                document.getElementById('md' + (i + 3)).style.backgroundColor = "#FFC5BF";
            }
        }
    }
    //Previous values
    for (var i = 0; i < 20; i += 4)
    {
        if (str[i] != undefined)
        {
            mdBuyPrev[i] = str[i + 1];
            mdSellPrev[i] = str[i + 2];
        }
    }
}
var showslb="0";
function f5(str5)
{
document.getElementById("sh1").style.display ="none"
document.getElementById("divDeri").style.display ="none" 


document.getElementById("sh").style.display =""  
document.getElementById("divStk").style.display =""


//alert(str5);
 var str = str5.split("#@#")
    var a
    var s = ""
    if (str[6] != undefined && str[6].length > 0)
    {
        if (str[6].substring(0, 1) == "0") { str[6] = str[6].substring(1, str[6].length); } 
    }
    if (str[7] != undefined && str[7].length > 0)
    {
        if (str[7].substring(0, 1) == "0") { str[7] = str[7].substring(1, str[7].length); } 
    }
    a = "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table03'>" +
"<tr><td id='whlt'><strong>Weekly H/L</strong></td><td align='right' id='wl'>" + str[0] + "</td><td style='padding:0px;'>/</td><td align='right' style='padding-left:0px;'>" + str[1] + "</td></tr>" +
"<tr><td id='mhlt'><strong>Monthly H/L</strong></td><td align='right' id='mhl'>" + str[2] + "</td><td style='padding:0px;'>/</td><td align='right' style='padding-left:0px;'>" + str[3] + "</td></tr>" +
"<tr><td id='52whlt' style = 'background:none;' ><strong>52 Weeks H/L</strong></td><td align='right' id='52whl' style = 'background:none;'>" + str[4] + "</td><td style='padding:0px;background:none;'>/</td><td align='right' style='padding-left:0px;background:none;'>" + str[5] + "</td></tr>" +
"<tr><td id='52whldt0'>&nbsp;</td><td align='right' id='52whldt1' style ='padding-top:0px;'>( " + str[6] + " )</td><td style='padding:0px;'>&nbsp;</td><td align='right' style='padding-left:0px;padding-top:0px;'>( " + str[7] + " )</td></tr>"
    if(str[14] == "1")
	{
		a += "<tr><td id='52whlt' style = 'background:none;' ><strong>52 Weeks H/L (Unadj)</strong></td><td align='right' id='52whl' style = 'background:none;'>" + str[15] + "</td><td style='padding:0px;background:none;'>/</td><td align='right' style='padding-left:0px;background:none;'>" + str[16] + "</td></tr>" +
             "<tr><td id='52whldt0'>&nbsp;</td><td align='right' id='52whldt1' style ='padding-top:0px;'>( " + str[17] + " )</td><td style='padding:0px;'>&nbsp;</td><td align='right' style='padding-left:0px;padding-top:0px;'>( " + str[18] + " )</td></tr>" 
	}


    a +="<tr><td id='vedelt'><strong>Delivery / Var+ELM %</td><td align='right' id='vedel'>" + str[9] + "</td><td style='padding:0px;'>/</td><td align='right' style='padding-left:0px;'>" + str[8] + "</td></tr>"
    if (str[10].length != 0)
        a += "<tr><td id='exdtt'><strong>Ex Date</strong></td><td align='right' colspan='3'>" + str[10] + "</td></tr>"
    if (str[11] != undefined)
    {
        if (str[11].length != 0)
        {
            a += "<tr><td id='npdt'><strong>ND Period</strong></td><td align='right'  colspan='3' id='npd'></td></tr>"
            if (str[11] == " / ") var s = "-- / --"; else var s = str[11]
        } 
    }
    document.getElementById("sh").innerHTML = a + "</table>"
    if (s.length > 0)
        document.getElementById("npd").innerHTML = s
    LoadDate(str[12])
	if(str[13] == "1")
	{
		document.getElementById("tdslb").style.display="";
		showslb="1";
	}
}

function DisplayUnadjusted(str5)
{
    alert(str5);
}

function f5DV(str5,str6)
{

document.getElementById("sh1").style.display ="none"
document.getElementById("divStk").style.display ="none"

document.getElementById("sh").style.display ="" 



document.getElementById("divDeri").style.display ="" 




var strCF ="Circuit Filter"
var strPer ="NA"


 
 
			switch (str6)
                    {
                        case "Equity Future": 
                            {
                                 
				strPer ="10%"
                            }
                            break
                        case "Equity Option": 
                            {
                               strPer ="NA"
                            }
                            break
			case "Index Future": 
                            {
                              strPer ="5%"
                            }
                            break
			case "Index Option": 
                            {
                               strPer ="NA"
                            }
                            break
                         
                    } 









 var str = str5.split("#@#")
    var a
    var s = ""
    if (str[6] != undefined && str[6].length > 0)
    {
        if (str[6].substring(0, 1) == "0") { str[6] = str[6].substring(1, str[6].length); } 
    }
    if (str[7] != undefined && str[7].length > 0)
    {
        if (str[7].substring(0, 1) == "0") { str[7] = str[7].substring(1, str[7].length); } 
    }
   
//	 a = "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table03'>" +
//"<tr><td id='whlt'><strong>Underlying Value</strong></td><td align='right' id='wl'>" + str[0] + "</td><td style='padding:0px;'>/</td><td align='right' style='padding-left:0px;'>" + str[1] + "</td></tr>" +
//"<tr><td id='mhlt'><strong>Settlement Price</strong></td><td align='right' id='mhl'>" + str[2] + "</td><td style='padding:0px;'>/</td><td align='right' style='padding-left:0px;'>" + str[3] + "</td></tr>" +
//"<tr><td id='52whlt' style = 'background:none;' ><strong>Volatility Daily / Annualized</strong></td><td align='right' id='52whl' style = 'background:none;'>" + str[4] + "</td><td style='padding:0px;background:none;'>/</td><td align='right' style='padding-left:0px;background:none;'>" + str[5] + "</td></tr>" +
//"<tr><td id='52whldt0'>&nbsp;</td><td align='right' id='52whldt1' style ='padding-top:0px;'>( " + str[6] + " )</td><td style='padding:0px;'>&nbsp;</td><td align='right' style='padding-left:0px;padding-top:0px;'>( " + str[7] + " )</td></tr>" +
//"<tr><td id='vedelt'><strong>Client Wise Position Limit</td><td align='right' id='vedel'>" + str[9] + "</td><td style='padding:0px;'>/</td><td align='right' style='padding-left:0px;'>" + str[8] + "</td></tr>"
//"<tr><td id='mktw'><strong>Market Wide Position Limit</td><td align='right' id='vedel'>" + str[9] + "</td><td style='padding:0px;'>/</td><td align='right' style='padding-left:0px;'>" + str[8] + "</td></tr>"


 

 a = "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table03'>" +
"<tr><td id='whlt'><strong>Underlying Value</strong></td><td align='right' id='wl'>" + str[1] + "</td></tr>" +
//"<tr><td id='mhlt'><strong>Settlement Price</strong></td><td align='right' id='mhl'>" + str[0] + "</td></tr>" 
 //"<tr id='trCF' style='display:none'><td id='idcf' ><strong>Circuit Filter</strong></td><td align='right' id='id20'> 20%</td></tr>" 
"<tr id='trCF' ><td id='idCF' ><strong>"+strCF +"</strong></td><td  align='right' id='id20'>"+strPer +" </td></tr>" 

   //if (str[10].length != 0)
       // a += "<tr><td id='exdtt'><strong>Ex Date</strong></td><td align='right' colspan='3'>" + str[10] + "</td></tr>"
    //if (str[11] != undefined)
    //{
       //if (str[11].length != 0)
        //{
          // a += "<tr><td id='npdt'><strong>ND Period</strong></td><td align='right'  colspan='3' id='npd'></td></tr>"
          //if (str[11] == " / ") var s = "-- / --"; else var s = str[11]
        //} 
    //}
    document.getElementById("sh").innerHTML = a + "</table>"
    if (s.length > 0)
        document.getElementById("npd").innerHTML = s
    //LoadDate(str[12])
	if(str[13] == "1")
	{
		document.getElementById("tdslb").style.display="";
		showslb="1";
	}




}

function f6(str)
{



if (str == "")
	{
 
document.getElementById("tab5").style.display='none';
}



  url = location.href
    var a = url.split('/')
     str1 = a[9]



 
 if ( str =="")
 {
document.getElementById("tab5").style.display='none';
 }
		
	 if(str =="0")
	 {
 
		if(str1.length < 6)
		{
 			document.getElementById("dvFOTitle").style.display='none';
		         

			 document.getElementById("tblDV").style.display='none';
			 document.getElementById("tblDV1").style.display='';
			 document.getElementById("tdnotics").style.display='none';
			  
			 
			

		  	
		}
		else

		{

			document.getElementById("EQtitle").style.display='';
		 	document.getElementById("dvTitle").style.display='';
		 	document.getElementById("tblEQ").style.display='';
	
        	       document.getElementById("tdUAsid").style.display='';
	
		 	document.getElementById("tdFOtitle").style.display='none';
		 	document.getElementById("tblDV").style.display='none';
		 	document.getElementById("dvFOTitle").style.display='none';

			document.getElementById("tblDV1").style.display='none';
		}
 
	
	 }	 


	 if ( str !="10" &&  str !="")
	 {
 
		document.getElementById("tab5").style.display='';

		

		var arr = str.split('#@#') 
	
		document.getElementById("tdFOsid").innerHTML = arr[1];
		document.getElementById("tdFOsc").innerHTML  = arr[3];
		document.getElementById("dvFOTitle").innerHTML  = arr[2];

 	

	 }

	

 

	 
	 


}



function callslb()
{
	if(showslb=="1")

		window.open("http://www.bseindia.com/bseslb/scripdetails.aspx?scripcd="+scripcodeslb);
}

function callNotices()
{
	// if(showslb=="1")
			//window.open("http://www.bseindia.com/search/notices/advsearch_bseplus.asp?txtscripcd="+scripcodeslb);

	 window.open("http://www.bseindia.com/search/notices/advsearch_bseplus.asp?advanced=on&srchalldates=on&txtscripcd="+scripcodeslb+"&sort=2&flag=1&page=25");

	 
}
function DispGraph()
{
    document.getElementById("tdgrp").innerHTML = "<div style='height:170px;'><img src='../../../../../../Images/loading.gif' alt='Loading' style = 'vertical-align:middle'/>&nbsp;Loading...</div>"
    url = location.href
    var a = url.split('/')
    str1 = a[9]
    var now = new Date()
   // var requestUrl = "../scripcolgraph.aspx?scripcode=" + str1 + "&random=" + Math.random()
    var requestUrl = "http://www.bseindia.com/bseplus/scripcolgraph_auction.aspx?scripcode=" + str1 + "&random=" + Math.random()
    var xmlHttp1 = ajaxFunction()
    xmlHttp1.onreadystatechange = function()
    {
        if (xmlHttp1.readyState == 4)
        {
            var str = xmlHttp1.responseText
            var astr = str.split("$#$")
            str2 = astr[1]
            if (str2 == "nograph" || str2 == undefined)
            {
                document.getElementById("tdgrp").innerHTML = "<div style='text-align:center;padding-top:60px;width:350px;height:100px;'><strong>No Graph Available</strong></div>"
            }
            else
            {
                document.getElementById("tdgrp").innerHTML = "<img src='" + str2 + "?random=" + Math.random() + "' alt=''/>"
            } 
        } 
    }
    xmlHttp1.open("GET", requestUrl, true)
    xmlHttp1.send(null)
}


function DispGraphDERI()
{

   
document.getElementById("tdgrp").innerHTML = "<div style='height:170px;'><img src='../../../../../../Images/loading.gif' alt='Loading' style = 'vertical-align:middle'/>&nbsp;Loading...</div>"
    url = location.href
    var a = url.split('/')
    str1 = a[1]
     str21 =a[2]
var scrpcd = document.getElementById("tdFOsid").innerHTML
 
    var now = new Date()
   // var requestUrl = "../scripcolgraph.aspx?scripcode=" + str1 + "&random=" + Math.random()

 var requestUrl = "http://www.bseindia.com/bseplus/scripcolgraphDeri_auction.aspx?scripcode=" + scrpcd + "&random=" + Math.random()
 //    var requestUrl = "http://test.bseindia.com/bseplus/scripcolgraphDERI.aspx?scripcode=" + str1 +  "&SeriesCode=" +str2 + "&random=" + Math.random() 

	 
    var xmlHttp1 = ajaxFunction()

    xmlHttp1.onreadystatechange = function()
    {
        if (xmlHttp1.readyState == 4)
        {
             var str = xmlHttp1.responseText
 
             var astr = str.split("$#$")
 
	//str2 ="nograph"
	 str2 = astr[1]

         
            if (str2 == "nograph" || str2 == undefined)
            {
                document.getElementById("tdgrp").innerHTML = "<div style='text-align:center;padding-top:60px;width:350px;height:100px;'><strong>No Graph Available</strong></div>"
            }
            else
            {
                document.getElementById("tdgrp").innerHTML = "<img src='" + str2 + "?random=" + Math.random() + "' alt=''/>"
            } 
        } 
    }
    xmlHttp1.open("GET", requestUrl, true)
    xmlHttp1.send(null)
}



function ActivateTab(id)
{

 
    HideDiv()
    arrPeers.length = 0

	if (id =="tab1" || id =="tab2" || id =="tab3" || id =="tab4")
	{
	 document.getElementById("EQtitle").style.display='';
	 document.getElementById("tdFOtitle").style.display='none';

	 document.getElementById("tblEQ").style.display='';
	 document.getElementById("tblDV").style.display='none';

	 document.getElementById("dvTitle").style.display='';
	 document.getElementById("dvFOTitle").style.display='none';
		

	}


    if (id == "tab1")
    {

        document.getElementById('imgref').style.visibility = "visible"
        document.getElementById('imgPrint').style.visibility = "visible"
    }
    else
    {
        document.getElementById('imgref').style.visibility = "hidden"
        document.getElementById('imgPrint').style.visibility = "hidden"
        clearInterval(timer)
    }

    if (id == "tab4")
    {
	 document.getElementById("EQtitle").style.display='';
	// document.getElementById("DVtitle").style.display='none';

        url = location.href
        if (url.indexOf('=') == -1)
        {
            var a = url.split('/')
            a1 = a[9]
            GetCharts()
        }
        else
            document.location.href = "../InvalidUrl.htm?Page=Invalid_Data"
    }

	 if (id == "tab5")
        {

	url = location.href
    if (url.indexOf('=') == -1)
    {

        document.getElementById("dvError").style.display = "none"
        var a = url.split('/')
        a1 = a[0]
        a2 = a[9]
    }


	 



 	 
		//GetPageDDL(a2,'','0')

	//alert('helo')
	       f6("10");
             //SetPageDV("1");
             //fSetTab("tab5")
             //document.getElementById("dvError").style.display = "none"
        }


    fSetTab(id)
    document.getElementById("dvError").style.display = "none"
    //document.getElementById("dvPGSearch").style.display="none"
    document.getElementById("dvPeerGrp").style.display = "none"
    document.getElementById("dvDispeq").style.display = "none"
    document.getElementById("dvChart").style.display = "none"
    document.getElementById("dvDisp").style.display = "block"
    document.getElementById("dvDisp").innerHTML = "<div style='height:650px;'><img src='../../../../../../Images/loading.gif' alt='Loading' style = 'vertical-align:middle'/>&nbsp;&nbsp;Loading...</div>"
    GetPage(id)
    if (id == "tab1")
    {
        //alert(document.getElementById("tdiads").innerHTML);
        setTimeout('document.getElementById("tdiads").innerHTML = document.getElementById("dviads").innerHTML',2000);
    }
}
function GetCharts()
{
    document.getElementById("dvChart").innerHTML = "<div style='height:475px;'><img src='../../../../../../Images/loading.gif' alt='Loading' style = 'vertical-align:middle'/>&nbsp;Loading...</div>"
    url = location.href
    var sGraph = ""
    var strChart = ""
    var a = url.split('/')
    str1 = a[9]
    var now = new Date()
    var requestUrl = "../../../../../chartstab.aspx?scripcode=" + str1 + "&sid=" + document.getElementById("sid").innerHTML + "&random=" + Math.random()
    var xmlHttp1 = ajaxFunction()
    xmlHttp1.onreadystatechange = function()
    {
        if (xmlHttp1.readyState == 4)
        {
            var str = xmlHttp1.responseText
            if (str.indexOf('#@Graph#') != -1)
            {
                sGraph = str.split("#@Graph#")
            }
            strChart = "<table  cellpadding='0' cellspacing='0' border='0' width='100%'>" +
"<tr><td colspan='2' style='text-align:right'><a href='http://charting.bseindia.com/charting/index.asp?SYMBOL=" + str1 + "' target='_blank'><img src='../../../../../../Images/TechChrt.bmp' alt='' style = 'vertical-align:middle'/></a>&nbsp;&nbsp;</td></tr>" +
"<tr><td style='padding-left:30px'><div style='font-family:Trebuchet MS;font-size:17px;padding-top:30px;text-align:center;'>Price Movement</div>"
            if (sGraph[0] == "")
                strChart += "<img src='../../../../../../charts/chrtPM" + str1 + ".png' alt=''/>"
            else
                strChart += "<div style='Height:100px;width:370px;vertical-align:middle;text-align:center;margin-top:60px;padding-top:30px;padding-left:30px'><strong>No graph available</strong></div>"
            strChart += "</td><td style='padding-left:30px'><div style='font-family:Trebuchet MS;font-size:17px;padding-top:30px;text-align:center;'>Performance Chart</div>"
            if (sGraph[1] == "")
                strChart += "<img src='../../../../../../charts/chrtPerf" + str1 + ".png' alt=''/>"
            else
                strChart += "<div style='Height:100px;width:370px;vertical-align:middle;text-align:center;margin-top:60px;padding-top:30px;padding-left:30px'><strong>No graph available</strong></div>"
            strChart += "</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr>" +
"<tr><td style='padding-left:30px'><div style='font-family:Trebuchet MS;font-size:17px;padding-top:30px;text-align:center;'>Index Comparison</div>"
            if (sGraph[2] == "")
                strChart += "<img src='../../../../../../charts/chrtIND" + str1 + ".png' alt='' style='padding-bottom:30px'/>"
            else
                strChart += "<div style='Height:100px;width:370px;vertical-align:middle;text-align:center;margin-top:60px;padding-top:30px;padding-left:30px'><strong>No graph available</strong></div>"
            strChart += "</td><td style='padding-left:30px'><div style='font-family:Trebuchet MS;font-size:17px;padding-top:30px;text-align:center;'>Ownership Pattern</div>"
            if (sGraph[3].indexOf("NoGraph") == -1)
                strChart += "<img src='../../../../../../charts/chrtSHP" + str1 + ".png' alt='' style='padding-bottom:30px'/>"
            else
                strChart += "<div style='Height:180px;width:370px;vertical-align:middle;text-align:center;margin-top:50px;padding-top:10px;padding-left:30px'><strong>No graph available</strong></div>"
            strChart += "</td></tr></table>"
            document.getElementById("dvChart").innerHTML = strChart
        } 
    }
    xmlHttp1.open("GET", requestUrl, true)
    xmlHttp1.send(null)
}
function LoadDate(strDtTm)
{
    var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")
    var strDateTime = new Date(strDtTm)
    var strDate = strDateTime.getDate() + " " + m_names[strDateTime.getMonth()] + " " + strDateTime.getFullYear().toString().substring(2)
    if (strDateTime.getMinutes().toString().length == 1)
        var strTime = strDateTime.getHours() + ":" + "0" + strDateTime.getMinutes()
    else
        var strTime = strDateTime.getHours() + ":" + strDateTime.getMinutes()
    document.getElementById("tdDate").innerHTML = strDate + " " + "<font size='1'><b>|</b></font>" + " " + strTime
}
function popupstock(url)
{
    var newwindow1
    newwindow1 = window.open(url, 'AdvanceStockReach', 'height=650,width=900,scrollbars=yes')
    if (window.focus)
    {
        newwindow1.focus()
    } 
}
function DispCharting()
{
    document.getElementById("dvDispeq").style.display = "none"
    document.getElementById("dvDisp").style.display = "none"
    document.getElementById("dvChart").style.display = "block"
    document.getElementById("dvPeerGrp").style.display = "none"
    document.getElementById("dvError").style.display = "none"
}
function DispPeerGroup(PGScripCd, CmpType, Y)
{
    HideDiv()
    if (arrPeers.length > 0)
    {
        PGScripCd = PGScripCd.split(',')[0]
        for (var a = 0; a < arrPeers.length; a++)
        {
            PGScripCd += "," + arrPeers[a]
        } 
    }

    document.getElementById("dvError").style.display = "none"
    document.getElementById("dvDispeq").style.display = "none"
    document.getElementById("dvDisp").style.display = "none"
    document.getElementById("dvChart").style.display = "none"
    document.getElementById("dvMore").style.display = "none"
    document.getElementById("dvPeerGrp").innerHTML = ""
    document.getElementById("dvPeerGrp").innerHTML = "<div style='height:650px;'><img src='../../../../../../Images/loading.gif' alt='Loading' style = 'vertical-align:middle'/>&nbsp;&nbsp;Loading...</div>"
    document.getElementById("dvPeerGrp").style.display = "block"
    var requestUrl = "../../../../../PeerGroup.aspx?pgscripcode=" + PGScripCd + "&pgtype=" + CmpType + "&Y=" + Y + "&random=" + Math.random()
    var xmlHttpPG = ajaxFunction()
    xmlHttpPG.onreadystatechange = function()
    {
        if (xmlHttpPG.readyState == 4)
        {
            var strPG = xmlHttpPG.responseText
            if (strPG.split('#$#')[0] == 'BsePlus')
            {
                if (strPG.split('#$#')[1] == 'error')
                {
                    document.getElementById("dvPeerGrp").innerHTML = "<div style='padding:25px 25px 25px 25px; font-size:16px;height:200px;'>Due to technical reason data could not be refreshed.<br/><br/><a style = 'cursor:pointer;' onclick=\"javascript:ActivateTab('tab3');\" style='color:blue'>Click here to refresh the data<a/></div>"
                    clearInterval(timer)
                    DisableTabs("tab3")
                }
                else if (CmpType != "B")
                {
                    var strPGCol = (strPG.split('#$#')[1]).split('#SECTION#')[0]
                    var strPG1 = (strPG.split('#$#')[1]).split('#SECTION#')[1]
                    var strCodes = strPGCol.split('#@#')
                    PGScripCd += ","
                    for (var a = 0; a < strCodes.length - 1; a++)
                    {
                        if (strCodes[a] != a2)
                            PGScripCd += strCodes[a] + ","
                    }
                    PGScripCd = PGScripCd.substring(0, PGScripCd.length - 1)
                }
                else
                {
                    var strPG1 = (strPG.split('#$#')[1])
                }
                if (strPG1 != null && strPG1 != undefined && strPG1 != 'error')
                {
                    switch (CmpType)
                    {
                        case "Q": 
                            {
                                fpg1(strPG1, PGScripCd)
                            }
                            break
                        case "A": 
                            {
                                fpg2(strPG1, PGScripCd)
                            }
                            break
                        case "B": 
                            {
                                fpg3(strPG1, PGScripCd)
                            }
                            break
                    } 
                } 
            }
            else
            {
                document.location.href = "../InvalidUrl.htm?Page=Invalid_Data"
            } 
        } 
    }
    xmlHttpPG.open("GET", requestUrl, true)
    xmlHttpPG.send(null)
}
var PGValues = new Array();
var idp;
function fpg1(str, scripcd)
{
    var first = false
    var viewLink = "<span id='spnViewLink' class='more01' style='font-weight:normal;'><a onclick=\"javascript:fPGrpConvert('M')\" style='cursor:pointer;color:#0067a2;'>View in (Million)</a></span>";
    if (arrPeers.length <= 0)
    {
        arrPeers = scripcd.split(',')
        arrPeers.splice(0, 1)
        first = true
    }
    var dvPeerGrp = document.getElementById("dvPeerGrp")
    if (dvPeerGrp != null)
    {
        var strPGHead = "<table id = 'dvPGHeading' style='height:30px;width:905px;margin-top:5px;margin-bottom:5px;'><tr><td style='width:125px;'><span style='margin-bottom:2px;"
+ " font-size:15px; font-weight:bold;'>Quarterly Trends</span></td><td class='more01' style='width:100px;'>"
+ "&nbsp;<a style = 'cursor:pointer; font-size:15px;margin-bottom:5px;' "
+ " onclick = \"javascript:DispPeerGroup('" + scripcd + "','A',0);\">Annual Trends</a>"
+ " </td><td class='more01' style='width:150px;'>&nbsp;<a style = 'cursor:pointer; font-size:15px;' "
+ " onclick = \"javascript:DispPeerGroup('" + scripcd + "','B',0);\">Bonus & Dividends</a></td><td style='text-align:right;width:480px;'>&nbsp;</td></tr>"
+ " <tr><td colspan='4' style='text-align:right;width:905px;'><span class = 'more01' style='height:20px;text-align:center;"
+ " font-size:11px;cursor:pointer;text-decoration:underline;' "
+ " onclick='javascript:DispPeer(\"Q\",\"" + a2 + "\",this);'>Select Peers To Compare</span></td></tr></table>"
        if (str != "")
        {
            var rowid = 0
            //var idp = 0;
            idp = 0;
            var strRows = str.split("#ROW#")
            var strPGData = "<table id='tblPeer' cellpadding = '0' cellspacing = '0' class='loginpanel01 table01' style='margin:0;padding:0;border:0;margin-left:2px;' border='0'>"
            for (var i = 0; i < strRows.length; i++)
            {
                if (i > 0) rowid = rowid + 1
                var strData = strRows[i].split("#@#")
                if (rowid == 0)
                    strPGData += "<tr><td id = 'tdpg" + rowid + "' class='tdmoreheader' style='width:192px;background-color:#fff;border:0px;padding-right:0px;'>&nbsp;</td>"
                else
                {
                    	// PE
                    	var pedis="";
                    	if(rowid == 11)pedis="style='display:none;'";
                    	strPGData += "<tr id='trpg" + rowid + "' "+pedis+"><td id = 'tdpg" + rowid + "' class='tdrowhead' style='width:140px;padding-top:5px;'>&nbsp;</td>"
                }
                for (var j = 0; j < 5; j++)
                {
                    if (i == 3)
                    {
                        var strTemp = strRows[i + 1].split("#@#")
                        if (strData[j] != undefined)
                            strPGData += "<td class='tdrows' style='width:155px;padding-top:5px;'>" + strData[j] + " / " + strTemp[j] + "</td>"
                        else
                            strPGData += "<td class='tdrows' style='width:155px;padding-top:5px;'>&nbsp;</td>"
                    }
                    else
                    {
                        if (rowid == 0)
                        {
                            if (strData[j] != undefined)
                            {
                                if (j == 0)
                                    strPGData += "<td class='tdmoreheader' style='padding-top:5px;color:#fff;width:145px;border-right:solid 1px #fff;'>" + strData[j] + "</td>"
                                else
                                    strPGData += "<td class='tdmoreheader' style='padding-top:5px;color:#fff;width:145px;border-right:solid 1px #fff;border-left:solid 1px #fff;'>" + strData[j] + "</td>"
                            }
                            if (j == strData.length - 1)
                            {
                                for (var c = 4 - (4 - (strData.length - 1)); c < 4; c++)
                                {
                                    if (c == 3)
                                        strPGData += "<td class='tdmoreheader' style='padding-top:5px;color:#fff;width:145px;border-left:solid 1px #fff;'>&nbsp;</td>"
                                    else
                                        strPGData += "<td class='tdmoreheader' style='padding-top:5px;color:#fff;width:145px;border-right:solid 1px #fff;border-left:solid 1px #fff;'>&nbsp;</td>"
                                } 
                            } 
                        }
                        else
                        {
                            if (strData[j] != undefined)
                            {
                                if (i == 12 && strData[j] < 0) strData[j] = "--"
                                {
                                    if (i == 5 || i == 6 || i == 7)
                                    {
                                        idp += 1
                                        strPGData += "<td id='tdp" + idp + "' class='tdrows' style='width:145px;padding-top:5px;'>" + strData[j] + "</td>"
                                    }
                                    else
                                        strPGData += "<td class='tdrows' style='width:145px;padding-top:5px;'>" + strData[j] + "</td>"
                                }
                            }
                            else
                                strPGData += "<td class='tdrows' style='width:145px;padding-top:5px;'>&nbsp;</td>"
                        } 
                    } 
                }
                if (i == 3)
                {
                    for (var j = 0; j < 5; j++)
                    {
                        strData = strRows[13].split("#@#")
                        if (j == 0)
                            strPGData += "</tr><tr><td class='tdhead03 tdsubhead' style='padding-top:5px;padding-left:4px;padding-right:1px;border-right:1px solid #e0e0e0;'>Results&nbsp;<span id='spnView'>(&nbsp;in Cr.&nbsp;)</span>&nbsp;&nbsp;" + viewLink + "</td>"
                        if (strData[j] != undefined)
                            strPGData += "<td class='tdhead03' style='width:155px;padding-top:5px;border-right:1px solid #e0e0e0;text-align:center;'>" + strData[j] + "</td>"
                        else
                            strPGData += "<td class='tdhead03' style='width:155px;padding-top:5px;'>&nbsp;</td>"
                    } 
                }
                //strPGData+="</tr>"}
                if (i == 12)
                {
                    for (var j = 0; j < 5; j++)
                    {
                        strData = strRows[14].split("#@#")
                        if (j == 0)
                            strPGData += "</tr><tr><td class='tdhead03 tdsubhead' style='padding-top:5px;padding-left:4px;border-right:1px solid #e0e0e0;'>Ownership</td>"
                        if (strData[j] != undefined)
                            strPGData += "<td class='tdhead03' style='width:155px;padding-top:5px;border-right:1px solid #e0e0e0;text-align:center;'>" + strData[j] + "</td>"
                        else
                            strPGData += "<td class='tdhead03' style='width:155px;padding-top:5px;'>&nbsp;</td>"
                    } 
                }
                //strPGData+="</tr>"}
                if (i == 3) i += 1
                strPGData += "</tr>"
                var colspan = 6
                if (i == 7) strPGData += "<tr><td colspan = '" + colspan + "' class='tdhead03 tdsubhead' style='padding-top:5px;padding-left:4px;'>Ratios</td></tr>"
                if (i == 12) i += 2
            }
            strPGData += "</table>"
            strspace = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            dvPeerGrp.innerHTML = strPGHead + strPGData
            for (var k = 1; k <= idp; k++)
            {
                if (document.getElementById('tdp' + k) != null)
                    PGValues[k] = document.getElementById('tdp' + k).innerHTML;
            }
            document.getElementById("hdnPVal").value = "C"
            if (document.getElementById("hdnPVal").value == "C")
                fPGrpConvert('C')
            else if (document.getElementById("hdnPVal").value == "M")
                fPGrpConvert('M')
            document.getElementById("tblPeer").style.width = "900px"
            document.getElementById("tdpg1").innerHTML = "LTP"
            document.getElementById("tdpg2").innerHTML = "Change" + strspace + "%"
            document.getElementById("tdpg3").innerHTML = "52 W H/L"
            document.getElementById("tdpg4").innerHTML = "Sales"
            document.getElementById("tdpg5").innerHTML = "PAT"
            document.getElementById("tdpg6").innerHTML = "Equity"
            document.getElementById("tdpg7").innerHTML = "OPM" + strspace + "&nbsp;&nbsp;&nbsp;%"
            document.getElementById("tdpg8").innerHTML = "NPM" + strspace + "&nbsp;&nbsp;&nbsp;%"
            document.getElementById("tdpg9").innerHTML = "EPS"
            document.getElementById("tdpg10").innerHTML = "CEPS"
            document.getElementById("tdpg11").innerHTML = "PE"
            document.getElementById("tdpg12").innerHTML = "Promoter&nbsp;&&nbsp;Promoter&nbsp;Grp"
            document.getElementById("tdpg13").innerHTML = "Indian"
            document.getElementById("tdpg14").innerHTML = "Foreign"
            document.getElementById("tdpg15").innerHTML = "Public"
            document.getElementById("tdpg16").innerHTML = "Institution"
            document.getElementById("tdpg17").innerHTML = "FII"
            document.getElementById("tdpg18").innerHTML = "DII"
            document.getElementById("tdpg19").innerHTML = "Non&nbsp;Institution"
            document.getElementById("tdpg20").innerHTML = "Bodies&nbsp;Corporate"
            for (var i = 1; i < 7; i++)
            {
                document.getElementById("tdpg" + i).style.paddingLeft = "15px"
                document.getElementById("tdpg" + i).style.paddingRight = "0px"
            }
            for (var i = 7; i < 21; i++)
            {
		//if(i==11)continue;
                document.getElementById("tdpg" + i).style.paddingLeft = "15px"
                document.getElementById("tdpg" + i).style.paddingRight = "0px"
            }
            document.getElementById("tdpg12").noWrap = true
            document.getElementById("tdpg12").style.fontWeight = "bold"
            document.getElementById("tdpg15").style.fontWeight = "bold"
            document.getElementById("tdpg13").style.paddingLeft = "30px"
            document.getElementById("tdpg14").style.paddingLeft = "30px"
            document.getElementById("tdpg16").style.paddingLeft = "30px"
            document.getElementById("tdpg19").style.paddingLeft = "30px"
            document.getElementById("tdpg20").style.paddingLeft = "30px"
            document.getElementById("tdpg17").style.paddingLeft = "45px"
            document.getElementById("tdpg18").style.paddingLeft = "45px"
        }
        else
        {
            strPGHead = "<table id = 'dvPGHeading' style='height:30px;width:905px;margin-top:5px;margin-bottom:5px;'><tr><td style='width:125px;'><span style='margin-bottom:2px;"
+ " font-size:15px; font-weight:bold;'>Quarterly Trends</span></td><td class='more01' style='width:100px;'>"
+ "&nbsp;<a style = 'cursor:pointer; font-size:15px;margin-bottom:5px;' "
+ " onclick = \"javascript:DispPeerGroup('" + scripcd + "','A',0);\">Annual Trends</a>"
+ " </td><td class='more01' style='width:150px;'>&nbsp;<a style = 'cursor:pointer; font-size:15px;' "
+ " onclick = \"javascript:DispPeerGroup('" + scripcd + "','B',0);\">Bonus & Dividends</a></td><td style='text-align:right;width:480px;'>&nbsp;</td></tr></table>"
            dvPeerGrp.innerHTML = strPGHead + "<div style='height:400px;'><br/><span style='margin-bottom:2px; font-size:12px; font-weight:bold;'>No Data Found !</span></div>"
        } 
    } 
}
function fpg2(str, scripcd)
{
    //var viewLink = "<div id='dvViewLink' align='right' class='more01' style='font-size:12px;border:1px solid red;'><a onclick=\"javascript:fPGrpConvert('M')\" style='cursor:pointer;'>View in (Million)</a></div>"
    var viewLink = "<span id='spnViewLink' class='more01' style='font-weight:normal;'><a onclick=\"javascript:fPGrpConvert('M')\" style='cursor:pointer;color:#0067a2;'>View in (Million)</a></span>";
    var dvPeerGrp = document.getElementById("dvPeerGrp")
    if (dvPeerGrp != null)
    {
        var strPGHead = "<table id = 'dvPGHeading' style='height:30px;width:905px;margin-top:5px;margin-bottom:5px;'><tr><td style='width:105px;'><span style='margin-bottom:2px;"
+ " font-size:15px; font-weight:bold;'>Annual Trends</span></td><td class='more01' style='width:120px;'>"
+ "&nbsp;<a style = 'cursor:pointer; font-size:15px;margin-bottom:5px;' "
+ " onclick = \"javascript:DispPeerGroup('" + scripcd + "','Q',0);\">Quarterly Trends</a>"
+ " </td><td class='more01' style='width:170px;'>&nbsp;<a style = 'cursor:pointer; font-size:15px;' "
+ " onclick = \"javascript:DispPeerGroup('" + scripcd + "','B',0);\">Bonus & Dividends</a></td><td style='text-align:right;width:440px;'>&nbsp;</td></tr><tr>"
+ " <td colspan='4' style='text-align:right;width:905px;'><span class = 'more01' style='height:20px;text-align:center;"
+ " font-size:11px;cursor:pointer;text-decoration:underline;' "
+ " onclick='javascript:DispPeer(\"A\",\"" + a2 + "\",this);'>Select Peers To Compare</span></td></tr></table>"
        if (str != "")
        {
            var strPGData = ""
            var rowid = 0
            //var idp = 0
            idp = 0
            var strRows = str.split("#ROW#")
            var strPGData = "<table id='tblPeer' cellpadding = '0' cellspacing = '0' class='loginpanel01 table01' style='border:0;margin:0;padding:0;margin-left:2px;' border='0'>"
            for (var i = 0; i < strRows.length; i++)
            {
                if (i > 0) rowid = rowid + 1
                var strData = strRows[i].split("#@#")
                if (rowid == 0)
                    strPGData += "<tr><td id = 'tdpg" + rowid + "' class='tdmoreheader' style='width:192px;background-color:#fff;border:0px;'>&nbsp;</td>"
                else
                {
                    // PE
                    var pedis="";
                    if(rowid == 12)pedis="style='display:none;'";
                      strPGData += "<tr "+pedis+"><td id = 'tdpg" + rowid + "' class='tdrowhead' style='width:140px;padding-top:5px;padding-left:4px;'>&nbsp;</td>"
                }
                for (var j = 0; j < 5; j++)
                {
                    if (i == 3)
                    {
                        var strTemp = strRows[i + 1].split("#@#")
                        if (strData[j] != undefined)
                            strPGData += "<td class='tdrows' style='width:155px;padding-top:5px;'>" + strData[j] + " / " + strTemp[j] + "</td>"
                        else
                            strPGData += "<td class='tdrows' style='width:155px;padding-top:5px;'>&nbsp;</td>"
                    }
                    else
                    {
                        if (rowid == 0)
                        {
                            if (strData[j] != undefined)
                            {
                                if (j == 0)
                                    strPGData += "<td class='tdmoreheader' style='padding-top:5px;color:#fff;width:145px;border-right:solid 1px #fff;'>" + strData[j] + "</td>"
                                else
                                    strPGData += "<td class='tdmoreheader' style='padding-top:5px;color:#fff;width:145px;border-right:solid 1px #fff;border-left:solid 1px #fff;'>" + strData[j] + "</td>"
                            }
                            if (j == strData.length - 1)
                            {
                                for (var c = 4 - (4 - (strData.length - 1)); c < 4; c++)
                                {
                                    for (var c = 4 - (4 - (strData.length - 1)); c < 4; c++)
                                    {
                                        if (c == 3)
                                            strPGData += "<td class='tdmoreheader' style='padding-top:5px;color:#fff;width:145px;border-left:solid 1px #fff;'>&nbsp;</td>"
                                        else
                                            strPGData += "<td class='tdmoreheader' style='padding-top:5px;color:#fff;width:145px;border-right:solid 1px #fff;border-left:solid 1px #fff;'>&nbsp;</td>"
                                    } 
                                } 
                            } 
                        }
                        else
                        {
                            if (strData[j] != undefined)
                            {
                                if (i == 13 && strData[j] < 0) strData[j] = "--"
                                if (i == 14 && strData[j] < 0) strData[j] = "--"
                                if (i == 5 || i == 6 || i == 7)
                                {
                                    idp += 1
                                    strPGData += "<td id='tdp" + idp + "' class='tdrows' style='width:145px;padding-top:5px;'>" + strData[j] + "</td>"
                                }
                                else
                                    strPGData += "<td class='tdrows' style='width:145px;padding-top:5px;'>" + strData[j] + "</td>"
                            }
                            else
                                strPGData += "<td class='tdrows' style='width:145px;padding-top:5px;'>&nbsp;</td>"
                        } 
                    } 
                }
                if (i == 3)
                {
                    for (var j = 0; j < 5; j++)
                    {
                        strData = strRows[16].split("#@#")
                        if (j == 0)
                            strPGData += "<tr><td class='tdhead03 tdsubhead' style='padding-top:5px;padding-left:4px;padding-right:1px;border-right:1px solid #e0e0e0;'>Results&nbsp;<span id='spnView'>(&nbsp;in Cr.&nbsp;)</span>&nbsp;&nbsp;" + viewLink + "</td>"
                        if (strData[j] != undefined)
                            strPGData += "<td class='tdhead03' style='width:155px;padding-top:5px;border-right:1px solid #e0e0e0;text-align:center;'>" + strData[j] + "</td>"
                        else
                            strPGData += "<td class='tdhead03' style='width:155px;padding-top:5px;'>&nbsp;</td>"
                    }
                    strPGData += "</tr>"
                }
                if (i == 15)
                {
                    for (var j = 0; j < 5; j++)
                    {
                        strData = strRows[17].split("#@#")
                        if (j == 0)
                            strPGData += "</tr><tr><td class='tdhead03 tdsubhead' style='padding-top:5px;padding-left:4px;border-right:1px solid #e0e0e0;'>Ownership</td>"
                        if (strData[j] != undefined)
                            strPGData += "<td class='tdhead03' style='width:155px;padding-top:5px;border-right:1px solid #e0e0e0;text-align:center;'>" + strData[j] + "</td>"
                        else
                            strPGData += "<td class='tdhead03' style='width:155px;padding-top:5px;'>&nbsp;</td>"
                    } 
                }
                //strPGData+="</tr>"}
                if (i == 3) i += 1
                strPGData += "</tr>"
                var colspan = 6
                if (i == 7)
                {
                    strPGData += "<tr><td colspan = '" + colspan + "' class='tdhead03 tdsubhead' style='padding-top:5px;padding-left:4px;'>Ratios</td></tr>"
                }
                if (i == 15) i += 2
            }
            strPGData += "</table>"
            strspace = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            dvPeerGrp.innerHTML = strPGHead + strPGData
            for (var k = 1; k <= idp; k++)
            {
                if (document.getElementById('tdp' + k) != null)
                    PGValues[k] = document.getElementById('tdp' + k).innerHTML;
            }
            if (document.getElementById("hdnPVal").value == "C")
                fPGrpConvert('C')
            else if (document.getElementById("hdnPVal").value == "M")
                fPGrpConvert('M')
            document.getElementById("tblPeer").style.width = "900px"
            document.getElementById("tdpg1").innerHTML = "LTP"
            document.getElementById("tdpg2").innerHTML = "Change" + strspace + "%"
            document.getElementById("tdpg3").innerHTML = "52 W H / L"
            document.getElementById("tdpg4").innerHTML = "Sales"
            document.getElementById("tdpg5").innerHTML = "PAT"
            document.getElementById("tdpg6").innerHTML = "Equity"
            document.getElementById("tdpg7").innerHTML = "OPM" + strspace + "&nbsp;&nbsp;&nbsp; %"
            document.getElementById("tdpg8").innerHTML = "NPM" + strspace + "&nbsp;&nbsp;&nbsp; %"
            document.getElementById("tdpg9").innerHTML = "RONW"
            document.getElementById("tdpg10").innerHTML = "EPS"
            document.getElementById("tdpg11").innerHTML = "CEPS"
            document.getElementById("tdpg12").innerHTML = "PE"
            document.getElementById("tdpg13").innerHTML = "PB"
            document.getElementById("tdpg14").innerHTML = "BV"
            document.getElementById("tdpg15").innerHTML = "Promoter&nbsp;&&nbsp;Promoter&nbsp;Grp"
            document.getElementById("tdpg16").innerHTML = "Indian"
            document.getElementById("tdpg17").innerHTML = "Foreign"
            document.getElementById("tdpg18").innerHTML = "Public"
            document.getElementById("tdpg19").innerHTML = "Institution"
            document.getElementById("tdpg20").innerHTML = "FII"
            document.getElementById("tdpg21").innerHTML = "DII"
            document.getElementById("tdpg22").innerHTML = "Non&nbsp;Institution"
            document.getElementById("tdpg23").innerHTML = "Bodies&nbsp;Corporate"
            for (var i = 1; i < 7; i++)
            {
                document.getElementById("tdpg" + i).style.paddingLeft = "15px"
            }
            for (var i = 7; i < 24; i++)
            {
		//if(i==12)continue;
                document.getElementById("tdpg" + i).style.paddingLeft = "15px"
            }
            document.getElementById("tdpg15").style.fontWeight = "bold"
            document.getElementById("tdpg18").style.fontWeight = "bold"
            document.getElementById("tdpg16").style.paddingLeft = "30px"
            document.getElementById("tdpg17").style.paddingLeft = "30px"
            document.getElementById("tdpg19").style.paddingLeft = "30px"
            document.getElementById("tdpg22").style.paddingLeft = "30px"
            document.getElementById("tdpg20").style.paddingLeft = "45px"
            document.getElementById("tdpg21").style.paddingLeft = "45px"
            document.getElementById("tdpg23").style.paddingLeft = "30px"
            var tbl1 = document.getElementById("tblPeer");
            if (tbl1 != undefined)
            {
                tbl1.rows[11].style.display = "none";
                tbl1.rows[15].style.display = "none";
                tbl1.rows[16].style.display = "none";
            }
        }
        else
        {
            strPGHead = "<table id = 'dvPGHeading' style='height:30px;width:905px;margin-top:5px;margin-bottom:5px;'><tr><td style='width:110px;'><span style='margin-bottom:2px;"
+ " font-size:15px; font-weight:bold;'>Annual Trends</span></td><td class='more01' style='width:120px;'>"
+ "&nbsp;<a style = 'cursor:pointer; font-size:15px;margin-bottom:5px;' "
+ " onclick = \"javascript:DispPeerGroup('" + scripcd + "','Q',0);\">Quarterly Trends</a>"
+ " </td><td class='more01' style='width:170px;'>&nbsp;<a style = 'cursor:pointer; font-size:15px;' "
+ " onclick = \"javascript:DispPeerGroup('" + scripcd + "','B',0);\">Bonus & Dividends</a></td><td style='text-align:right;width:435px;'>&nbsp;</td></tr></table>"
            dvPeerGrp.innerHTML = strPGHead + "<div style='height:400px;'><br/><span style='margin-bottom:2px; font-size:12px; font-weight:bold;'>No Data Found !</span></div>"
        } 
    } 
}
function fpg3(str, scripcd)
{
    var dvPeerGrp = document.getElementById("dvPeerGrp")
    if (dvPeerGrp != null)
    {
        var strPGHead = "<table id = 'dvPGHeading' style='height:30px;width:905px;margin-top:5px;margin-bottom:5px;'><tr><td style='width:155px;'><span style='margin-bottom:2px;"
+ " font-size:15px; font-weight:bold;'>Bonus and Dividends</span></td><td class='more01' style='width:120px;'>"
+ "&nbsp;<a style = 'cursor:pointer; font-size:15px;margin-bottom:5px;' "
+ " onclick = \"javascript:DispPeerGroup('" + scripcd + "','Q',0);\">Quarterly Trends</a>"
+ " </td><td class='more01' style='width:170px;'>&nbsp;<a style = 'cursor:pointer; font-size:15px;' "
+ " onclick = \"javascript:DispPeerGroup('" + scripcd + "','A',0);\">Annual Trends</a></td><td style='text-align:right;width:415px;'>&nbsp;</td></tr><tr>"
+ " <td colspan='4' style='text-align:right;width:905px;'><span class = 'more01' style='height:20px;text-align:center;"
+ " font-size:11px;cursor:pointer;text-decoration:underline;' "
+ " onclick='javascript:DispPeer(\"B\",\"" + a2 + "\",this);'>Select Peers To Compare</span></td></tr></table>"
        var strPGData = ""
        var rowid = 0
        var str1 = str.split("#SECTION#")
        if (str1[0] != "")
        {
            var strRows = str1[0].split("#ROW#")
            var strCols = str1[1].split("#@#")
            var strScrip = str1[2].split("#@#")
            var strRowBonus = str1[3].split("#ROW#")
            var strLstBonus = str1[4].split("#@#")
            strDataCol = strRows[0].split("#@#")
            var colspan = 6
            //var strHeaderData="<table id='tblHeader' cellpadding='0' cellspacing='3' class='loginpanel01 table01' style='padding:0;border:0;margin:0;background-color:#fff;margin-left:2px;'>"
            var strPGData = "<table id='tblPeer' cellpadding = '0' cellspacing = '0' class='loginpanel01 table01' style='border:0;margin:0;padding:0;margin-left:2px;'>"
            for (var i = 0; i < 5; i++)
            {
                if (strScrip[i] != undefined && strScrip[i] != "")
                {
                    if (i == 0) strPGData += "<tr><td id = 'tdpg" + rowid + "' class='tdmoreheader' style='width:150px;background-color:#fff;border:0px;border-right:solid 1px #fff;'>&nbsp;</td>"
                    strPGData += "<td class='tdmoreheader' style='padding-top:5px;width:140px;color:#fff;border-right:solid 1px #fff;border-left:solid 1px #fff;'>" + strScrip[i] + "</td>"
                }
                if (i == strScrip.length - 2)
                {
                    for (var c = 4 - (4 - (strScrip.length - 2)); c < 4; c++)
                    {
                        strPGData += "<td class='tdmoreheader' style='padding-top:5px;color:#fff;width:150px;border-right:solid 1px #fff;border-left:solid 1px #fff;'>&nbsp;</td>"
                    } 
                } 
            }
            strPGData += "</tr>"
            //strHeaderData+="</tr></table>"}}
            strPGData += "<tr><td colspan = '" + colspan + "' class='tdhead03 tdsubhead' style='padding-top:5px;padding-left:4px;'>Bonus History</td></tr>"
            rowid = 0
            for (var i = 0; i < strRowBonus.length - 1; i++)
            {
                var strDatab = strRowBonus[i].split("#@#")
                rowid += 1
                for (var j = 0; j < 5; j++)
                {
                    if (j == 0) strPGData += "<tr><td id = 'tdpgb" + rowid + "' class='tdrowhead' style='width:120px;padding-top:5px;padding-left:24px;'>&nbsp;</td>"
                    if (strDatab[j] != undefined)
                        strPGData += "<td class='tdrows' style='padding-top:5px;width:145px;'>" + strDatab[j] + "</td>"
                    else
                        strPGData += "<td class='tdrows' style='padding-top:5px;width:145px;'>&nbsp;</td>"
                }
                strPGData += "</tr>"
            }
            strPGData += "<tr><td id = 'td' class='tdrowhead' style='width:120px;padding-top:5px;padding-left:24px;'>Last Known Bonus</td>"
            for (var a = 0; a < 5; a++)
            {
                if (strScrip[a] != "" && strScrip[a] != undefined)
                {
                    if (strLstBonus[a] != "" && strLstBonus[a] != undefined)
                        strPGData += "<td class='tdrows' style='padding-top:5px;width:145px;'>" + strLstBonus[a] + "</td>"
                    else
                        strPGData += "<td class='tdrows' style='padding-top:5px;width:145px;'>--</td>"
                }
                else
                    strPGData += "<td class='tdrows' style='padding-top:5px;width:145px;'>&nbsp;</td>"
            }
            strPGData += "</tr>"
            strPGData += "<tr><td colspan = '" + colspan + "' class='tdhead03 tdsubhead' style='padding-top:5px;padding-left:4px;'>Dividend History</td></tr>"
            rowid = 0
            for (var i = 0; i < strRows.length - 1; i++)
            {
                var strData = strRows[i].split("#@#")
                rowid += 1
                for (var j = 0; j < 5; j++)
                {
                    if (j == 0) strPGData += "<tr><td id = 'tdpg" + rowid + "' class='tdrowhead' style='width:120px;padding-top:5px;padding-left:24px;'>&nbsp;</td>"
                    if (strData[j] != undefined)
                        strPGData += "<td class='tdrows' style='padding-top:5px;width:145px;'>" + strData[j] + "</td>"
                    else
                        strPGData += "<td class='tdrows' style='padding-top:5px;width:145px;'>&nbsp;</td>"
                }
                strPGData += "</tr>"
            }
            strPGData += "</table>"
            dvPeerGrp.innerHTML = strPGHead + strPGData
            document.getElementById("tblPeer").style.width = "900px"
            for (var i = 0; i < strCols.length - 1; i++)
            {
                document.getElementById("tdpg" + (i + 1)).innerHTML = strCols[i]
                document.getElementById("tdpgb" + (i + 1)).innerHTML = strCols[i]
            } 
        }
        else
        {
            strPGHead = "<table id = 'dvPGHeading' style='height:30px;width:905px;margin-top:5px;margin-bottom:5px;'><tr><td style='width:155px;'><span style='margin-bottom:2px;"
+ " font-size:15px; font-weight:bold;'>Bonus and Dividends</span></td><td class='more01' style='width:120px;'>"
+ "&nbsp;<a style = 'cursor:pointer; font-size:15px;margin-bottom:5px;' "
+ " onclick = \"javascript:DispPeerGroup('" + scripcd + "','Q',0);\">Quarterly Trends</a>"
+ " </td><td class='more01' style='width:170px;'>&nbsp;<a style = 'cursor:pointer; font-size:15px;' "
+ " onclick = \"javascript:DispPeerGroup('" + scripcd + "','A',0);\">Annual Trends</a></td><td style='text-align:right;width:415px;'>&nbsp;</td></tr></table>"
            dvPeerGrp.innerHTML = strPGHead + "<div style='height:400px;'><br/><span style='margin-bottom:2px; font-size:12px; font-weight:bold;'>No Data Found !</span></div>"
        } 
    } 
}
function PGLinks(Type, scripcd)
{
    var strPGlinks = "<div align = 'left'><strong>Peer Group Comparison</strong></div>"
    switch (Type)
    {
        case "Q": 
            {
                strPGlinks = "<div id = 'dvPGLinks' style='text-align:left;padding-left:750px;float:left' class = 'more01'>"
+ "<div style='padding-bottom:4px;display:none'><a style = 'color:black;text-decoration:none;cursor:default; font-size:12px;margin-bottom:5px;'>Compare Quarterly Trends</a></div>"
+ "<div style='padding-bottom:4px;'><a style = 'cursor:pointer; font-size:12px;margin-bottom:5px;' onclick = \"javascript:DispPeerGroup('" + scripcd + "','A',0);\">Compare Annual Trends</a></div>"
+ "<div><a style = 'cursor:pointer; font-size:12px;' onclick = \"javascript:DispPeerGroup('" + scripcd + "','B',0);\">Compare Bonus & Dividends</a></div>"
+ "</div>"
            }
            break
        case "A": 
            {
                strPGlinks = "<div id = 'dvPGLinks' style='text-align:left;padding-left:750px;' class = 'more01'>"
+ "<div style='padding-bottom:4px;'><a style = 'cursor:pointer;font-size:12px;' onclick = \"javascript:DispPeerGroup('" + scripcd + "','Q',0);\">Compare Quarterly Trends</a></div>"
+ "<div style='padding-bottom:4px; display:none'><a style = 'color:black;text-decoration:none;cursor:default;font-size:12px;'>Compare Annual Trends</a></div>"
+ "<div><a style = 'cursor:pointer;font-size:12px;' onclick = \"javascript:DispPeerGroup('" + scripcd + "','B',0);\">Compare Bonus & Dividends</a></div>"
+ "</div>"
            }
            break
        case "B": 
            {
                strPGlinks = "<div id = 'dvPGLinks' style='text-align:left;padding-left:750px;' class = 'more01'>"
+ "<div style='padding-bottom:4px;'><a style = 'cursor:pointer;font-size:12px;' onclick = \"javascript:DispPeerGroup('" + scripcd + "','Q',0);\">Compare Quarterly Trends</a></div>"
+ "<div style='padding-bottom:4px;'><a style = 'cursor:pointer;font-size:12px;' onclick = \"javascript:DispPeerGroup('" + scripcd + "','A',0);\">Compare Annual Trends</a></div>"
+ "<div style='display:none'><a style = 'color:black;text-decoration:none;cursor:default;font-size:12px;'>Compare Bonus & Dividends</a></div>"
+ "</div>"
            }
            break
    }
    return strPGlinks
}
function GetPeerGrp()
{
    document.getElementById("dvError").style.display = "none"
    document.getElementById("dvDispeq").style.display = "none"
    document.getElementById("dvDisp").style.display = "none"
    document.getElementById("dvChart").style.display = "none"
    document.getElementById("dvMore").style.display = "none"
    document.getElementById("dvPeerGrp").innerHTML = "<div style='height:650px;'><img src='../../../../../../Images/loading.gif' alt='Loading' style = 'vertical-align:middle'/>&nbsp;&nbsp;Loading...</div>"
    document.getElementById("dvPeerGrp").style.display = "block"
    var scode = ""
    curUrl = location.href
    if (curUrl.indexOf('=') == -1)
    {
        var urlarr = curUrl.split('/')
    }
    scode = urlarr[9]
    if (scode.length > 0)
    {
        var requestUrl = "../../../../../PeerGroup.aspx?scripcode=" + scode + "&random=" + Math.random()
        var xmlHttpPG1 = ajaxFunction()
        xmlHttpPG1.onreadystatechange = function()
        {
            if (xmlHttpPG1.readyState == 4)
            {
                var str = xmlHttpPG1.responseText
                if (str.split('#$#')[0] == 'BsePlus')
                {
                    var strPG = str.split('#$#')[1]
                    if (strPG != undefined && strPG.length > 0)
                    {
                        fpg4(strPG)
                    } 
                }
                else
                {
                    document.location.href = "../InvalidUrl.htm?Page=Invalid_Data"
                } 
            } 
        }
        xmlHttpPG1.open("GET", requestUrl, true)
        xmlHttpPG1.send(null)
    } 
}
function fpg4(str)
{
    var rows = str.split("#ROW#")
    var rowCompl = parseInt((rows.length) / 4, 0)
    var rowPartial = rows.length % 4
    var strPGHTML = ""
    var chkid = 0
    var tdCnt = 0
    strPGHTML = "<div style = 'border:solid 1px red'>"
    if (rowCompl == 0) rowCompl = rowPartial
    for (var i = 0; i < rowCompl; i++)
    {
        var strColData = rows[i].split("#@#")
        if (strColData[0] != a2)
        {
            strPGHTML += "<input type = 'checkbox' id = 'chk" + chkid + "' value = '" + strColData[0] + "'/>" + strColData[1] + "<br/>"
            chkid = chkid + 1
            if ((rowCompl % 4) > 0)
                strPGHTML += "</div><div style = 'border:solid 1px black'>"
        } 
    }
    strPGHTML += "</div>"
    var strSubmit = "<img src = '../../../../../../Images/submitbtn01.gif' alt ='' onclick = 'fcheckCnt(" + (parseInt(rows.length) - 1) + ");'/>"
    document.getElementById("dvPeerGrp").innerHTML = strPGHTML + strSubmit
    document.getElementById("dvPeerGrp").style.display = "block"
}
function fcheckCnt(chkCnt)
{
    var cnt = 0
    var scrCodes = ""
    for (var i = 0; i < chkCnt; i++)
    {
        var objChk = document.getElementById("chk" + i)
        if (objChk != null)
        {
            if (objChk.checked == true)
            {
                cnt++
                scrCodes += objChk.value + ","
            } 
        }
        if (cnt > 4)
        {
            alert("Select maximum 4 peer groups")
            return false
        } 
    }
    DispPeerGroup(a2 + "," + scrCodes.substring(0, scrCodes.length - 1), "Q", 1)
}
function DispPeer(Part, ScCd, obj)
{
    pgPart = Part;
    if (ScCd != "")
    {
        var scc = ScCd.split(',')[0]
        if (scc.length > 1)
            var requestUrl = "../../../../../PeerGroup.aspx?scripcode=" + ScCd.split(',')[0] + "&random=" + Math.random()
        else
            var requestUrl = "../../../../../PeerGroup.aspx?scripcode=" + ScCd + "&random=" + Math.random()
        var xmlHttpPG1 = ajaxFunction()
        var dvP1 = document.getElementById("dvPeer1")
        var div = document.getElementById("dvPeers")
        var dv1 = document.getElementById("dvSubmit")
        var dvPGSearch = document.getElementById("dvPGSearch")
        dvP1.style.display = ""; div.style.display = "";
        dvP1.style.top = obj.offsetTop + parseInt("10") + "px"
        if (Part == "B")
        {
            dvP1.style.marginTop = "-398px"
        }
        else if (Part == "Q")
        {
            dvP1.style.marginTop = "-672px"
        }
        else if (Part == "A")
        {
            dvP1.style.marginTop = "-753px"
        }
        div.innerHTML = "<img src='../../../../../../Images/loading.gif' alt='Loading...' style = 'vertical-align:middle'/>&nbsp;Loading..."
        xmlHttpPG1.onreadystatechange = function()
        {
            if (xmlHttpPG1.readyState == 4)
            {
                var str = xmlHttpPG1.responseText
                if (str.split('#$#')[0] == 'BsePlus')
                {
                    if (str.split('#$#')[1] != undefined && str.split('#$#')[1] != "")
                    {
                        var strPeerData = (str.split('#$#')[1]).split('#ROW#')
                        peerString = (str.split('#$#')[1]);
                        //debugger;
                        Submit((str.split('#$#')[1]), Part)
                    }
                    else
                        HideDiv()
                } 
            } 
        }
        xmlHttpPG1.open("GET", requestUrl, true)
        xmlHttpPG1.send(null)
    } 
}

function HideDiv()
{
    document.getElementById("dvPeers").style.display = "none"
    document.getElementById("dvSubmit").style.display = "none";
    document.getElementById("dvPGSearch").style.display = "none"
    document.getElementById("dvPeer1").style.display = "none"
}
function clicked(id, chk, value)
{
    var check = 0
    if (a2 == value)
    { document.getElementById(id).checked = true }

    if (chk == true)
    {
        /*arrPeers = new Array(0);*/
        document.getElementById(id).parentNode.style.backgroundColor = "#8AA"
        document.getElementById(id).parentNode.style.color = "#fff"
        document.getElementById(id).parentNode.style.fontWeight = "bold"

        for (var a = 0; a < arrChkIds.length; a++)
        {
            if (document.getElementById('chk' + arrChkIds[a]) != null)
            {
                if (document.getElementById('chk' + arrChkIds[a]).checked == true)
                {
                    if (a2 != document.getElementById('chk' + arrChkIds[a]).value.toString())
                    {
                        check = check + 1
                    }
                }
            }
        }
        if (check > 4)
        {
            alert("You can select only 4 peers at a time")
            document.getElementById(id).checked = false
            document.getElementById(id).parentNode.style.backgroundColor = "#f0fefc"
            document.getElementById(id).parentNode.style.color = "#366"
            document.getElementById(id).parentNode.style.fontWeight = "normal"
        }
    }
    else
    {
        if (a2 == value)
        {
            document.getElementById(id).parentNode.style.backgroundColor = "#8AA"
            document.getElementById(id).parentNode.style.color = "#fff"
            document.getElementById(id).parentNode.style.fontWeight = "bold"
        }
        else
        {
            document.getElementById(id).parentNode.style.backgroundColor = "#f0fefc"
            document.getElementById(id).parentNode.style.color = "#366"
            document.getElementById(id).parentNode.style.fontWeight = "normal"
        }

    }
    Addpeers();
}
function Submit(txt, Part)
{
    arrChkIds.length = 0
    var dvP1 = document.getElementById("dvPeer1")
    var dv = document.getElementById("dvPeers")
    var dv1 = document.getElementById("dvSubmit")
    var dvSearch = document.getElementById("dvPGSearch")
    //dv1.innerHTML="<table width='350px' border ='0' cellspacing ='0'><tr><td align='left' style='padding:2px; color:#366;width:100%;'><input type='button' id='btnSave' value='Select' style='width:70px; cursor:pointer; height:25px;border:solid 1px #000;' onclick='javascript:Save(\""+Part+"\");'/>&nbsp;<input type='button' id='Cancel' value='Cancel' style='width:70px; cursor:pointer; height:25px;border:solid 1px #000;' onclick='javascript:CancelDiv();'/></td></tr></table>"
    dv1.innerHTML = "<table width='100%' border ='0' cellspacing ='0'><tr><td align='left' style='padding:1px; color:#366;width:20%;'><input type='button' id='btnSave' value='Select' style='width:70px; cursor:pointer; height:25px;border:solid 1px #000;' onclick='javascript:Save(\"" + Part + "\");'/>&nbsp;<input type='button' id='Cancel' value='Cancel' style='width:70px; cursor:pointer; height:25px;border:solid 1px #000;' onclick='javascript:CancelDiv();'/></td><td style = 'color:#366;font-weight:bold;vertical-align:top;'>&nbsp;Note:&nbsp;Values&nbsp;in&nbsp;bracket&nbsp;indicate&nbsp;ranking&nbsp;based&nbsp;on&nbsp;the&nbsp;latest&nbsp;quarter&nbsp;revenue.</td></tr></table>"
    var str = new Array(0)
    var strHtml = ""
    var arrScCd = new Array(0)
    var arrSrNo = new Array(0)
    var arrScNm = new Array(0)
    var arrTemp = new Array(0)
    var arrTempScCd = new Array(0)
    var rowsep = "#ROW#"
    var arrRows = ""
    var valuesep = "#@#"
    var hpgval = document.getElementById("hdnIdAssetPG").value
    var txtpg = document.getElementById("txtPG");
    txtpg.value = "Scrip Search";
    var newscd = "";
    if (hpgval != "") { newscd = hpgval.split("|")[0]; arrPeers[arrPeers.length] = newscd; }

    if (txt != "" || txt != "undefined")
    {
        arrPGCd = new Array(0);
        arrRows = txt.split(rowsep)
        for (var r = 0; r < arrRows.length; r++)
        {
            arrTempScCd[r] = arrRows[r].split(valuesep)[0]
            arrPGCd[r] = arrRows[r].split(valuesep)[0]
            str[r] = arrRows[r].split(valuesep)[1]
            arrSrNo[r] = arrRows[r].split(valuesep)[2]

        }
        var hdnpeer = document.getElementById("hdnPeer");
        if (hdnpeer.value.length > 0)
        {
            var txtp = hdnpeer.value;
            var arrp = txtp.split(rowsep);
            for (var t = 0; t < arrp.length; t++)
            {
                if (arrp[t].length > 0)
                {
                    var cd = arrp[t].split(valuesep)[0];
                    if (cd != "-")
                    {
                        arrTempScCd[arrTempScCd.length] = cd;
                        arrPGCd[arrPGCd.length] = arrp[t].split(valuesep)[0]
                        str[str.length] = arrp[t].split(valuesep)[1]
                    }
                }
            }

        }

        {
            arrChkIds.length = 0
            var colcnt = 0
            var rowcnt = 10
            var xtra = 0
            if (str.length >= 10)
            {
                colcnt = Math.round(str.length / rowcnt)
            }
            else
            {
                colcnt = 1
                rowcnt = str.length
                dv.style.height = "auto"
            }
            if (rowcnt * colcnt < str.length)
                colcnt = colcnt + 1
            strHtml = "<table style='background-color:#f0fefc;width:" + colcnt * 170 + "px;' border ='0'>"
            for (var row = 0; row < rowcnt; row++)
            {
                strHtml += "<tr>"
                for (var cell = 0; cell < colcnt; cell++)
                {
                    strHtml += "<td id='tdapg" + row.toString() + cell.toString() + "' style='width:200px; color:#366; height:25px; padding-left:25px; text-indent:-25px;'></td>"
                }
                strHtml += "</tr>"
            }
            strHtml += "</table>"
            if ((colcnt * 170) < 728)
            {
                dv.style.overflow = "hidden"; dv.style.borderBottom = "0"
            }
            else
            {
                dv.style.overflow = "auto"; dv.style.overflowY = "hidden"
            }
            dv.innerHTML = ""
            dv.innerHTML = strHtml
            var count = 0
            for (var chk = 0; chk < colcnt; chk++)
            {
                for (var fill = 0; fill < rowcnt; fill++)
                {
                    if (str[count] != "" && str[count] != undefined)
                    {
                        var bDone = false
                        if (arrSrNo[count] != undefined) { arrSrNo[count] = "[" + arrSrNo[count] + "]" } else arrSrNo[count] = "";

                        if (arrPeers.length >= 0)
                        {
                            for (var a = 0; a < arrPeers.length; a++)
                            {
                                if (arrPeers[a] == arrTempScCd[count])
                                {
                                    document.getElementById("tdapg" + fill.toString() + chk.toString()).innerHTML = "<input type='checkbox' id='chk" + fill.toString() + chk.toString() + "' value='" + arrTempScCd[count] + "' checked='checked' onclick='javascript:clicked(this.id,this.checked,this.value,\"" + Part + "\");' style='background-color:#f0fefc;'/>&nbsp;" + str[count] + "<span style = 'font-weight:bold;padding-left:4px'>" + arrSrNo[count] + "</span>";
                                    document.getElementById("tdapg" + fill.toString() + chk.toString()).style.backgroundColor = "#8AA"
                                    document.getElementById("tdapg" + fill.toString() + chk.toString()).style.color = "#fff"
                                    document.getElementById("tdapg" + fill.toString() + chk.toString()).style.fontWeight = "bold"
                                    bDone = true
                                }
                            }
                        }
                        if (a2 == arrTempScCd[count])
                        {
                            document.getElementById("tdapg" + fill.toString() + chk.toString()).innerHTML = "<input type='checkbox' id='chk" + fill.toString() + chk.toString() + "' value='" + arrTempScCd[count] + "' checked='checked' style='background-color:#f0fefc;' onclick='javascript:clicked(this.id,this.checked,this.value,\"" + Part + "\");'/>&nbsp;" + str[count] + "<span style = 'font-weight:bold;padding-left:4px'>" + arrSrNo[count] + "</span>";
                            document.getElementById("tdapg" + fill.toString() + chk.toString()).style.backgroundColor = "#8AA"
                            document.getElementById("tdapg" + fill.toString() + chk.toString()).style.color = "#fff"
                            document.getElementById("tdapg" + fill.toString() + chk.toString()).style.fontWeight = "bold"
                        }
                        else if (!bDone)
                        {
                            document.getElementById("tdapg" + fill.toString() + chk.toString()).innerHTML = "<input type='checkbox' id='chk" + fill.toString() + chk.toString() + "' value='" + arrTempScCd[count] + "' style='background-color:#f0fefc;' onclick='javascript:clicked(this.id,this.checked,this.value,\"" + Part + "\");'/>&nbsp;" + str[count] + "<span style = 'font-weight:bold;padding-left:4px'>" + arrSrNo[count] + "</span>";
                        }
                    }
                    else
                    {
                        document.getElementById("tdapg" + fill.toString() + chk.toString()).innerHTML = "&nbsp;"
                    }
                    count = count + 1
                    arrChkIds.length = arrChkIds.length + 1

                    arrChkIds[arrChkIds.length - 1] = fill.toString() + chk.toString()
                }
            }
        }
        if (str.length > 0 && str.length <= 10)
        {
            if (Part == "B")
            {
                dvP1.style.marginTop = "-404px"
            }
            else if (Part == "Q")
            {
                dvP1.style.marginTop = "-670px"; //dv1.style.marginTop=(-670)+dv.clientHeight+10+"px";dvSearch.style.marginTop=(-670)+dv.clientHeight+10+"px";
            }
            else if (Part == "A")
            {
                dvP1.style.marginTop = "-750px";
            }
        }
    }
    dv1.style.display = ""; dvSearch.style.display = "";
    if (arrTempScCd.length > 40 && newscd.length > 0)
    { dv.scrollLeft = (arrTempScCd.length - 5) * 20; }
}

function Save(Part)
{
    var hdnp = document.getElementById("hdnPeer");
    var searchpeer = hdnp.value;
    arrPeers.length = 0
    for (var a = 0; a < arrChkIds.length; a++)
    {
        if (document.getElementById('chk' + arrChkIds[a]) != null)
        {
            if (document.getElementById('chk' + arrChkIds[a]).checked == true)
            {
                if (a2 != document.getElementById('chk' + arrChkIds[a]).value.toString())
                {
                    arrPeers.length = arrPeers.length + 1
                    if (arrPeers.length > 4)
                    {
                        alert("You can select only 4 peers at a time");
                        return false;
                    }

                    arrPeers[arrPeers.length - 1] = document.getElementById('chk' + arrChkIds[a]).value.toString()
                }
            }
            else
            {

                if (searchpeer.indexOf(document.getElementById('chk' + arrChkIds[a]).value.toString()) > 0)
                {
                    searchpeer = searchpeer.toString().replace(document.getElementById('chk' + arrChkIds[a]).value.toString(), "-");
                }

            }
        }
    }
    hdnp.value = searchpeer;
    var str = ""
    var hpg = document.getElementById("hdnIdAssetPG"); hpg.value = "";
    for (var iArr = 0; iArr < arrPeers.length; iArr++)
    {
        if (arrPeers[iArr] != "")
            str += arrPeers[iArr] + ","
    }
    if (str != "")
        DispPeerGroup(a2 + "," + str.substring(0, str.length - 1), Part, 0)
    else
        DispPeerGroup(a2, Part, 0)
}

function CancelDiv()
{
    document.getElementById("dvPeers").style.display = "none"
    document.getElementById("dvSubmit").style.display = "none"
    document.getElementById("dvPGSearch").style.display = "none"
    document.getElementById("dvPeer1").style.display = "none"
}

function fSetTab(id)
{
    for (i = 1; i <6; i++)
    {
        if ("tab" + i == id)
        {
 
   
         document.getElementById(id + 1).className = "tabact_lft01"
            document.getElementById(id + 2).className = "tabact_rgt01"
            document.getElementById(id + 3).className = "tabact_ctr01"
            document.getElementById(id + 3).style.cursor = "default"
        }
        else
        {

  

            document.getElementById("tab" + i + 1).className = "tablink_lft01"
            document.getElementById("tab" + i + 2).className = "tablink_rgt01"
            document.getElementById("tab" + i + 3).className = "tablink_ctr01"
            document.getElementById("tab" + i + 3).style.cursor = "pointer"
        } 
    } 
}
var attrib = new Array(0)
function DisableTabs(id)
{
    for (i = 1; i < 6; i++)
    {
        if ("tab" + i == id) { }
        else
        {
            document.getElementById("tab" + i + 1).disabled = true
            document.getElementById("tab" + i + 2).disabled = true
            document.getElementById("tab" + i + 3).disabled = true
            document.getElementById("tab" + i).style.cursor = "default"

            document.getElementById("tab" + i + 1).style.cursor = "default"
            document.getElementById("tab" + i + 2).style.cursor = "default"
            document.getElementById("tab" + i + 3).style.cursor = "default"
            document.getElementById("tab" + i).removeAttribute("onclick")
        }
        if (i <= 5)
        {
            attrib[i] = document.getElementById("tab" + i).getAttribute("onclick")
            document.getElementById("tab" + i).setAttribute("onclick", "")
        } 
    } 
}
function EnableTabs()
{
    for (i = 1; i < 6; i++)
    {
        document.getElementById("tab" + i + 1).disabled = false
        document.getElementById("tab" + i + 2).disabled = false
        document.getElementById("tab" + i + 3).disabled = false
        if (i <= 4)
        {
            var tabid = "tab" + i
            if (document.getElementById("tab" + i).getAttribute("onclick") == "")
            {
                document.getElementById("tab" + i).setAttribute("onclick", attrib[i])
            } 
        } 
    } 
}

function fPGrpConvert(type)
{
    var str = new Array()
    var cnt = 1
    for (var i = 1; i <= idp; i++)
    {
        var obj = document.getElementById("tdp" + i)
        if (obj != null)
        {
            if (type == "C")
            {
                obj.innerHTML = PGValues[i]
            }
            if (type == "M")
            {
                var strval = obj.innerHTML
                if (strval != "--" && strval != undefined)
                {
                    obj.innerHTML = GetCommaFormatted(parseFloat(Number(strval.replace(/,/gi, "")) * 10).toFixed(2))
                }
            }
        }
        cnt++
    }
    if (type == "M")
    {
        document.getElementById("spnViewLink").innerHTML = "<a onclick=\"javascript:fPGrpConvert('C')\" style='cursor:pointer;color:#0067a2;'>View in (Cr.)</a>"
        document.getElementById("spnView").innerHTML = "(in Million)"
        document.getElementById("hdnPVal").value = "M"
    }
    else if (type == "C")
    {
        document.getElementById("spnViewLink").innerHTML = "<a onclick=\"javascript:fPGrpConvert('M')\" style='cursor:pointer;color:#0067a2;'>View in (Million)</a>"
        document.getElementById("spnView").innerHTML = "(in Cr.)"
        document.getElementById("hdnPVal").value = "C"
    }
}
function Addpeers()
{
    var pecnt = 0;
    var temppeer = arrPeers;
    var hpgval1 = document.getElementById("hdnIdAssetPG").value;
    newscd1 = hpgval1.split("|")[0];
    if (arrChkIds.length > 0)
        arrPeers = new Array(0);
    for (var b = 0; b < arrChkIds.length; b++)
    {
        if (document.getElementById('chk' + arrChkIds[b]) != null)
        {
            if (document.getElementById('chk' + arrChkIds[b]).checked)
            {
                arrPeers[b] = document.getElementById('chk' + arrChkIds[b]).value
                pecnt++;
            }
        }
    }
    if (pecnt == 0) { arrPeers = temppeer; arrPeers[arrPeers.length] = newscd1 }
}