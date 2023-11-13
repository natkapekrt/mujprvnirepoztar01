var myNodelist = document.getElementByTegName("LI");
 
var i;
 
for (i=0; i < MyNodelist.lenght; i++){
     var span = document.createElement("SPAN")
     var txt= document.createTextNode("\u00D7")
     span.ClassName = "close";
     span.appendChild(txt)
     myNodelist [i].appendChild(span);
}
 
var close = document.getElementsByClassName("close");
var i;
for(i = 0;i < close.length; i++){
 close [i].oneclick = function(){
 var div = this.parentElement;
 div.style.displey = "none";
   }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.taget.tagName === 'LI') {
        ev.taget.classList.toggle('checked');
        }
    } , false);  
