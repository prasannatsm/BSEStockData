var browser=navigator.appName
function ShowDiv1(objid){
var div2=document.getElementById("divFeatures")
var browser=navigator.appName
var url="/Common/FeatureContent.aspx?Link="+objid.id
var xmlHttpObj=new ajaxFunction()
document.getElementById("theframe").style.display=""
div2.style.display=""
div2.style.top="150px"
div2.style.left="250px"
xmlHttpObj.onreadystatechange=function(){
if(xmlHttpObj.readyState==4){
var xmlString=new String()
xmlString=xmlHttpObj.responseText
var divHtml=xmlString.split("@")[0]
if(xmlString!=""){
var strHtml="<table cellspacing=0 background='/Includes/Images/footer_bg01.gif'><tr><td style=width:100%;height:25px;border-right-style:#079c8b;border-width:1px;padding-left:7px;><font color=#ffffff size=2px ><strong id='lnkName'>"+divHtml+"</strong></font></td><td style=padding-right:5px;border-width:1px;border-left-style:#079c8b;><a style='cursor:pointer;'><img id='imgClose' src='/Images/closeButton.gif' onclick='HideDiv2()' alt='Close'/></a></td></tr></table>"
div2.innerHTML=strHtml+"<p align=center style=position:relative;top:150px;><font size=3>"+divHtml+" information will display here</font></p>"}}}
xmlHttpObj.open("GET",url,true)
xmlHttpObj.send(null)}
function HideDiv2(){
document.getElementById("divFeatures").style.display="none"
document.getElementById("theframe").style.display="none"}
var imgwidth=""
function mdown(src){
var obj=document.getElementById(src)
if(imgwidth==""){
imgwidth=obj.offsetWidth}
if(imgwidth==obj.offsetWidth){
obj.style.width=obj.offsetWidth+parseInt("-2")+"px"}
else
obj.style.width=imgwidth+"px"}
function mup(src){
var obj=document.getElementById(src)
if(imgwidth==(obj.offsetWidth+2)){
obj.style.width=obj.offsetWidth+parseInt("2")+"px"}}
