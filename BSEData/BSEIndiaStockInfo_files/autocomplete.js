var rowCount=-1
var strItem=""
var keyValue=new Array()
function selecttxt(obj){
obj.select()}
function doSomething(e){
try{
objdivsel=document.getElementById('divSelAsset')
objdivsel1=document.getElementById('divSelWLAsset')
if(!e)
var e=window.event
if(e.type=='mouseout'){
document.getElementById("divshow").value="hide"}
else if(e.type !='click'){
objdivsel.style.display=''
objdivsel1.style.display=''
document.getElementById("divshow").value="show"}
if(e.type=='click'){
if(document.getElementById("divshow").value=="hide" || document.getElementById("divshow").value==""){
objdivsel.style.display='none'
objdivsel1.style.display='none'}}}
catch(err){}}
function IsNumeric(sText){
var ValidChars="0123456789"
var IsNumber=true
var Char
for(i=0;i<sText.length&&IsNumber==true;i++){
Char=sText.charAt(i)
if(ValidChars.indexOf(Char)==-1){
IsNumber=false}}
return IsNumber}
function FormatStringTel(searchStr){
while(searchStr.substring(0,1)==' '){
searchStr=searchStr.substring(1,searchStr.length)}
while(searchStr.substring(searchStr.length-1,searchStr.length)==' '){
searchStr=searchStr.substring(0,searchStr.length-1)}
if(searchStr.indexOf("'")>-1)
searchStr=searchStr.replace("'","`")
if (searchStr.indexOf("\"") > -1){searchStr = searchStr.replace("\"", "&quot;")}
return searchStr}
function noenter(e){
var unicode=e.charCode?e.charCode : e.keyCode
if(unicode==13)
return false}
function setfocus(objtxtinput){
objtxtinput.select()}
function callhideDivSel(flag,obj){
divsel='divSelAsset'
objdivsel=document.getElementById(divsel)
if(objdivsel.style.display=="")
objdivsel.focus()
if(obj.value==""){
obj.value="Enter Scrip Name"}
else if(document.getElementById("ctl00_ContentPlaceHolder1_hdn_hdnscrip").value==""){
obj.value="Enter Scrip Name"}}
function hideDivSel(flag){
divsel='divSelAsset'
objdivsel=document.getElementById(divsel)}
function showDivSel(e,flag,page,objtxtinput,valobjtxtinput,mintxtlength,what,varbool,bSusp){

var unicode=e.charCode? e.charCode : e.keyCode
hdnid='hdnId'+flag
tbldropdown='tblDropdown'+flag
divsel='divSelAsset'
objdivsel=document.getElementById(divsel)
var Counter=parseInt(rowCount)
if((((unicode>=48&&unicode<=57)||(unicode>=65&&unicode<=90)||(unicode>=96&&unicode<=105)||(unicode>=106&&unicode<=111)||(unicode>=187&&unicode<=192)|| unicode==8 || unicode==32 || unicode==46 || unicode==220 || unicode==222)&&unicode!=13)|| varbool){
strItem=""
document.getElementById(hdnid).value=""
searchStr=FormatStringTel(valobjtxtinput)
strlength=searchStr.length
rowCount=-1
strItem=""
if((!IsNumeric(searchStr)&&strlength>=mintxtlength)||(IsNumeric(searchStr)&&strlength==6)){
objdivsel.innerHTML=""
kvFlag=false
/*for(kvCount=0;kvCount<keyValue.length;kvCount++)
{
var arraykv=keyValue[kvCount].split("~")
if(arraykv[0].toUpperCase().indexOf(searchStr.toUpperCase())==0&&arraykv[0].length==searchStr.length&&arraykv[2]==what){
kvFlag=true
objdivsel.innerHTML=arraykv[1]
objdivsel.style.display=""
SetPos(objtxtinput,flag)
objdivsel.scrollTop=0}
}*/


if(!kvFlag){
strPvtLtd="PVT.LTD."
if((strPvtLtd.indexOf(searchStr.toUpperCase())<0)){
if(bSusp==undefined){
var requestUrl=page+"?inputstr="+searchStr+"&strFlag="+what+"&ShowSusp=true&no="+Math.random()}
else{
var requestUrl=page+"?inputstr="+searchStr+"&strFlag="+what+"&ShowSusp="+bSusp+"&no="+Math.random()}


 


var xmlHttp1=new ajaxFunction()
xmlHttp1.onreadystatechange=function(){
if(xmlHttp1.readyState==4){
var str=xmlHttp1.responseText


 

if(str==""){
objdivsel.style.display=""
//strData=norecords("No Records Found","No","",flag,objtxtinput)
strData=norecords("No Records Found","No",searchStr,flag,objtxtinput,what)
objdivsel.innerHTML=strData
objdivsel.scrollTop=0
SetPos(objtxtinput,flag)}
if(str !=""){
var arrstrData=str.split("#$$#")
if(arrstrData.length==3){
check=arrstrData[1]
switch(check){
case "0":
strData=zero(arrstrData[0],arrstrData[2],searchStr,flag,objtxtinput)
break
case "1":
case "2":
case "3":
strData=one(arrstrData[0],arrstrData[2],searchStr,flag,objtxtinput,check)
break}
if(strData !=""){
objdivsel.style.display=""
objdivsel.innerHTML=strData
objdivsel.scrollTop=0
SetPos(objtxtinput,flag)}}
else{
strblank=""
objdivsel.innerHTML=strblank
objdivsel.style.display="none"}}}}
xmlHttp1.open("GET",requestUrl,true)
xmlHttp1.send(null)}
else{}}}
else{
strblank=""
keyValue.length=0
objdivsel.innerHTML=strblank
objdivsel.style.display="none"}}
else if(unicode==13){
if(strItem!=""){
var arrayItem=strItem.split(":")
objtxtinput.value=arrayItem[0]+" [ "+arrayItem[1]+" ]"
document.getElementById(hdnid).value=arrayItem[2]+"|"+arrayItem[0]+"|"+arrayItem[1]
strItem=""
rowCount=-1
objdivsel.innerHTML=""
objdivsel.style.display="none"
objtxtinput.focus()
objtxtinput.select()
//alert(objtxtinput.id);
if (objtxtinput.id == "txtPG")
chkscrPG();
if(objtxtinput.id=="txtscrip")
DispStockReach("hdnIdAsset")
if(objtxtinput.id=="txtscrip01")
DispStockReach("hdnIdAsset01")
if(objtxtinput.id=="txtWLScrip"){
if(document.getElementById("hdnIdAssetWL").value !=""){
if(checkadd()==true){
AddScrip()}}}}}
else if(unicode==40){
if(document.getElementById(tbldropdown)){
mytable=document.getElementById(tbldropdown)
countRow=mytable.rows.length
if(Counter<countRow-1){
Counter=Counter+1
rowCount=Counter
for(i=0;i<countRow;i++){
if(i==Counter){
myrow=mytable.getElementsByTagName("tr")[i]
myrow.className="selected"
strItem=myrow.id
objdivsel.scrollTop=Counter*19}
else{
myrow=mytable.getElementsByTagName("tr")[i]
myrow.className="unselected"}}}
else if(Counter>=countRow){
myrow=mytable.getElementsByTagName("tr")[countRow]
myrow.className="selected"}}}
else if(unicode==38){
if(document.getElementById(tbldropdown)){
mytable=document.getElementById(tbldropdown)
countRow=mytable.rows.length
if(Counter>0){
Counter=Counter-1
rowCount=Counter
for(i=0;i<countRow;i++){
if(i==Counter){
myrow=mytable.getElementsByTagName("tr")[i]
myrow.className="selected"
strItem=myrow.id
objdivsel.scrollTop=Counter*19}
else{
myrow=mytable.getElementsByTagName("tr")[i]
myrow.className="unselected"}}}
else if(Counter<=0){
myrow=mytable.getElementsByTagName("tr")[0]
myrow.className="selected"}}}
else{
objdivsel.innerHTML=""
objdivsel.style.display="none"
if(unicode==27){
objtxtinput.value=""
document.getElementById(hdnid).value=""}}}
function applyClass(id,flag){
tbldropdown='tblDropdown'+flag
mytable=document.getElementById(tbldropdown)
countRow=mytable.rows.length
for(i=0;i<countRow;i++){
myrow=mytable.getElementsByTagName("tr")[i]
if(document.getElementById(id).id==myrow.id)
rowCount=i
if(myrow.className=="selected")
myrow.className="unselected"}
document.getElementById(id).className="selected"}
function additem(name,flag,txtinput){
hdnid='hdnId'+flag
divsel='divSelAsset'
objdivsel=document.getElementById(divsel)
var arrayItem=name.split(":")
document.getElementById(txtinput).value=arrayItem[0]+" [ "+arrayItem[1]+" ] "
document.getElementById(hdnid).value=arrayItem[2]+"|"+arrayItem[0]+"|"+arrayItem[1]+"|"+arrayItem[3]
strItem=""
objdivsel.style.display="none"
rowCount=-1
document.getElementById(txtinput).focus()
document.getElementById(txtinput).select()
if (txtinput == "txtPG")
chkscrPG();
if(txtinput=="txtscrip")
DispStockReach("hdnIdAsset")
if(txtinput=="txtscrip01")
DispStockReach("hdnIdAsset01")
if(txtinput=="txtWLScrip"){
if(document.getElementById("hdnIdAssetWL").value !=""){
if(checkadd()==true){
AddScrip()}}}}
function SetPos(objtxtinput,flag){
divsel='divSelAsset'
objdivsel=document.getElementById(divsel)
var obj=objtxtinput
var curleft=curtop=0
if(obj.offsetParent){
curleft=obj.offsetLeft
curtop=obj.offsetTop
while(obj=obj.offsetParent){
curleft+=obj.offsetLeft
curtop+=obj.offsetTop}
curtop=curtop+20}
var dfs=objdivsel.style
dfs.left=curleft-200+"px"
dfs.top=curtop+"px"
if(document.getElementById('tblDropdown'+flag)){
mytable=document.getElementById('tblDropdown'+flag)
dfs.height=mytable.height
countRow=mytable.rows.length
if(countRow>6){
dfs.height="150px"
divHeight=150}
else{
if(countRow==1){
dfs.height="40px"}}}}
function norecords(str,check,searchStr,flag,objtxtinput,selopt){
strTable=""
strRow=""
var arrstrData=str
var arrstrRow=arrstrData
strId=arrstrRow
strRow="<tr class='unselected'><td align='center' style='font-size:11px;font-weight:bold;'>"+strId+"</td></tr>"
strRow = strRow + "<tr><td colspan='3' align='right'><table><tr class='unselected'><td colspan='2' align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:8px;font-size:11px;'><span style='cursor:pointer' onclick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'0',true);\">Equity</span></td>";
if(selopt==0){
strRow="<tr class='unselected'><td align='center' style='font-size:11px;font-weight:bold;'>"+strId+"</td></tr><tr><td colspan='3' align='right'><table><tr class='unselected'><td colspan='2' align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:8px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'1',true);\">Equity 1</span></td><td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:8px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'2',true);\">Others</span></td><td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'3',true);\">Delisted</span></td></tr>"
}
    else if (selopt == "1")
		{
		    strRow = strRow + "<td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:8px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'2',true);\">Others</span></td><td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'3',true);\">Delisted</span></td></tr>";
		}
		else if (selopt == "2")
		{
		    strRow = strRow + "<td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:8px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'1',true);\">Equity 1</span></td><td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'3',true);\">Delisted</span></td></tr>";
		}
		else if (selopt == "3")
		{
		    strRow = strRow + "<td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:8px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'1',true);\">Equity 1</span></td><td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'2',true);\">Others</span></td></tr>";
		}
strRow+="</table></td></tr>";

strTable="<table class='border' style='width:350px;background:#d3f1ee;color:black;' cellspacing='0' cellpadding='4' onmouseout=\"return doSomething(event);\">"+strRow+"</table>"
divHeight=100
return strTable}
function zero(str,check,searchStr,flag,objtxtinput){
strTable=""
strRow=""
i=0
var arrstrData=str.split("~")
if(arrstrData.length<7)
divHeight=arrstrData.length*19+60
while(i<arrstrData.length){
var arrstrRow=arrstrData[i].split(":")
strAssetName=arrstrRow[1].toUpperCase().replace(searchStr.toUpperCase(),"<b>"+searchStr.toUpperCase()+"</b>")
strScripId=arrstrRow[0].toUpperCase().replace(searchStr.toUpperCase(),"<b>"+searchStr.toUpperCase()+"</b>")
strId=arrstrRow[0]+":"+arrstrRow[1]+":"+arrstrRow[2]+":"+arrstrRow[3]
strRow=strRow+"<tr class='unselected' id='"+strId+"' style='cursor:pointer' OnClick=\"javascript:additem('"+strId+"','"+flag+"','"+objtxtinput.id+"');\" OnMouseOver=\"javascript:applyClass('"+strId+"','"+flag+"');\"><td class='datacol1' >"+strScripId+"</td><td class='datacol2'>"+strAssetName+"</td></tr>"
i++}

//strRow=strRow+"<tr class='unselected'><td colspan='3' align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'"+flag+"','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'"+searchStr+"',3,'1',true);\">more</span></td></tr>"
strRow = strRow + "<tr><td colspan='3' align='right'><table><tr class='unselected'><td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'1',true);\">Equity 1</span></td><td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'2',true);\">Others</span></td><td colspan='2' align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'3',true);\">Delisted</span></td></tr></table></td></tr>";
/*if(check=="yes")
{

//strRow=strRow+"<tr class='unselected'><td colspan='3' align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'"+flag+"','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'"+searchStr+"',3,'1',true);\">more</span></td></tr>"
strRow = strRow + "<tr><td colspan='3' align='right'><table><tr class='unselected'><td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'1',true);\">Equity 1</span></td><td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'2',true);\">Others</span></td><td colspan='2' align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'3',true);\">Delisted</span></td></tr></table></td></tr>";
}
else
{
strRow = strRow + "<tr><td colspan='3' align='right'><table><tr class='unselected'><td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'2',true);\">Others</span></td><td colspan='2' align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'3',true);\">Delisted</span></td></tr></table></td></tr>";
}*/

strTable="<table id='tblDropdown"+flag+"' class='border' cellspacing='0' cellpadding='0' onmouseout=\"return doSomething(event);\">"+strRow+"</table>"
if(arrstrData.length==1){
var arrstrRow=arrstrData[0].split(":")
document.getElementById(hdnid).value=arrstrRow[2]+"|"+arrstrRow[0]+"|"+arrstrRow[1]}
else{
document.getElementById(hdnid).value=""
keyValue[keyValue.length]=searchStr+"~"+strTable+"~0"}
return strTable}
function one(str,check,searchStr,flag,objtxtinput,option){

strTable=""
strRow=""
i=0
var arrstrData=str.split("~")
if(arrstrData.length<7)
divHeight=arrstrData.length*19+60
while(i<arrstrData.length){
var arrstrRow=arrstrData[i].split(":")
//debugger;
//strAssetName=arrstrRow[1].toUpperCase().replace(eval('/'+searchStr.toUpperCase()+'/gi'),"<b>"+searchStr.toUpperCase()+"</b>")
strAssetName=arrstrRow[1].toUpperCase().replace(new RegExp(searchStr.toUpperCase(),'gi'),"<b>"+searchStr.toUpperCase()+"</b>")
strScripId=arrstrRow[0].toUpperCase().replace(searchStr.toUpperCase(),"<b>"+searchStr.toUpperCase()+"</b>")
strId=arrstrRow[0]+":"+arrstrRow[1]+":"+arrstrRow[2]+":"+arrstrRow[3]
strRow=strRow+"<tr class='unselected' id='"+strId+"' style='cursor:pointer' OnClick=\"javascript:additem('"+strId+"','"+flag+"','"+objtxtinput.id+"');\" OnMouseOver=\"javascript:applyClass('"+strId+"','"+flag+"');\"><td class='datacol1' >"+strScripId+"</td><td class='datacol2'>"+strAssetName+"</td></tr>"
i++}
//strRow=strRow+"<tr class='unselected'><td colspan='3' align='left' style='color:blue;text-decoration:underline;height:25px;padding-left:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'"+flag+"','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'"+searchStr+"',3,'0',true);\">previous</span></td></tr>"
strRow = strRow + "<tr><td colspan='3' align='right'><table><tr class='unselected'><td colspan='2' align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:8px;font-size:11px;'><span style='cursor:pointer' onclick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'0',true);\">Equity</span></td>";
		if (option == "1")
		{
		    strRow = strRow + "<td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:8px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'2',true);\">Others</span></td><td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'3',true);\">Delisted</span></td>";
		}
		else if (option == "2")
		{
		    //strRow = strRow + "<td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:8px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'1',true);\">Equity 1</span></td><td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"')),'" + searchStr + "',3,'2',true);\">Others</span></td>";
		    strRow = strRow + "<td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:8px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'1',true);\">Equity 1</span></td><td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'3',true);\">Delisted</span></td>";
		}
		else if (option == "3")
		{
		    //strRow = strRow + "<td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:8px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'1',true);\">Equity 1</span></td><td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'3',true);\">Delisted</span></td>";
		    strRow = strRow + "<td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:8px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'1',true);\">Equity 1</span></td><td align='right' style='color:blue;text-decoration:underline;height:25px;padding-right:5px;font-size:11px;'><span style='cursor:pointer' OnClick=\"javascript:showDivSel(event,'" + flag + "','../../../../../../Common/backpageAsset.aspx',document.getElementById('"+objtxtinput.id+"'),'" + searchStr + "',3,'2',true);\">Others</span></td>";
		}
strRow+="</tr></table></td></tr>";
strTable="<table id='tblDropdown"+flag+"' class='border' cellspacing='0' cellpadding='0' onmouseout=\"return doSomething(event);\">"+strRow+"</table>"
if(arrstrData.length==1){
var arrstrRow=arrstrData[0].split(":")
document.getElementById(hdnid).value=arrstrRow[2]+"|"+arrstrRow[0]+"|"+arrstrRow[1]}
else{
document.getElementById(hdnid).value=""
keyValue[keyValue.length]=searchStr+"~"+strTable+"~1"}
return strTable}
function ajaxFunction(){
var xmlHttp=null
try{xmlHttp=new XMLHttpRequest();}
catch(e){
try{xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");}
catch(e){
try{xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");}
catch(e){
alert("Your browser does not support AJAX!")
return false}}
}return xmlHttp}
function checkadd(){
if(document.getElementById("hdnWatchListID").value==""){
alert("Enter WatchList Name")
return false}
document.getElementById("hdnscrip").value=document.getElementById("hdnIdAssetWL").value.split("|")[0]
if(parseInt(document.getElementById("txtWLScrip").value.length)<3){
alert("Enter atleast 3 letters or scrip code to add scrip.")
document.getElementById("txtWLScrip").value="Scrip Name"
document.getElementById("txtWLScrip").focus()
return false}
if(document.getElementById("hdnscrip").value=="NaN"){
alert("Please Enter a Valid Scrip Name/Scrip Code")
document.getElementById("txtWLScrip").value="Scrip Name"
document.getElementById("txtWLScrip").focus()
return false}
if(document.getElementById("hdnscrip").value==""){
alert("Please Enter a Valid Scrip Name/Scrip Code")
document.getElementById("txtWLScrip").value="Scrip Name"
document.getElementById("txtWLScrip").focus()
return false}
var rowcnt=document.getElementById("hdnWLCount").value
scri=document.getElementById("hdnWLScripCode").value
if(scri !="")
scri=scri.split(",")
for(i=0;i<rowcnt;i++){
if(scri[i]==parseInt(document.getElementById("hdnIdAssetWL").value)){
alert("Scrip Already Exists in your watchlist")
document.getElementById("txtWLScrip").value="Scrip Name"
document.getElementById("txtWLScrip").focus()
return false}}
if(scri.length>=30){
alert("You cannot add more than 30 scrips in a watch list.")
document.getElementById("txtWLScrip").value="Scrip Name"
document.getElementById("hdnscrip").value=""
document.getElementById("hdnIdAssetWL").value="Scrip Name"
document.getElementById("txtWLScrip").focus()
return false}
return true}
function AddScrip(){
if(!ce())return false
var xmlHttpObj=ajaxFunction()
var iRandom=Math.random()
var hdnScrCd=document.getElementById("hdnscrip")
var hdnWLID=document.getElementById("hdnWatchListID")
var hdnWLname=document.getElementById("hdnWLName")
MyURL="/WatchList/WatchlistDetails.aspx?ID="+hdnWLID.value+"&ScripCd="+hdnScrCd.value+"&Flag=ASCRIP&random="+iRandom
xmlHttpObj.onreadystatechange=function(){
if(xmlHttpObj.readyState==4){
var xmlString=new String()
xmlString=xmlHttpObj.responseText
if(xmlString !=""&&xmlString !="undefined"){
var str1=xmlString.split("#$#")
var titleStr=str1[0]
if(titleStr=="BsePlus"){
xmlString=str1[1]}
else{
//return false;
document.location.href = "/InvalidUrl.htm?Page=Invalid_Data"}}
if(xmlString=="0"){
document.getElementById("hdnAddedScripCode").value=hdnScrCd.value
var tempWLIDAS=hdnWLID.value
var temWLNameAS=document.getElementById("hdnWLName").value
uwl();//ShowUserWatchLists()
/*var opt=geto("hdnvt");
 switch(opt.value)
    {
        case "s":
        streamer(tempWLIDAS,temWLNameAS);
        break;
        case "h":
        ShowHeatMap(tempWLIDAS,temWLNameAS);
        break;
        case "g":
        ShowSelWL(tempWLIDAS,temWLNameAS,"scrip_id",true,'asc')        
        break;     
    } */
    //ShowSelWL(tempWLIDAS,temWLNameAS,"scrip_id",true,'asc')        
    ssw(tempWLIDAS,temWLNameAS,"",true,'')        
    document.getElementById("txtWLScrip").value="Scrip Name"
}
else if(xmlString=="1"){
alert("Scrip Already Exist"); return false;}
else if(xmlString=="-1"){
alert("Scrip Insertion Error"); return false;}
else if(xmlString=="2"){
alert("You can add max 30 scrips")
return false}}}
xmlHttpObj.open("GET",MyURL,true)
xmlHttpObj.send(null)}
function DispStockReach(hdn)
{   var hvalue = document.getElementById(hdn).value
 
    if (hvalue != "") 
    {  
        var s1=hvalue.split("|")
	 
        //location.href = "../../../../../../StockReach/AdvanceStockReach.aspx?scripcode=" + s1[0]

	 location.href = "../../../../../../StockReach/StockQuote/Equity/"+s1[2]+"/"+s1[1]+"/"+ s1[0] +"/" + s1[3]
    }
}
function chkkey(e,objtxtinput)
{
    var unicode = e.charCode ? e.charCode : e.keyCode
    if (unicode == 38 || unicode == 95 || unicode == 37 || unicode == 42 || unicode == 64 || unicode == 35 || unicode == 36 || unicode == 33 || unicode == 94 || unicode == 91 || unicode == 93) {
        return false;
    }
    else
        return true;
}
function chkscrPG()
{var hpgval = document.getElementById("hdnIdAssetPG").value
 if (hpgval != "")
    {var scd = hpgval.split("|")[0];var snm = hpgval.split("|")[1];     
    for (var isc =0; isc<arrPGCd.length; isc++)
    {
        if (scd == arrPGCd[isc])
        {
        
           alert("Scrip Already Exists in your Peer")
           document.getElementById("txtPG").value="Scrip Name"
           document.getElementById("txtPG").focus()
           return false;           
        }
    }
    /*
    var strn="<div>";
    var peertbl = document.getElementById("tblpeerscr");
    var chkboxcnt =arrPGCd.length;
    var cellcnt = peertbl.rows[0].cells.length;
    var rows = peertbl.rows.length;
    var txt = document.getElementById("txtPG").value;
    var Part ='Q';
    strn += "<div id = 'tdapg"+rows.toString()+chkboxcnt.toString()+ "'><input type='checkbox' id='chk"+rows.toString()+chkboxcnt.toString()+"' value='"+scd+"' checked='checked' onclick='javascript:clicked(this.id,this.checked,this.value,\""+Part+"\");' style='background-color:#f0fefc;'/>&nbsp;"+ txt + "</div>";
    chkboxcnt++;c1++;if (c1==cellcnt)strn+="</div>";
    //peertbl.innerHTML += strn;
    document.getElementById("dvPeers").innerHtml+= strn;
    
    //return true;*/
        
    //document.getElementById("txtPG").value ="Scrip Search";
    //peerString+= "#ROW#"+scd+ "#@#"+ snm;
    document.getElementById("hdnPeer").value+="#ROW#"+scd+ "#@#"+ snm;    
    //arrPeers[arrPeers.length] = scd;
    Submit(peerString,pgPart);
    }
}