var a2 = ""
function GetResultPage(id, sPF, isSR) {
	url = document.getElementById("hdnScripCode").value

 url = location.href
var a = url.split('/')
        
        scrpcode = a[9]


	if (url.length == 0) {
		if (location.href.indexOf('=') != -1) {
			url = location.href.substring(location.href.indexOf('=') + 1)
		}
	}
	if (document.getElementById("hdnScripCode").value.length > 0) {
		document.getElementById("td53").innerHTML = "Market"
		isSR = false
	}
	else {
		document.getElementById("td53").innerHTML = "Bulk"
		isSR = true
	}
	a2 = scrpcode
	GetResultData("../../../../../AdvStockReach.aspx?Page=" + id, scrpcode, id, sPF, isSR)
}
function GetResultData(page, scrip, id, sPF, chk) {
	for (var tdCnt = 1; tdCnt <= 5; tdCnt++) {
		var tdn = document.getElementById("ntd" + tdCnt);
		var tdr = document.getElementById("rtd" + tdCnt);
		if (tdn != null) { tdn.innerHTML = "&nbsp;"; } if (tdr != null) { tdr.innerHTML = "&nbsp;"; }
	}
	document.getElementById("dvdata").innerHTML = "<img src='../../../../../../Images/loading.gif' alt='Loading' style='vertical-align: middle' />&nbsp;Loading..."
	var rtabid = ""
	 rtabid = id
	 var requestUrl = page + "&scripcode=" + scrip + "&section=tab1&IsSR=" + chk + "&random=" + Math.random();
	  
	var xmlHttp1 = ajaxFunction()
	xmlHttp1.onreadystatechange = function() {
		if (xmlHttp1.readyState == 4) {
			var astr = xmlHttp1.responseText
			if (astr.indexOf('error') != -1) {
				document.getElementById("dvdata").innerHTML = "<div style='padding:25px 25px 25px 25px; font-size:12px;'>Due to technical reason data could not be refreshed.<br/><br/><a style = 'cursor:pointer;' onclick=\"javascript:GetResultPage('" + rtabid + "','',true);\" style='color:blue'>Click here to refresh the data</a></div>"
				DisableTabR(rtabid)
			}
			else {
				var str = astr.split("#Results#")
				if (str.length > 1) {
					EnableTabR()
					switch (id) {
						case "td1":
							fr1(str[1], sPF)
							break
						case "td2":
							fr2(str[1], sPF)
							break
						case "td3":
							fr3(str[1], sPF)
							break
						case "td4":
							fr4(str[1], sPF)
							break
						case "td5":
							{
								if (document.getElementById("hdnScripCode").value.length > 0)
									fr6(str[1], sPF)
								else
									fr5(str[1], sPF)
							}
							break
					}
					fActTabR(id)
				}
			}
		}
	}
	xmlHttp1.open("GET", requestUrl, true)
	xmlHttp1.send(null)
}
function SetTab(id, isSR) {
	fActTabR(id)
	SetSchema()
	GetResultPage(id, "", isSR)
}
function SetSchema() {
	if (document.getElementById("dvdata") != null) {
		var strdv = document.getElementById("dvdata")
		strdv.innerHTML = "<img src='../../../../../../Images/loading.gif' alt='Loading' style = 'vertical-align:middle'/>&nbsp;Loading..."
		document.getElementById("dvdata").style.height = "155px";
	}
}
var rvalues = new Array()
function fr1(str1, sPF) {
//debugger;
	document.getElementById("dvdata").style.height = "166px";
	if (str1.length > 0) {
		var str = str1.split("#@#")
		if (str[0] != "#Flag#") {
				var strdv = document.getElementById("dvdata")
				strdv.innerHTML = "<span class = 'more01' id  = 'dvRLink' style = 'padding-bottom: 2px;'><a style = 'cursor:pointer' onclick = \"javascript:frConvert('M')\">View in (Million)</a></span>";
				if (document.getElementById("hdnScripCode").value.length <= 0) {
				strdv.innerHTML += "<span class='more01' id='dvar' style='padding-bottom: 2px;padding-left:30px;padding-right:20px;'><a style = 'cursor:pointer' onclick = \"javascript:ActivateTab('tab2')\">Annual Reports</a></span>";
				strdv.innerHTML += "<span class='more01' align='right' style='padding-left:40px;text-align:right;'><a onclick=\"javascript:DisplayMore('Q');\" style='cursor:pointer;text-align:right;' align='right'>more</a></span>"
				}
				strdv.innerHTML += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02' style='float:left;'>" +
"<tr><td class='tdhead02' id='r00'>&nbsp;</td><td class='tdhead02' align='right' id='r01'></td><td class='tdhead02' align='right' id='r02'>" +
"</td><td class='tdhead02' align='right' id='r03'></td></tr><tr><td id='r10'></td>" +
"<td align='right' id='r11'></td><td align='right' id='r12'></td><td align='right' id='r13'></td></tr><tr><td id='r20'>" +
"</td><td align='right' id='r21'></td><td align='right' id='r22'></td><td align='right' id='r23'></td></tr><tr><td id='r30'>" +
"</td><td align='right' id='r31'></td><td align='right' id='r32'></td><td align='right' id='r33'></td></tr><tr><td id='r40'>" +
"</td><td align='right' id='r41'></td><td align='right' id='r42'></td><td align='right' id='r43'></td></tr><tr><td id='r50'>" +
"</td><td align='right' id='r51'></td><td align='right' id='r52'></td><td align='right' id='r53'></td></tr><tr><td id='r60'>" +
"</td><td align='right' id='r61'></td><td align='right' id='r62'></td><td align='right' id='r63'></td></tr></table>";
			if (str[0] != "#Flag#") {
				rvalues[1] = str[4]; rvalues[2] = str[5]; rvalues[3] = str[6]; rvalues[4] = str[8]; rvalues[5] = str[9]; rvalues[6] = str[10]
				document.getElementById("r00").innerHTML = "(in Cr.)"
				document.getElementById("r01").innerHTML = str[0]
				document.getElementById("r02").innerHTML = str[1]
				document.getElementById("r03").innerHTML = str[2]
				document.getElementById("r10").innerHTML = "<strong>" + str[3] + "</strong>"
				document.getElementById("r11").innerHTML = str[4]
				document.getElementById("r12").innerHTML = str[5]
				if (str[6] == "") var s = "0.00"; else s = str[6]
				document.getElementById("r13").innerHTML = s
				document.getElementById("r20").innerHTML = "<strong>" + str[7] + "</strong>"
				document.getElementById("r21").innerHTML = str[8]
				document.getElementById("r22").innerHTML = str[9]
				if (str[10] == "") var s1 = "0.00"; else s1 = str[10]
				document.getElementById("r23").innerHTML = s1
				document.getElementById("r30").innerHTML = "<strong>" + str[11] + "</strong>"
				document.getElementById("r31").innerHTML = str[12]
				document.getElementById("r32").innerHTML = str[13]
				if (str[14] == "") var s2 = "0.00"; else s2 = str[14]
				document.getElementById("r33").innerHTML = s2
				document.getElementById("r40").innerHTML = "<strong>" + str[15] + "</strong>"
				document.getElementById("r41").innerHTML = str[16]
				document.getElementById("r42").innerHTML = str[17]			
				document.getElementById("r43").innerHTML = str[18]
				document.getElementById("r50").innerHTML = "<strong>" + str[19] + "</strong>"
				//if (str[24] < 0) str[24] = "--"
				//if (str[25] < 0) str[25] = "--"
				/*if (str[26].substring(0, str[26].indexOf('#Flag#')) < 0) str[26] = "--"
				else
					str[26] = str[26].substring(0, str[26].indexOf('#Flag#'))*/
				document.getElementById("r51").innerHTML = str[20]
				document.getElementById("r52").innerHTML = str[21]
				
				if (str[22].indexOf('#Flag#') > 0)
					str[22] = str[22].substring(0, str[22].indexOf('#Flag#'))

				if (str[26].indexOf('#Flag#') > 0)
					str[26] = str[26].substring(0, str[26].indexOf('#Flag#'))

				
				/*if (str[22].substring(0, str[22].indexOf('#Flag#')) < 0) str[22] = "--"
				else
					str[22] = str[22].substring(0, str[22].indexOf('#Flag#'))*/

				document.getElementById("r53").innerHTML = str[22]

				if (str[23].indexOf('img')== -1)
				document.getElementById("r60").innerHTML = "<strong>" + str[23] + "</strong>"
				if (str[24].indexOf('img')== -1)
				document.getElementById("r61").innerHTML = str[24]				
				if (str[25].indexOf('img')== -1)
				document.getElementById("r62").innerHTML = str[25]
				if (str[26].indexOf('img')== -1)
				document.getElementById("r63").innerHTML = str[26]

				
				
				/*commented 04feb10*/
				/*document.getElementById("r50").innerHTML = "<strong>" + str[19] + "</strong>"
				if (str[24] < 0) str[24] = "--"
				if (str[25] < 0) str[25] = "--"

				if (str[22].substring(0, str[22].indexOf('#Flag#')) < 0) str[22] = "--"
				else
					str[22] = str[22].substring(0, str[22].indexOf('#Flag#'))


				if (str[26].substring(0, str[26].indexOf('#Flag#')) < 0) str[26] = "--"
				else
					str[26] = str[26].substring(0, str[26].indexOf('#Flag#'))
				document.getElementById("r51").innerHTML = str[20]
				document.getElementById("r52").innerHTML = str[21]
				document.getElementById("r53").innerHTML = str[22]
				document.getElementById("r60").innerHTML = "<strong>" + str[23] + "</strong>"
				document.getElementById("r61").innerHTML = str[24]
				document.getElementById("r62").innerHTML = "--"
				document.getElementById("r63").innerHTML = str[26]*/    
				frConvert('C')
				document.getElementById("hdnRVal").value = "C"
			}
		}
		else {
			document.getElementById("dvdata").innerHTML = "<div style='text-align:center;padding-top:60px; padding-bottom:60px;'>No Results Found</div>"
			 }
	}
	else
		document.getElementById("dvdata").innerHTML = "<div style='text-align:center;padding-top:60px; padding-bottom:60px;'>No Results Found</div>"

		if (str1.length > 0) {
			var sflag1 = str1.split("#Flag#")[1]
			var sflag = sflag1.split("#@#")
			document.getElementById("ntd1").innerHTML = sflag[0]
			document.getElementById("ntd2").innerHTML = sflag[1]
			document.getElementById("ntd3").innerHTML = sflag[2]
			document.getElementById("ntd4").innerHTML = sflag[3]
			document.getElementById("ntd5").innerHTML = sflag[4]
			document.getElementById("rtd1").innerHTML = sflag[5]
			document.getElementById("rtd2").innerHTML = sflag[6]
			document.getElementById("rtd3").innerHTML = sflag[7]
			document.getElementById("rtd4").innerHTML = sflag[8]
			document.getElementById("rtd5").innerHTML = sflag[9]
		}

}
function fr2(str1, sPF) {
	document.getElementById("dvdata").style.height = "155px";
	if (str1.length > 0) {
		var sflag1 = str1.split("#Flag#")[1]
		var sflag = sflag1.split("#@#")
		document.getElementById("ntd1").innerHTML = sflag[0]
		document.getElementById("ntd2").innerHTML = sflag[1]
		document.getElementById("ntd3").innerHTML = sflag[2]
		document.getElementById("ntd4").innerHTML = sflag[3]
		document.getElementById("ntd5").innerHTML = sflag[4]
		document.getElementById("rtd1").innerHTML = sflag[5]
		document.getElementById("rtd2").innerHTML = sflag[6]
		document.getElementById("rtd3").innerHTML = sflag[7]
		document.getElementById("rtd4").innerHTML = sflag[8]
		document.getElementById("rtd5").innerHTML = sflag[9]
	}
	if (str1.length > 0 && str1.split("#Flag#")[0] != "") {
			var strdv = document.getElementById("dvdata")
			strdv.innerHTML = ""
			if (document.getElementById("hdnScripCode").value.length <= 0) {
				strdv.innerHTML += "<div class='more01' style='padding-bottom:2px;' align='right'><a onclick='DisplayMoreSHP()' style='cursor:pointer'>more</a></div>"
			}
			strdv.innerHTML += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>" +
"<tr><td class='tdhead02'>(in %)</td><td class='tdhead02' align='right' id='shp01'></td><td class='tdhead02' align='right' id='shp02'>" +
"</td><td class='tdhead02' align='right' id='shp03'></td></tr><tr><td id='shp10'></td><td align='right' id='shp11'></td>" +
"<td align='right' id='shp12'></td><td align='right' id='shp13'></td></tr><tr><td id='shp20'>" +
"</td><td align='right' id='shp21'></td><td align='right' id='shp22'></td><td align='right' id='shp23'></td></tr>" +
"<tr><td id='shp30'></td><td align='right' id='shp31'></td><td align='right' id='shp32'></td><td align='right' id='shp33'></td></tr>" +
"<tr><td id='shp40'></td><td align='right' id='shp41'></td><td align='right' id='shp42'></td><td align='right' id='shp43'></td></tr>" +
"<tr><td id='shp50'></td><td align='right' id='shp51'></td><td align='right' id='shp52'></td><td align='right' id='shp53'></td></tr></table>"
		var str = str1.split("#@#")
		document.getElementById("shp01").innerHTML = str[0]
		document.getElementById("shp02").innerHTML = str[1]
		document.getElementById("shp03").innerHTML = str[2]
		document.getElementById("shp10").innerHTML = "<strong>" + str[3] + "</strong>"
		document.getElementById("shp11").innerHTML = str[4]
		document.getElementById("shp12").innerHTML = str[5]
		document.getElementById("shp13").innerHTML = str[6]
		document.getElementById("shp20").innerHTML = "<strong>" + str[7] + "</strong>"
		document.getElementById("shp21").innerHTML = str[8]
		document.getElementById("shp22").innerHTML = str[9]
		document.getElementById("shp23").innerHTML = str[10]
		document.getElementById("shp30").innerHTML = "<strong>" + str[11] + "</strong>"
		document.getElementById("shp31").innerHTML = str[12]
		document.getElementById("shp32").innerHTML = str[13]
		document.getElementById("shp33").innerHTML = str[14]
		document.getElementById("shp40").innerHTML = "<strong>" + str[15] + "</strong>"
		document.getElementById("shp41").innerHTML = str[16]
		document.getElementById("shp42").innerHTML = str[17]
		document.getElementById("shp43").innerHTML = str[18]
		document.getElementById("shp50").innerHTML = "<strong>" + str[19] + "</strong>"
		document.getElementById("shp51").innerHTML = str[20]
		document.getElementById("shp52").innerHTML = str[21]
		document.getElementById("shp53").innerHTML = str[22].substring(0, str[22].indexOf('#Flag#'))
	}
   else {
				document.getElementById("dvdata").innerHTML = "<div style='text-align:center;padding-top:60px; padding-bottom:60px;'>No SHP Found</div>"
	}
}
function fr3(str1, sPF) {
	document.getElementById("dvdata").style.height = "155px";
	if (str1.length > 0) {
		var sflag1 = str1.split("#Flag#")[1]
		var sflag = sflag1.split("#@#")
		document.getElementById("ntd1").innerHTML = sflag[0]
		document.getElementById("ntd2").innerHTML = sflag[1]
		document.getElementById("ntd3").innerHTML = sflag[2]
		document.getElementById("ntd4").innerHTML = sflag[3]
		document.getElementById("ntd5").innerHTML = sflag[4]
		document.getElementById("rtd1").innerHTML = sflag[5]
		document.getElementById("rtd2").innerHTML = sflag[6]
		document.getElementById("rtd3").innerHTML = sflag[7]
		document.getElementById("rtd4").innerHTML = sflag[8]
		document.getElementById("rtd5").innerHTML = sflag[9]
	}
	if (str1.length > 0 && str1.split("#Flag#")[0] != "") {
			var strdv = document.getElementById("dvdata")
			strdv.innerHTML = ""
			if (document.getElementById("hdnScripCode").value.length <= 0) {
				strdv.innerHTML += "<div class='more01' align='right' style='padding-bottom:2px;'><a href='http://www.bseindia.com/mktlive/ScripWiseCorpAction.asp?scripcd=" + a2 + "' target='_blank' style='cursor:pointer'>Archives</a></div>"
			}
			strdv.innerHTML += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>" +
"<tr><td class='tdhead02' align='Left'>Date</td><td class='tdhead02' align='Left'>Purpose</td></tr>" +
"<tr><td align='Left' id='CA00'></td><td align='Left' id='CA01'></td></tr>" +
"<tr><td align='Left' id='CA10'></td><td align='Left' id='CA11'></td></tr>" +
"<tr><td align='Left' id='CA20'></td><td align='Left' id='CA21'></td></tr>" +
"<tr><td align='Left' id='CA30'></td><td align='Left' id='CA31'></td></tr>" +
"<tr><td align='Left' id='CA40'></td><td align='Left' id='CA41'></td></tr></table>"
		var str = str1.split("#@#")
		document.getElementById("CA00").innerHTML = str[0]
		document.getElementById("CA01").innerHTML = str[1]
		document.getElementById("CA10").innerHTML = str[2]
		document.getElementById("CA11").innerHTML = str[3]
		document.getElementById("CA20").innerHTML = str[4]
		document.getElementById("CA21").innerHTML = str[5]
		document.getElementById("CA30").innerHTML = str[6]
		document.getElementById("CA31").innerHTML = str[7]
		document.getElementById("CA40").innerHTML = str[8]
		document.getElementById("CA41").innerHTML = str[9].substring(0, str[9].indexOf('#Flag#'))
	}
	else {

			if (document.getElementById("hdnScripCode").value.length <= 0) {
				document.getElementById("dvdata").innerHTML = "<div class='more01' align='right'><a href='http://www.bseindia.com/mktlive/ScripWiseCorpAction.asp?scripcd=" + a2 + "' target='_blank' style='cursor:pointer'>Archives</a></div>"+
				"<div style='text-align:center;padding-top:60px;'>No Corporate Actions</div>"
			}
			else
			document.getElementById("dvdata").innerHTML = "<div style='text-align:center;padding-top:60px;'>No Corporate Actions</div>"
	}
}
function fr4(str1, sPF) {
	document.getElementById("dvdata").style.height = "155px";
	var strInner = ""
	if (str1.length > 0) {
		var sflag1 = str1.split("#Flag#")[1]
		var sflag = sflag1.split("#@#")
		document.getElementById("ntd1").innerHTML = sflag[0]
		document.getElementById("ntd2").innerHTML = sflag[1]
		document.getElementById("ntd3").innerHTML = sflag[2]
		document.getElementById("ntd4").innerHTML = sflag[3]
		document.getElementById("ntd5").innerHTML = sflag[4]
		document.getElementById("rtd1").innerHTML = sflag[5]
		document.getElementById("rtd2").innerHTML = sflag[6]
		document.getElementById("rtd3").innerHTML = sflag[7]
		document.getElementById("rtd4").innerHTML = sflag[8]
		document.getElementById("rtd5").innerHTML = sflag[9]
	}
	if (str1.length > 0 && str1.split("#Flag#")[0] != "") {

			var strdv = document.getElementById("dvdata")
			var strPre = ""
			if (document.getElementById("hdnScripCode").value.length <= 0) {
				strPre += "<div class='more01' align='right' style='padding-bottom:2px;'><a href='http://www.bseindia.com/stockinfo/anncomp.aspx?scripcode=" + a2 + " &type1=1' target='_blank' style='cursor:pointer'>Archives</a></div>"
			}
			strPre += "<div align='left' class='tdhead02'>News</div>" +
"<div style='height:125px;overflow:auto;overflow-x:hidden;scrollbar-3dlight-color:#ccc;scrollbar-highlight-color:#f1f1f1;scrollbar-arrow-color:#999;scrollbar-base-color:#ccc;scrollbar-darkshadow-color:#f1f1f1;scrollbar-face-color:#f1f1f1;scrollbar-track-color:#e5e5e5'>" +
"<table border='0' cellspacing='0' cellpadding='0' class='table02'>"
			var str = str1.split("#@#")
			for (i = 0; i < str.length - 11; i += 3) {
				if (str[i] != null && str[i] != "") {
					if (i == 12) {
						strInner += "<tr><td valign='top' style='padding-top:8px;'><img src='../../../../../../Includes/Images/bullet02.gif' /></td>" +
"<td><a href='" + str[i + 2].substring(0, str[i + 2].indexOf('#Flag#')) + "' id='n1' target='_blank'>" + str[i] + "</a></td>" +
"<td valign='top'>" + str[i + 1] + "</td></tr>"
					} else {
						strInner += "<tr><td valign='top' style='padding-top:8px;'><img src='../../../../../../Includes/Images/bullet02.gif' /></td><td><a href='" + str[i + 2] + "' id='n1' target='_blank'>" + str[i] + "</a></td>" +
"<td valign='top'>" + str[i + 1] + "</td></tr>"
					}
				}
			}
			var strPost = "</table></div>";
			strdv.innerHTML = strPre + strInner + strPost
		 var strPost = "</table>"
			strdv.innerHTML =  strPre + strInner + strPost
	}
	else {

			if (document.getElementById("hdnScripCode").value.length <= 0) {
				document.getElementById("dvdata").innerHTML = "<div class='more01' align='right'><a href='http://www.bseindia.com/stockinfo/anncomp.aspx?scripcode=" + a2 + " &type1=1' target='_blank' style='cursor:pointer'>Archives</a></div>"+
				"<div style='text-align:center;padding-top:60px;'>No News Found</div>"
			}
			else
			document.getElementById("dvdata").innerHTML = "<div style='text-align:center;padding-top:60px;'>No News Found</div>"
	}
}
function fr5(str1, sPF) {
	document.getElementById("dvdata").style.height = "155px";
	if (str1.length > 0) {
		var sflag1 = str1.split("#Flag#")[1]
		var sflag = sflag1.split("#@#")
		document.getElementById("ntd1").innerHTML = sflag[0]
		document.getElementById("ntd2").innerHTML = sflag[1]
		document.getElementById("ntd3").innerHTML = sflag[2]
		document.getElementById("ntd4").innerHTML = sflag[3]
		document.getElementById("ntd5").innerHTML = sflag[4]
		document.getElementById("rtd1").innerHTML = sflag[5]
		document.getElementById("rtd2").innerHTML = sflag[6]
		document.getElementById("rtd3").innerHTML = sflag[7]
		document.getElementById("rtd4").innerHTML = sflag[8]
		document.getElementById("rtd5").innerHTML = sflag[9]
	}
	if (str1.length > 0 && str1.split("#Flag#")[0] != "") {
			var strdv = document.getElementById("dvdata")
			if (document.getElementById("hdnScripCode").value.length <= 0) {
				//strdv.innerHTML = "<div class='more01' align='right' style='padding-bottom:2px;'><a href='http://www.bseindia.com/histdata/bulkdeals2.asp?scripcd=" + a2 + " &dflag=0&bulkblock=bulk' target='_blank' style='cursor:pointer'>Archives</a></div>"
				  strdv.innerHTML = "<div class='more01' align='right' style='padding-bottom:2px;'><a href='http://www.bseindia.com/stockinfo/BulknBlockDeals.aspx?scripcd=" + a2 + "' target='_blank' style='cursor:pointer'>Archives</a></div>"
			}
  strdv.innerHTML = "<div class='more01' align='right' ><a href='http://www.bseindia.com/stockinfo/BulknBlockDeals.aspx?scripcd=" + a2 + "'>Archives</a></div>"
strdv.innerHTML += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>" +
"<tr><td class='tdhead02' align='left'>DealDate</td><td class='tdhead02' align='center'>Type</td><td class='tdhead02' align='center'>" +
"Qty</td><td class='tdhead02' align='center'>Rate</td><td class='tdhead02' align='center'>T/O (Cr.)</td></tr>" +
"<tr><td id='b00'></td><td align='center' id='b01'></td><td align='right' id='b02'></td>" +
"<td align='right' id='b03'></td><td align='right' id='b04'></td></tr>" +
"<tr><td id='b10'></td><td align='center' id='b11'></td><td align='right' id='b12'></td>" +
"<td align='right' id='b13'></td><td align='right' id='b14'></td></tr>" +
"<tr><td id='b20'></td><td align='center' id='b21'></td><td align='right' id='b22'></td>" +
"<td align='right' id='b23'></td><td align='right' id='b24'></td></tr>" +
"<tr><td id='b30'></td><td align='center' id='b31'></td><td align='right' id='b32'></td>" +
"<td align='right' id='b33'></td><td align='right' id='b34'></td>" +
"<tr><td id='b40'></td><td align='center' id='b41'></td><td align='right' id='b42'></td>" +
"<td align='right' id='b43'></td><td align='right' id='b44'></td></tr></table>"
		var str = str1.split("#@#")
		document.getElementById("b00").innerHTML = str[0]
		document.getElementById("b01").innerHTML = str[1]
		document.getElementById("b02").innerHTML = str[2]
		document.getElementById("b03").innerHTML = str[3]
		document.getElementById("b04").innerHTML = str[4]
		document.getElementById("b10").innerHTML = str[5]
		document.getElementById("b11").innerHTML = str[6]
		document.getElementById("b12").innerHTML = str[7]
		document.getElementById("b13").innerHTML = str[8]
		document.getElementById("b14").innerHTML = str[9]
		document.getElementById("b20").innerHTML = str[10]
		document.getElementById("b21").innerHTML = str[11]
		document.getElementById("b22").innerHTML = str[12]
		document.getElementById("b23").innerHTML = str[13]
		document.getElementById("b24").innerHTML = str[14]
		document.getElementById("b30").innerHTML = str[15]
		document.getElementById("b31").innerHTML = str[16]
		document.getElementById("b32").innerHTML = str[17]
		document.getElementById("b33").innerHTML = str[18]
		document.getElementById("b34").innerHTML = str[19]
		document.getElementById("b40").innerHTML = str[20]
		document.getElementById("b41").innerHTML = str[21]
		document.getElementById("b42").innerHTML = str[22]
		document.getElementById("b43").innerHTML = str[23]
		document.getElementById("b44").innerHTML = str[24].substring(0, str[24].indexOf('#Flag#'))
	}
	else {
			if (document.getElementById("hdnScripCode").value.length <= 0) {
				//document.getElementById("dvdata").innerHTML = "<div class='more01' align='right'><a href='http://www.bseindia.com/histdata/bulkdeals2.asp?scripcd=" + a2 + " &dflag=0&bulkblock=bulk' target='_blank' style='cursor:pointer'>Archives</a></div>"+
document.getElementById("dvdata").innerHTML = "<div class='more01' align='right'><a href='http://www.bseindia.com/stockinfo/BulknBlockDeals.aspx?scripcd=" + a2 + "' target='_blank' style='cursor:pointer'>Archives</a></div>"+
				"<div style='text-align:center;padding-top:60px;'>No bulk deal recorded since last two years</div>"
			}
			else
			document.getElementById("dvdata").innerHTML = "<div style='text-align:center;padding-top:60px;'>No bulk deal recorded since last two years</div>"
	}
}
function fr6(str1, sPF) {
	if (str1.length > 0) {
		var str = str1.split("#@#")
		document.getElementById("dvdata").style.height = "155px";
			document.getElementById("dvdata").style.height = "auto";
			var strdv = document.getElementById("dvdata")
			strdv.innerHTML = "<div style='background-color:White;'>" +
"<div align='left' style='background-color:White;color:#219588;padding-bottom:4px;'>" +
"<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>" +
"<tr><td colspan='4' style='color:#219588; background-color:#f1f1f1;'><strong>  Spurt in Volume</strong>&nbsp;&nbsp;<img src='../../../../../../Images/arrow01.gif' /></td></tr>" +
"<tr><td align='right'><strong>Volume</strong></td><td align='right'><strong>2Wk Avg</strong></td><td align='right'><strong>Multiple</strong></td><td align='right'><strong>Date</strong></td></tr>" +
"<tr><td style='border-bottom:none;' align='right'>" + str[0] + "</td><td style='border-bottom:none;' align='right'>" + str[1] + "</td><td style='border-bottom:none;' align='right'>" + str[2] + "</td><td style='border-bottom:none;' align='right'>" + str[3] + "</td></tr></table></div>" +
"<div align='left' style='background-color:White;color:#219588;padding-bottom:4px;'>" +
"<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>" +
"<tr><td colspan='2' style='color:#219588; background-color:#f1f1f1;'><strong> 52 Week High / Low</strong>&nbsp;&nbsp;<img src='../../../../../../Images/arrow01.gif' /></td></tr>" +
"<tr><td width='100px;' align='right'><strong>52 Wk H/L Value</strong></td><td align='right'><strong>52 Wk H/L Date</strong></td></tr>" +
"<tr><td style='border-bottom:none;' align='right'>" + str[4] + " / " + str[5] + "</td><td style='border-bottom:none;' align='right'>" + str[6] + " / " + str[7] + " </td></tr></table></div>" +
"<div align='left' style='background-color:White;'>" +
"<table width='100%' border='0' cellspacing='0' cellpadding='0' class='table02'>" +
"<tr><td colspan='3' style='color:#219588; background-color:#f1f1f1;'><strong> Circuit Limit Upper / Lower</strong>&nbsp;&nbsp;<img src='../../../../../../Images/arrow01.gif' /></td></tr>" +
"<tr><td width='80px;' align='right'><strong>Circuit Value</strong></td><td width='60px;' align='right'><strong>%</strong></td><td align='right'><strong>Date</strong></td></tr>" +
"<tr><td style='border-bottom:none;' align='right'>" + str[8] + " / " + str[9] + "</td><td style='border-bottom:none;' align='right'>" + str[10] + "</td><td style='border-bottom:none;' align='right'>" + str[11].substring(0, str[11].indexOf('#Flag#')) + "</td></tr></table></div></div>"
			var sflag1 = str1.split("#Flag#")[1]
			var sflag = sflag1.split("#@#")
			document.getElementById("ntd1").innerHTML = sflag[0]
			document.getElementById("ntd2").innerHTML = sflag[1]
			document.getElementById("ntd3").innerHTML = sflag[2]
			document.getElementById("ntd4").innerHTML = sflag[3]
			document.getElementById("ntd5").innerHTML = sflag[4]
			document.getElementById("rtd1").innerHTML = sflag[5]
			document.getElementById("rtd2").innerHTML = sflag[6]
			document.getElementById("rtd3").innerHTML = sflag[7]
			document.getElementById("rtd4").innerHTML = sflag[8]
			document.getElementById("rtd5").innerHTML = sflag[9]

	}
	else {
			document.getElementById("dvdata").innerHTML = "<div style='text-align:center;padding-top:60px;'>No bulk deal recorded since last two years</div>"
	}
}
function DisplayMore(CmpType) {
	document.getElementById("dvDispeq").style.display = "none"
	document.getElementById("dvDisp").style.display = "none"
	document.getElementById("dvPeerGrp").style.display = "none"
	document.getElementById("dvChart").style.display = "none"
	document.getElementById("dvMore").style.display = "block"
	document.getElementById('imgref').style.visibility = "hidden"
	document.getElementById('imgPrint').style.visibility = "hidden"
	if (timer != "") {
		clearInterval(timer)
		timer = ""
	}
	document.getElementById("dvMore").innerHTML = "<div style='height:650px;'><img src='../../../../../../Images/loading.gif' alt='Loading' style = 'vertical-align:middle'/>&nbsp;&nbsp;Loading...</div>"
	var requestUrl = "http://www.bseindia.com/bseplus/StockReach/StockReachData.aspx?&scripcode=" + a2 + "&section=Results&type=" + CmpType + "&random=" + Math.random()
	var xmlHttp2 = ajaxFunction()
	xmlHttp2.onreadystatechange = function() {
		if (xmlHttp2.readyState == 4) {
			var astr = xmlHttp2.responseText
			if (astr.split('#$#')[0] == 'BsePlus') {
				var strdata = astr.split('#$#')[1].split("#Section#")
				var strcol = strdata[0].split("#@#")
				var strRowData = strdata[1]
				var scrnm = strdata[2];var strLnks = strdata[3];
				if (strRowData != null && strRowData != undefined) {
					switch (CmpType) {
						case "Q":
							{
								//fqMore(strcol, strRowData)
								fqMore(strcol,strRowData,scrnm,strLnks);
							}
							break
						case "A":
							{
								//faMore(strcol, strRowData)
								faMore(strcol, strRowData,scrnm,strLnks)
							}
							break
					}
				}
			}
			else {
				document.location.href = "../InvalidUrl.htm?Page=Invalid_Data"
			}
		}
	}
	xmlHttp2.open("GET", requestUrl, true)
	xmlHttp2.send(null)
}
var id = 0
var resValues = new Array()
function fqMore(strcol, strRowData,scrnm,strlnks) {
//debugger;
	var strMoreData = "", strHead = "", strLinks = "", Type = "", ceps = "", pe = "", pb = "", bv = ""
	if (strcol[12] == "CEPS") {
		ceps = 13
		pe = 14
		pb = 15
		bv = 15
	}
	else {
		ceps = 11
		pe = 12
		pb = 13
		bv = 14
	}

    var strArchive = "<a href='http://www.bseindia.com/qresann/result.asp?scripcd=" + a2 + "' target='_blank' style='cursor:pointer;'>Prior&nbsp;Period</a>"


	strLinks += "<div align='right'><img src='../../../../../../Images/close.gif' alt='Close' style='cursor:pointer;' onclick='closeMore();'></div>"
	/*strHead += "<div id='dvQuart' style='margin-bottom:0px;padding-bottom:0px;' align='left'>" +
"<table border='0' width='100%'><tr><td><table border='0'><tr><td style='padding-left:0px;'><div id='dvPGHeading' style='font-size:15px;font-weight:bold;'>Quarterly Trends&nbsp;&nbsp;</div></td>" +
"<td><div id='divLink' class='more01' style='font-size:14px;'>" +
"<a onclick = \"javascript:DisplayMore('A');\"  id='aAnnual' style='cursor:pointer;'>Annual Trends</a></div></td></tr></table></td>" +
"<td align='right'><div id='dvViewLink' align='right' class='more01' style='font-size:12px;'><a onclick=\"javascript:fresConvert('M','Q')\" style='cursor:pointer;'>View in (Million)</a></div></td>" +
"</div>"*/

strHead += "<div id='dvQuart' style='margin-bottom:0px;padding-bottom:0px;' align='left'>" +
"<table border='0' width='98%'><tr><td width = '70%'><table border='0'><tr><td style='padding-left:0px;'><div id='dvPGHeading' style='font-size:15px;font-weight:bold;'>Quarterly Trends&nbsp;&nbsp;</div></td>" +
"<td><div id='divLink' class='more01' style='font-size:14px;'>" +
"<a onclick = \"javascript:DisplayMore('A');\"  id='aAnnual' style='cursor:pointer;'>Annual Trends</a></div></td></tr></table></td>" +
"<td align='right' class='more01' style='font-size:12px;' id = 'dvViewLink'><a onclick=\"javascript:fresConvert('M','Q')\" style='cursor:pointer;'>View in (Million)</a></td><td align='center' class='more01' style='font-size:12px;' width = '10%'>" + strArchive +"</td>"
"</div>"

	if (strRowData != "") {
		var rowid = 0
		id = 0
		var strRows = strRowData.split("#ROW#")
		var str = strRows[0].split("#@#")
		var colspan = parseInt(str.length)
		strMoreData += "<div><table id='tblResMore' border = '0' cellpadding = '0' cellspacing = '0' class='loginpanel01 table01' style='border:0px;margin:0px;padding:0px;margin-bottom:2px;'>"
		for (var i = 0; i < str.length - 1; i++) {
			if (i == 0) strMoreData += "<tr><td id = 'tdres" + rowid + "' class='tdmoreheader' style='width:185px;padding-top:5px;padding-left:4px;border-right:1px solid #fff; color:#fff;text-align:left;padding-right:0px;'>(in Cr.)</td>"
			if (i == str.length - 2) strMoreData += "<td class='tdmoreheader' style='padding-top:5px;width:110px;border-right:1px solid #fff; color:#fff'>" + str[i] + " (Annual)" + "</td>"
			else strMoreData += "<td class='tdmoreheader' style='padding-top:5px;width:110px;border-right:1px solid #fff; color:#fff'>" + str[i] + "</td>"
		}
		strMoreData += "</tr>"
		strMoreData += "<tr><td colspan = '" + colspan + "' class='tdhead03 tdsubhead' style='padding-top:5px;padding-left:4px;'>Income Statement</td></tr>"
		
		var convrowQ=11;
		//for bank
		if (strcol[10]=="CAR%"){convrowQ=9;}

		for (var i = 1; i < strRows.length - 1; i++) {
			var str = strRows[i].split("#@#")
			rowid += 1
			//if(i==strRows.length-2){
			//for(k=0;k<str.length-1;k++){
			//if(str[k]<0)
			//str[k]="--"}
			//for(var l=1;l<str.length-2;l++){
			//str[l]="--"}}
			
			
			/*if (i == ceps || i == pe || i == pb) {
				for (k = 0; k < str.length - 1; k++) {
					if (str[k] < 0)
						str[k] = "--"
						}
				}*/
				/*commented 04feb10
				if (i == pe || i == pb || i == bv) {
					for (var l = 1; l < str.length - 2; l++) {
						str[l] = "--"
					}
				}*/
			for (var j = 0; j < str.length - 1; j++) {
				//if (i <= 11) id += 1 
				if (i <= convrowQ) id += 1
				if (j == 0) strMoreData += "<tr><td id = 'tdres" + rowid + "' class='tdrowhead' style='width:185px;padding-top:5px;padding-left:30px;padding-right:0px;'>&nbsp;</td>"
				strMoreData += "<td id='tdr" + id + "' class='tdrows' style='padding-top:5px;width:110px;'>" + str[j] + "</td>"
			}
			if (strcol[i] == "Equity")
				var indRat = i + 1;
			else if (strcol[i] == "BV")
				var indPRat = i + 1
			else if (strcol[i] == "Interest Earned")
				var indLRat = i + 1
			else if (strcol[i] == "Operating Leverage")
				var indIRat = i + 1
			else if (strcol[i] == "Non-operating Income to Net Profit")
				var indYRat = i + 1
				//var indDRat = i + 1
//            else if (strcol[i] == "Dividend Payout")
//                var indYRat = i + 1

            
			//if(i==11)strMoreData+="<tr><td colspan = '"+colspan+"' class='tdhead03 tdsubhead' style='padding-top:5px;padding-left:4px;'>Ratios</td></tr>"
			/*commented 04feb10*/
			/*if (i == indRat) strMoreData += "<tr><td colspan = '" + colspan + "' class='tdhead03 tdsubhead' style='padding-top:5px;padding-left:4px;'>Ratios</td></tr><tr><td colspan = '" + colspan + "' class='tdhead03' style='padding-top:5px;padding-left:30px;background-color:rgb(230,245,240)'><strong>Earnings Ratios</strong></td></tr>"
			else if (i == indPRat) strMoreData += "<tr><td colspan = '" + colspan + "' class='tdhead03' style='padding-top:5px;padding-left:30px;background-color:rgb(230,245,240);'><strong>Profitability Ratios</strong></td></tr>"
			else if (i == indLRat) strMoreData += "<tr><td colspan = '" + colspan + "' class='tdhead03' style='padding-top:5px;padding-left:30px;background-color:rgb(230,245,240);'><strong>Leverage Ratios</strong></td></tr>"
			else if (i == indIRat) strMoreData += "<tr><td colspan = '" + colspan + "' class='tdhead03' style='padding-top:5px;padding-left:30px;background-color:rgb(230,245,240);'><strong>Income Ratios</strong></td></tr>"
			//else if (i == indDRat) strMoreData += "<tr><td colspan = '" + colspan + "' class='tdhead03' style='padding-top:5px;padding-left:30px;background-color:rgb(230,245,240);'><strong>Dividend Ratios</strong></td></tr>"
			else if (i == indYRat) strMoreData += "<tr><td colspan = '" + colspan + "' class='tdhead03' style='padding-top:5px;padding-left:30px;background-color:rgb(230,245,240);'><strong>Qtr on Qtr Growth Ratios</strong></td></tr>"
            */
			if (j == str.length - 1) strMoreData += "</tr>"
		}
		/*Change02feb10*/
		//Results Links at bottom
		var astyle = "color:#0067a2;font-weight:normal;text-decoration:underline;";
	    var td1 = "<td class='tdrows' style='padding-top:5px;width:110px;text-align:center'>";
		var lnkarr = strlnks.split("#ROW#")
		var scrdata = scrnm.split("#@#")
		var scrcd = scrdata[0]; var scrn = scrdata[1];
		var det ="",cons ="",seg="";
		var qtr = lnkarr[3].split("#@#");
		var qtrcd = lnkarr[0].split("#@#");
		var detchk = lnkarr[4].split("#@#");
		var tw = (colspan - 1) * 118 + 185 + 'px';
		var tbl ="";
		//var tbl = "<table cellpadding = '0' cellspacing ='0' border = '0' style = 'width:" + tw +";border:0px;margin:0px;padding:0px;margin-bottom:2px;' class='loginpanel01 table01' >";
		for (var a =0; a<lnkarr.length-3; a++)
		{
		    strlnk1 = lnkarr[a].split("#@#");	
		    tbl+= "<tr><td class='tdrowhead' style='width:185px;padding-top:5px;padding-left:40px;padding-right:0px;'>&nbsp;</td>";
		    for (var b=0; b<strlnk1.length -1; b++)
		    {
		    if (a == 0)
		    {
		        if (detchk[b]=="1" && (parseInt(qtrcd[b],0)>55))
		        det= td1+"<a style="+astyle+" target ='_blank' href='http://www.bseindia.com/qresann/detailedresult.asp?scrip_cd=" + scrcd + "&compname=" + scrn + "&qtr=" + qtrcd[b] + "'>Detailed</a></td>";
		        else
		        det= td1+"--</td>";
		        tbl+= det;
		    }
		    if (a==1)
		    {
		        if (strlnk1[b]== "1")
		        {
		            if (parseInt(qtrcd[b],0)>55)
		            {cons=td1+"<a style="+astyle+" target ='_blank' href = 'http://www.bseindia.com/qresann/detailedresult_cons.asp?scrip_cd=" + scrcd + "&qtr=" + qtrcd[b] + "&compname=" + scrn
	                + "&quarter=" + qtr[b] + "&checkcons=55'>Consolidated </a></td>";}
	                else
	                {cons=td1+"<a style="+astyle+" target ='_blank' href = 'http://www.bseindia.com/qresann/resultCommulative.asp?scripcd=" + scrcd + "&quarter=" + qtrcd[b] + "&scripname=" + scrn 
	                + "&type=" + qtr[b] + "'>Consolidated</a></td>";}
	            }
		        else cons = td1+"--</td>";
		        tbl+=cons;
		    }
		    if (a==2)
		    {
		        if (strlnk1[b]== "1")
		            seg= td1+"<a style="+astyle+" target ='_blank' href = 'http://www.bseindia.com/qresann/Segmentresult.asp?scripcd=" + scrcd + "&scripname=" + scrn + "&quarter=" + qtrcd[b] + "&type=" + qtr[b] + "'>Segment</a></td>";
		        else seg = td1+"--</td>";
		        tbl+= seg;
		    }
		    }
		    tbl+="</tr>";
		}		
		strMoreData += tbl + "</table></div>"
		
		
		
		
		/*strMoreData += "</table></div>"*/
		
		//var strArchive = "<div class='more01' align='right' style='font-size:12px;'><a href='http://www.bseindia.com/qresann/result.asp?scripcd=" + a2 + "' target='_blank' style='cursor:pointer;'>Archives</a></div>"
		//document.getElementById("dvMore").innerHTML = strLinks + strHead + strMoreData + strArchive
		document.getElementById("dvMore").innerHTML = strLinks + strHead + strMoreData
		document.getElementById("tblResMore").style.width = (colspan - 1) * 118 + 185 + 'px'
		
		for (var i = 1; i < strRows.length - 1; i++) {		
			document.getElementById("tdres" + i).innerHTML = strcol[i - 1]
			if (i > indRat)
				document.getElementById("tdres" + i).style.paddingLeft = "30px"		
		}
		
		for (var i = 1; i <= id; i++) {
			if (document.getElementById('tdr' + i) != null)
				resValues[i] = document.getElementById('tdr' + i).innerHTML
		}
		if (document.getElementById("hdnRVal").value == "C")
			fresConvert('C', 'Q')
		else if (document.getElementById("hdnRVal").value == "M")
			fresConvert('M', 'Q')
	}
	else
		document.getElementById("dvMore").innerHTML = strLinks + "<div id = 'dvPGHeading'><span style='margin-bottom:2px; font-size:15px; font-weight:bold;'>Quarterly Trends &nbsp;&nbsp;&nbsp;</span><span class='more01' style='font-size:14px;'><a onclick = \"javascript:DisplayMore('A');\"  id='aAnnual' style='cursor:pointer;'>Annual Trends</a></span></div>" +
"<div style='height:400px;'><br/><span style='margin-bottom:2px; font-size:12px; font-weight:bold;'>No Data Found !</span></div>"
}
function faMore(strcol, strRowData,scrnm,strlnks) {
	var strMoreData = "", strHead = "", strLinks = "", ceps = "", pe = "", pb = "",bv=""
	if (strcol[13] == "CEPS") {
		ceps = 14
		pe = 15
		pb = 16
		bv = 17
	}
	else {
		ceps = 12
		pe = 13
		pb = 14
		bv = 15
	}
	    var strArchive = "<a href='http://www.bseindia.com/qresann/result.asp?scripcd=" + a2 + "' target='_blank' style='cursor:pointer;'>Prior&nbsp;Period</a>"

	strLinks += "<div align='right'><img src='../../../../../../Images/close.gif' alt='Close' style='cursor:pointer;' onclick='closeMore();'></div>"
	/*strHead += "<div id='dvAnnual' style='margin-bottom:0px;padding-bottom:0px;' align='left'>" +
"<table border='0' width='100%'><tr><td><table border='0'><tr><td style='padding-left:0px;'><div id='dvPGHeading' style='font-size:15px;font-weight:bold;'>Annual Trends&nbsp;&nbsp;</div></td>" +
"<td><div id='divLink' class='more01' style='font-size:14px;'>" +
"<a onclick = \"javascript:DisplayMore('Q');\"  id='aAnnual' style='cursor:pointer;'>Quarterly Trends</a></div></td></tr></table></td>" +
"<td align='right'><div id='dvViewLink' align='right' class='more01' style='font-size:12px;'><a onclick=\"javascript:fresConvert('M','A')\" style='cursor:pointer;'>View in (Million)</a></div></td>" +
"</tr></table></div>"*/

strHead += "<div id='dvAnnual' style='margin-bottom:0px;padding-bottom:0px;' align='left'>" +
"<table border='0' width='87%'><tr><td><table border='0'><tr><td style='padding-left:0px;'><div id='dvPGHeading' style='font-size:15px;font-weight:bold;'>Annual Trends&nbsp;&nbsp;</div></td>" +
"<td><div id='divLink' class='more01' style='font-size:14px;'>" +
"<a onclick = \"javascript:DisplayMore('Q');\"  id='aAnnual' style='cursor:pointer;'>Quarterly Trends</a></div></td></tr></table></td>" +
"<td align='right' id='dvViewLink' align='right' class='more01' style='font-size:12px;'><a onclick=\"javascript:fresConvert('M','A')\" style='cursor:pointer;'>View in (Million)</a></td><td class='more01' style='font-size:12px;' align ='center' width = '10%'>" + strArchive + "</td>"
"</tr></table></div>"


	if (strRowData != "") {
		var rowid = 0
		id = 0
		var strRows = strRowData.split("#ROW#")
		var str = strRows[0].split("#@#")
		var colspan = parseInt(str.length)
		strMoreData += "<div><table id='tblResMore' border='0' cellpadding = '0' cellspacing = '0' class='loginpanel01 table01' style='border:0px;margin:0px;padding:0px;margin-bottom:2px;'>"
		for (var i = 0; i < str.length - 1; i++) {
			if (i == 0) strMoreData += "<tr><td id = 'tdres" + rowid + "' class='tdmoreheader' style='width:200px;padding-top:5px;padding-left:4px;border-right:1px solid #fff; color:#fff;text-align:left;'>(in Cr.)</td>"
			strMoreData += "<td class='tdmoreheader' style='padding-top:5px;width:118px; border-right:1px solid #fff; color:#fff;'>" + str[i] + "</td>"
		}
		strMoreData += "</tr>"
		strMoreData += "<tr><td colspan = '" + colspan + "' class='tdhead03 tdsubhead' style='padding-top:5px;padding-left:4px;'>Income Statement</td></tr>"
		
		var convrowA=12;
		//for bank
		if (strcol[11]=="CAR%"){convrowA=10;}
		for (var i = 1; i < strcol.length; i++) {
			var str = strRows[i].split("#@#")
			rowid += 1
			//if(i==strcol.length-3){
			//for(j=0;j<str.length-1;j++){
			//if(str[j]<0)
			//str[j]="--"}
			//for(var j=1;j<str.length-1;j++){
			//str[j]="--"}}
			//if(i==strcol.length-2){
			//for(k=0;k<str.length-1;k++){
			//if(str[k]<0)
			//str[k]="--"}
			//for(var l=1;l<str.length-2;l++){
			//str[l]="--"}}

			/*if (i == ceps || i == pe || i == pb) {
				for (k = 0; k < str.length - 1; k++) {
					if (str[k] < 0)
						str[k] = "--"
						}
				}*/
				/*change 04feb10*/
				/*
				if (i == pe || i==pb || i==bv) {
					for (var l = 1; l < str.length - 2; l++) {
						str[l] = "--"
					}
				}*/

				for (var j = 0; j < str.length - 1; j++) {
				if (i <= convrowA) id += 1//if (i <= 12) id += 1 
				if (j == 0) strMoreData += "<tr><td id = 'tdres" + rowid + "' class='tdrowhead' style='width:200px;padding-top:5px;padding-left:30px;padding-right:0px;'>&nbsp;</td>"
				strMoreData += "<td id='tdr" + id + "' class='tdrows' style='padding-top:5px;width:118px;'>" + str[j] + "</td>"
			}
			if (strcol[i] == "Reserves")
				var indRat = i + 1;
			else if (strcol[i] == "BV")
				var indPRat = i + 1
			else if (strcol[i] == "Interest Earned")
				var indLRat = i + 1
			else if (strcol[i] == "Operating Leverage")
				var indIRat = i + 1
			else if (strcol[i] == "Non-operating Income to Net Profit")
				var indDRat = i + 1
			else if (strcol[i] == "Dividend Yield")
				var indYRat = i + 1

			//if(i==12)strMoreData+="<tr><td colspan = '"+colspan+"' class='tdhead03 tdsubhead' style='padding-top:5px;padding-left:4px;'>Ratios</td></tr>"
			/*if (i == indRat) strMoreData += "<tr><td colspan = '" + colspan + "' class='tdhead03 tdsubhead' style='padding-top:5px;padding-left:4px;'>Ratios</td></tr><tr><td colspan = '" + colspan + "' class='tdhead03' style='padding-top:5px;padding-left:30px;background-color:rgb(230,245,240);'><strong>Earnings Ratios</strong></td></tr>"
			else if (i == indPRat) strMoreData += "<tr><td colspan = '" + colspan + "' class='tdhead03' style='padding-top:5px;padding-left:30px;background-color:rgb(230,245,240);'><strong>Profitability Ratios</strong></td></tr>"
			else if (i == indLRat) strMoreData += "<tr><td colspan = '" + colspan + "' class='tdhead03' style='padding-top:5px;padding-left:30px;background-color:rgb(230,245,240);'><strong>Leverage Ratios</strong></td></tr>"
			else if (i == indIRat) strMoreData += "<tr><td colspan = '" + colspan + "' class='tdhead03' style='padding-top:5px;padding-left:30px;background-color:rgb(230,245,240);'><strong>Income Ratios</strong></td></tr>"
			else if (i == indDRat) strMoreData += "<tr><td colspan = '" + colspan + "' class='tdhead03' style='padding-top:5px;padding-left:30px;background-color:rgb(230,245,240);'><strong>Dividend Ratios</strong></td></tr>"
			else if (i == indYRat) strMoreData += "<tr><td colspan = '" + colspan + "' class='tdhead03' style='padding-top:5px;padding-left:30px;background-color:rgb(230,245,240);'><strong>Yr on Yr Growth Ratios</strong></td></tr>"
            */
			if (j == str.length - 1)
				strMoreData += "</tr>"
		}
		/*Change */
		
		var astyle = "color:#0067a2;font-weight:normal;text-decoration:underline;";
	    var td1 = "<td class='tdrows' style='padding-top:5px;width:110px;text-align:center'>";
		var lnkarr = strlnks.split("#ROW#")
		var scrdata = scrnm.split("#@#")
		var scrcd = scrdata[0]; var scrn = scrdata[1];
		var det ="",cons ="",seg="";
		var qtr = lnkarr[3].split("#@#");
		var qtrcd = lnkarr[0].split("#@#");
		var tw = (colspan - 1) * 118 + 185 + 'px';
		var tbl ="";
		//var tbl = "<table cellpadding = '0' cellspacing ='0' border = '0' style = 'width:" + tw +";border:0px;margin:0px;padding:0px;margin-bottom:2px;' class='loginpanel01 table01' >";
		for (var a =0; a<lnkarr.length-3; a++)
		{
		    strlnk1 = lnkarr[a].split("#@#");	
		    tbl+= "<tr><td class='tdrowhead' style='width:185px;padding-top:5px;padding-left:40px;padding-right:0px;'>&nbsp;</td>";
		    for (var b=0; b<strlnk1.length -1; b++)
		    {
		    if (a == 0)
		    {
		        if (strlnk1[b].length > 0 && (parseInt(strlnk1[b],0)>55))
		        det= td1+"<a style="+astyle+" target ='_blank' href='http://www.bseindia.com/qresann/detailedresult.asp?scrip_cd=" + scrcd + "&compname=" + scrn + "&qtr=" + qtrcd[b] + "'>Detailed</a></td>";
		        else
		        det= td1+"--</td>";
		        tbl+= det;
		    }
		    if (a==1)
		    {
		        if (strlnk1[b]== "1")
		        {
		            if (parseInt(qtrcd[b],0)>55)
		            {cons=td1+"<a style="+astyle+" target ='_blank' href = 'http://www.bseindia.com/qresann/detailedresult_cons.asp?scrip_cd=" + scrcd + "&qtr=" + qtrcd[b] + "&compname=" + scrn
	                + "&quarter=" + qtr[b] + "&checkcons=55'>Consolidated</a></td>";}
	                else
	                {cons=td1+"<a style="+astyle+" target ='_blank' href = 'http://www.bseindia.com/qresann/resultCommulative.asp?scripcd=" + scrcd + "&quarter=" + qtrcd[b] + "&scripname=" + scrn 
	                + "&type=" + qtr[b] + "'>Consolidated</a></td>";}
	            }
		        else cons = td1+"--</td>";
		        tbl+=cons;
		    }
		    if (a==2)
		    {
		        if (strlnk1[b]== "1")
		            seg= td1+"<a style="+astyle+" target ='_blank' href = 'http://www.bseindia.com/qresann/Segmentresult.asp?scripcd=" + scrcd + "&scripname=" + scrn + "&quarter=" + qtrcd[b] + "&type=" + qtr[b] + "'>Segment</a></td>";
		        else seg = td1+"--</td>";
		        tbl+= seg;
		    }
		    }
		    tbl+="</tr>";
		}
		strMoreData += tbl + "</table></div>"	
		//strMoreData += "</table></div>"
		//var strArchive = "<div class='more01' align='right' style = 'font-size:12px;'><a href='http://www.bseindia.com/qresann/result.asp?scripcd=" + a2 + "' target='_blank' style='cursor:pointer'>Archives</a></div>"
		//document.getElementById("dvMore").innerHTML = strLinks + strHead + strMoreData + strArchive
		document.getElementById("dvMore").innerHTML = strLinks + strHead + strMoreData		
		document.getElementById("tblResMore").style.width = (colspan - 1) * 118 + 200 + 'px'
		for (var i = 1; i < strcol.length; i++) {
			document.getElementById("tdres" + i).innerHTML = strcol[i - 1]
			if (i > indRat)
				//document.getElementById("tdres" + i).style.paddingLeft = "40px"
				document.getElementById("tdres" + i).style.paddingLeft = "30px"
		}
		for (var i = 1; i <= id; i++) {
			if (document.getElementById('tdr' + i) != null)
				resValues[i] = document.getElementById('tdr' + i).innerHTML
		}
		if (document.getElementById("hdnRVal").value == "C")
			fresConvert('C', 'A')
		else if (document.getElementById("hdnRVal").value == "M")
			fresConvert('M', 'A')
	}
	else
		document.getElementById("dvMore").innerHTML = strLinks + "<div id = 'dvPGHeading'><span style='margin-bottom:2px; font-size:15px; font-weight:bold;'>Annual Trends &nbsp;&nbsp;&nbsp;</span><span class='more01' style='font-size:14px;'><a onclick = \"javascript:DisplayMore('Q');\"  id='aAnnual' style='cursor:pointer;'>Quarterly Trends</a></span></div>" +
"<div style='height:400px;'><br/><span style='margin-bottom:2px; font-size:12px; font-weight:bold;'>No Data Found !</span></div>"
}
function DisplayMoreSHP() {
	document.getElementById("dvDispeq").style.display = "none"
	document.getElementById("dvMore").style.display = "block"
	document.getElementById('imgref').style.visibility = "hidden"
	document.getElementById('imgPrint').style.visibility = "hidden"
	if (timer != "") {
		clearInterval(timer)
		timer = ""
	}
	document.getElementById("dvMore").innerHTML = "<div style='height:650px;'><img src='../../../../../../Images/loading.gif' alt='Loading' style = 'vertical-align:middle'/>&nbsp;&nbsp;Loading...</div>"
	var requestUrl = "http://www.bseindia.com/bseplus/StockReach/StockReachData.aspx?&scripcode=" + a2 + "&section=SHP&random=" + Math.random()
	var xmlHttp3 = ajaxFunction()
	xmlHttp3.onreadystatechange = function() {
		if (xmlHttp3.readyState == 4) {
			var astr = xmlHttp3.responseText
			if (astr.split('#$#')[0] == 'BsePlus') {
				if (astr.split('#$#')[1].length > 0) {
					var data = astr.split('#$#')[1].split("#SECTION#")
					document.getElementById("dvMore").innerHTML = "<div align='right'><img src='../../../../../../Images/close.gif' alt='Close' style='cursor:pointer;' onclick='closeMore();'></div><br /><br />" +
"<div>" +
"<table cellpadding='0' cellspacing='3' class='loginpanel01 table01 more02' style='width:903px;padding:0px; margin:0px; border:0px;background-color:#fff;'>" +
"<tr><td valign='top' class='rightpanel01 tdmoreheader01' style='background-color:#fff;width:145px;'>&nbsp;</td><td id='shpm00' class='tdmoreheader01'>&nbsp;</td><td id='shpm01' class='tdmoreheader01'>&nbsp;</td><td id='shpm02' class='tdmoreheader01'>&nbsp;</td><td id='shpm03' class='tdmoreheader01'>&nbsp;</td><td id='shpm04' class='tdmoreheader01'>&nbsp;</td></tr></table>" +
"<table width='100%' cellpadding='0' cellspacing='0' class='loginpanel01 table01 more02' style='margin:0px;padding:0px;width:902px;'>" +
"<tr><td class='tdrowhead01 tdhead03' style='font-weight:bold;width:150px;'>Promoter and Promoter Group</td><td id='shpm10' class='tdrows01 tdhead03'>&nbsp;</td><td id='shpm11' class='tdrows01 tdhead03'>&nbsp;</td><td id='shpm12' class='tdrows01 tdhead03'>&nbsp;</td><td id='shpm13' class='tdrows01 tdhead03'>&nbsp;</td><td id='shpm14' class='tdrows01 tdhead03' style='border-right:0px;'>&nbsp;</td></tr>" +
"<tr><td class='tdrowhead01' style='width:150px;padding-left:20px;'>Indian</td><td id='shpm20' class='tdrows01'>&nbsp;</td><td id='shpm21' class='tdrows01'>&nbsp;</td><td id='shpm22' class='tdrows01'>&nbsp;</td><td id='shpm23' class='tdrows01'>&nbsp;</td><td id='shpm24' class='tdrows01' style='border-right:0px;'>&nbsp;</td></tr>" +
"<tr><td class='tdrowhead01' style='width:150px;padding-left:20px;'>Foreign</td><td id='shpm30' class='tdrows01'>&nbsp;</td><td id='shpm31' class='tdrows01'>&nbsp;</td><td id='shpm32' class='tdrows01'>&nbsp;</td><td id='shpm33' class='tdrows01'>&nbsp;</td><td id='shpm34' class='tdrows01' style='border-right:0px;'>&nbsp;</td></tr>" +
"<tr><td class='tdrowhead01 tdhead03' style='font-weight:bold;width:150px;'>Public</td><td id='shpm40' class='tdrows01 tdhead03'>&nbsp;</td><td id='shpm41' class='tdrows01 tdhead03'>&nbsp;</td><td id='shpm42' class='tdrows01 tdhead03'>&nbsp;</td><td id='shpm43' class='tdrows01 tdhead03'>&nbsp;</td><td id='shpm44' class='tdrows01 tdhead03' style='border-right:0px;'>&nbsp;</td></tr>" +
"<tr><td class='tdrowhead01' style='width:150px;padding-left:20px;'>Institutions</td><td id='shpm50' class='tdrows01'>&nbsp;</td><td id='shpm51' class='tdrows01'>&nbsp;</td><td id='shpm52' class='tdrows01'>&nbsp;</td><td id='shpm53' class='tdrows01'>&nbsp;</td><td id='shpm54' class='tdrows01' style='border-right:0px;'>&nbsp;</td></tr>" +
"<tr><td class='tdrowhead01' style='padding-left:20px;width:150px;padding-left:29px;'>FII</td><td id='shpm60' class='tdrows01'>&nbsp;</td><td id='shpm61' class='tdrows01'>&nbsp;</td><td id='shpm62' class='tdrows01'>&nbsp;</td><td id='shpm63' class='tdrows01'>&nbsp;</td><td id='shpm64' class='tdrows01' style='border-right:0px;'>&nbsp;</td></tr>" +
"<tr><td class='tdrowhead01' style='padding-left:20px;width:150px;padding-left:29px;'>DII</td><td id='shpm70' class='tdrows01'>&nbsp;</td><td id='shpm71' class='tdrows01'>&nbsp;</td><td id='shpm72' class='tdrows01'>&nbsp;</td><td id='shpm73' class='tdrows01'>&nbsp;</td><td id='shpm74' class='tdrows01' style='border-right:0px;'>&nbsp;</td></tr>" +
"<tr><td class='tdrowhead01' style='width:150px;padding-left:20px;'>Non Institutions</td><td id='shpm80' class='tdrows01'>&nbsp;</td><td id='shpm81' class='tdrows01'>&nbsp;</td><td id='shpm82' class='tdrows01'>&nbsp;</td><td id='shpm83' class='tdrows01'>&nbsp;</td><td id='shpm84' class='tdrows01' style='border-right:0px;'>&nbsp;</td></tr>" +
"<tr><td class='tdrowhead01' style='width:150px;padding-left:29px;'>Bodies Corporate</td><td id='shpm90'  class='tdrows01'>&nbsp;</td><td id='shpm91' class='tdrows01'>&nbsp;</td><td id='shpm92' class='tdrows01'>&nbsp;</td><td id='shpm93' class='tdrows01' >&nbsp;</td><td id='shpm94' class='tdrows01' style='border-right:0px;'>&nbsp;</td></tr>" +
"<tr><td class='tdrowhead01' style='width:150px;padding-left:20px;'>Custodians</td><td id='shpm100' class='tdrows01'>&nbsp;</td><td id='shpm101' class='tdrows01'>&nbsp;</td><td id='shpm102' class='tdrows01'>&nbsp;</td><td id='shpm103' class='tdrows01' >&nbsp;</td><td id='shpm104' class='tdrows01' style='border-right:0px;'>&nbsp;</td></tr>" +
"<tr><td class='tdrowhead01 tdhead03' style='font-weight:bold;border-bottom:0px;width:150px;'>Total</td><td id='shpm110' class='tdrows01 tdhead03' style='border-bottom:0px;'>&nbsp;</td><td id='shpm111' class='tdrows01 tdhead03' style='border-bottom:0px;'>&nbsp;</td><td id='shpm112' class='tdrows01 tdhead03' style='border-bottom:0px;'>&nbsp;</td><td id='shpm113' class='tdrows01 tdhead03' style='border-bottom:0px;'>&nbsp;</td><td id='shpm114' class='tdrows01 tdhead03' style='border-bottom:0px;border-right:0px;'>&nbsp;</td></tr>" +
"</table></div>"
					for (var i = 0; i < 12; i++) {
						var str = data[i].split("#@#");
						for (var j = 0; j < 5; j++) {
							if (str[j] == "" || str[j] == undefined)
								str[j] = "--"
							document.getElementById("shpm" + i + j).innerHTML = str[j];
						}
					}

					var strArchiveSHP = "<div class='more01' align='right' style='font-size:12px;padding-top:4px;'><a href='http://www.bseindia.com/shareholding/searchresult.asp?scripcd=" + a2 + "' target='_blank' style='cursor:pointer'>Archives</a></div>"
					document.getElementById("dvMore").innerHTML += strArchiveSHP
				}
				else {
					document.getElementById("dvMore").innerHTML = "<div align='right'><img src='../../../../../../Images/close.gif' alt='Close' style='cursor:pointer;' onclick='closeMore();'></div><br /><br />" +
"<div style='height:400px;'><br/><span style='margin-bottom:2px; font-size:12px; font-weight:bold;'>No Data Found !</span></div>"
				}
			}
			else {
				document.location.href = "../InvalidUrl.htm?Page=Invalid_Data"
			}
		}
	}
	xmlHttp3.open("GET", requestUrl, true)
	xmlHttp3.send(null)
}
function closeMore() {
	var divMore = document.getElementById('dvMore')
	divMore.style.display = "none"
	document.getElementById('dvDispeq').style.display = "block"
	document.getElementById('imgref').style.visibility = "visible"
	document.getElementById('imgPrint').style.visibility = "visible"
}
function fresConvert(type, T) {
//debugger;
	if (T == "Q")
		temp = id
	else if (T == "A")
		temp = id
	var str = new Array()
	var cnt = 1
	for (var i = 1; i <= temp; i++) {
		var obj = document.getElementById("tdr" + i)
		if (obj != null) {
			if (type == "M") {
				obj.innerHTML = resValues[i]
			}
			if (type == "C") {
				var strval = obj.innerHTML
				if (strval != "--" && strval != undefined) {
					obj.innerHTML = GetCommaFormatted(parseFloat(Number(strval.replace(/,/gi, "")) / 10).toFixed(2))
				}
			}
		}
		cnt++
	}
	if (type == "M") {
		document.getElementById("dvViewLink").innerHTML = "<a onclick=\"javascript:fresConvert('C')\" style='cursor:pointer'>View in (Cr.)</a>"
		document.getElementById("tdres0").innerHTML = "(in Million)"
		document.getElementById("hdnRVal").value = "M"
	}
	else if (type == "C") {
		document.getElementById("dvViewLink").innerHTML = "<a onclick=\"javascript:fresConvert('M')\" style='cursor:pointer'>View in (Million)</a>"
		document.getElementById("tdres0").innerHTML = "(in Cr.)"
		document.getElementById("hdnRVal").value = "C"
	}
}
function frConvert(type) {
	var str = new Array()
	var cnt = 1
	for (var i = 1; i <= 2; i++) {
		for (var j = 1; j <= 3; j++) {
			var obj = document.getElementById("r" + i + j)
			if (obj != null) {
				if (type == "M") {
					obj.innerHTML = rvalues[cnt]
				}
				else if (type == "C") {
					var strVal = obj.innerHTML
					if (strVal != "--" && strVal != undefined) {
						obj.innerHTML = GetCommaFormatted(parseFloat(Number(strVal.replace(/,/gi, "")) / 10).toFixed(2))
					}
				}
				cnt++
			}
		}
	}
	if (type == 'C') {
		document.getElementById("r00").innerHTML = "(in Cr.)"
		document.getElementById("dvRLink").innerHTML = "<a style='cursor:pointer' onclick = \"javascript:frConvert('M')\">View in (Million)</a>"
		document.getElementById("hdnRVal").value = "C"
	}
	else if (type == 'M') {
		document.getElementById("r00").innerHTML = "(in Million)"
		document.getElementById("dvRLink").innerHTML = "<a style='cursor:pointer' onclick = \"javascript:frConvert('C')\">View in (Cr.)</a>"
		document.getElementById("hdnRVal").value = "M"
	}
}
function GetCommaFormatted(rval) {
	var delimiter = ","
	var a
	if (rval.toString().indexOf('.') > -1)
		a = rval.split('.', 2)
	var d = a[1]
	var i = parseInt(a[0])
	if (isNaN(i)) { return ''; }
	var minus = ''
	if (i < 0) { minus = '-'; }
	if (rval.toString().indexOf('-') == 0) { minus = '-'; }
	i = Math.abs(i)
	var n = new String(i)
	var a = []
	var chklen = 3
	if (n.length > chklen) {
		var nn = n.substr(n.length - 3)
		a.unshift(nn)
		n = n.substr(0, n.length - 3)
		chklen = 2
		while (n.length > chklen) {
			var nn = n.substr(n.length - 2)
			a.unshift(nn)
			n = n.substr(0, n.length - 2)
		}
	}
	if (n.length > 0) { a.unshift(n); }
	n = a.join(delimiter)
	if (d.length < 1) { rval = n; }
	else { rval = n + '.' + d; }
	rval = minus + rval
	return rval
}
var attribR = new Array(0)
function DisableTabR(id) {
	for (i = 1; i < 6; i++) {
		if ("td" + i == id) { }
		else {
			document.getElementById("td" + i + 1).disabled = true
			document.getElementById("td" + i + 2).disabled = true
			document.getElementById("td" + i + 3).disabled = true
			document.getElementById("td" + i).style.cursor = "default"
			document.getElementById("td" + i + 1).style.cursor = "default"
			document.getElementById("td" + i + 2).style.cursor = "default"
			document.getElementById("td" + i + 3).style.cursor = "default"
		}
		if (i <= 5) {
			attribR[i] = document.getElementById("td" + i).getAttribute("onclick")
			document.getElementById("td" + i).setAttribute("onclick", "")
		}
	}
}
function EnableTabR() {
	for (i = 1; i < 6; i++) {
		document.getElementById("td" + i + 1).disabled = false
		document.getElementById("td" + i + 2).disabled = false
		document.getElementById("td" + i + 3).disabled = false
		if (i <= 5) {
			var tdid = "td" + i
			if (document.getElementById("td" + i).getAttribute("onclick") == "") {
				document.getElementById("td" + i).setAttribute("onclick", attribR[i])
			}
		}
	}
}
function fActTabR(Rtdid) {
	var id = Rtdid
	for (i = 1; i < 6; i++) {
		if ("td" + i == id) {
			document.getElementById(id + 1).className = "tabact_lft02"
			document.getElementById(id + 2).className = "tabact_rgt02"
			document.getElementById(id + 3).className = "tabact_ctr02"
			document.getElementById(id + 3).style.cursor = "default"
		}
		else {
			document.getElementById("td" + i + 1).className = "tablink_lft02"
			document.getElementById("td" + i + 2).className = "tablink_rgt02"
			document.getElementById("td" + i + 3).className = "tablink_ctr02"
			document.getElementById("td" + i + 3).style.cursor = "pointer"
		}
	}
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     