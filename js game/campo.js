var gameover;
var youwin;
var butt;
var pos=0;
var pos1=0;
var pos2=0;
var pos3=0;
var pos4=0;
var elem;
var m=null;
var g1;
var up1;
var down1;
var t=null;
var l=null;
var palla;
var punto;
var a=0;
var b=0;
var c;
var d=0;

function gestoreLoad () {
 try {
elem=(document.getElementById("palla"));
butt=(document.getElementById("bb"));
up1=(document.getElementById("up"));
down1=(document.getElementById("down"));
g1=(document.getElementById("g1"));
palla=(document.getElementById("verapalla"));
punto=(document.getElementById("score"));
youwin=(document.getElementById("win"));
gameover=(document.getElementById("over"));
elem.style.top="";
elem.style.left="";
g1.style.top="";
g1.style.left="";
palla.style.top="";
palla.style.left="";
palla.style.bottom="";
g1.style.bottom="";
punto.value=0;
butt.onclick=gestoreMove;
up1.onmousedown=gestoreMove1u;
down1.onmousedown=gestoreMove1d;
up1.onmouseup=gestoreMoveferma;
down1.onmouseup=gestoreMoveferma;
} catch ( e ) {
 alert("gestoreLoad " + e);
 }
}
window.onload = gestoreLoad;


function gestoreMove(){
butt.disabled=true;
clearInterval(m);
m= setInterval(frame,10);
  function frames(){
	if(pos==0){clearInterval(m);
	m= setInterval(frame,10);}
	else{
	  pos--;
      elem.style.top = pos + 'px';
      pos2=elem.style.top;
      c=Math.random();
      if((pos3==0)&&(c<=0.5)){gestoreLancio(pos2);}}}
  function frame() {
   if(pos==470){clearInterval(m);
	m= setInterval(frames,10);}
	else{
      pos++;
      elem.style.top = pos + 'px';
      pos2=elem.style.top;
      c=Math.random();
      if((pos3==0)&&(c<=0.5)){gestoreLancio(pos2);}}}} /*fa muovere il giocatore avversario questa funzione*/
	  
function gestoreLancio(){
 clearInterval(l);
 l= setInterval(frammes,10);
 palla.style.top = pos2;
 function frammes(){
  d=parseInt(document.getElementById("g1").style.top, 10);
  b=parseInt(document.getElementById("verapalla").style.top, 10);
  if((pos3==750)&&((b>=(d-10))&&((d+90)>=b))){ 
   clearInterval(l);
   palla.style.left=0;
   pos3=0;
   punto.value++;
   a++;
   gestoreVinci(a);}
    else{
	 if(pos3>=900){
	  clearInterval(l);
	  palla.style.left=0;
	  pos3=0;
	  punto.value--;
	  a--;
	  gestorePerdi(a);}
	   else{
		pos3++;pos3++;pos3++;
        palla.style.left = pos3 + 'px';
		gestoreMove;}}}}/*spara il disco questa funzione*/

function gestoreMove1u(){
 clearInterval(t);
 t= setInterval(frame,10);
  function frame() {
	if(pos1==-5){clearInterval(t);}
	else{
      pos1--;
      g1.style.top = pos1 + 'px' ; 
	  gestoreMove1u;}}}/*muove su il portiere*/
	  
function gestoreMove1d(){
 clearInterval(t);
 t= setInterval(frame,10);
  function frame() {
   if(pos1==450){clearInterval(t);}
   else{
    pos1++;
    g1.style.top = pos1 + 'px';
	gestoreMove1d;}}}/*muove giu il portiere*/

function gestoreMoveferma(){
 clearInterval(t);}/*blocca il portiere quando il dito si alza dal mouse*/

function gestoreVinci(){if(a>=10){
 youwin.style.cssText="opacity:1";
 setTimeout(spetta1Secondo, 1000);    
 function spetta1Secondo() {    
 punto.value=("Refresh to play again");} 
  down1.disabled=true;
  up1.disabled=true;
 
  }
   else{gestoreMove;}
}
function gestorePerdi(){
 if(a<=-1){
  gameover.style.cssText="opacity:1";
  setTimeout(spetta1Secondo, 1000);    
  function spetta1Secondo() {    
   punto.value=("Refresh to play again");} 
   down1.disabled=true;
   up1.disabled=true;
   
 }
    else{gestoreMove;}}/*le funzioni gestoreVinci e gestorePerdi fanno comparire la scritta di vittoria/sconfitta dopo aver controllato il punteggio e consigliano di refreshare la pagina*/
	
