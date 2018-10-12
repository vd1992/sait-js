let timeget=function(){
    let thetime = new Date();
    let grabId=document.getElementById("clock");
    grabId.innerHTML=thetime;
}
let clockrun=setInterval(timeget,1000);

let walkForwards = true;
let direction=8;
let functioncatWalk = function() {
    var img = document.getElementById('cat');
    var currentLeft = parseInt(img.style.left);
    let currenttop = parseInt(img.style.top);
    if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
        walkForwards = false;        
    }
    if (!walkForwards && (currentLeft <= 0)) {
        walkForwards = true;        
    }
    if (walkForwards) {
        img.style.left = (currentLeft + direction) + 'px';
        img.style.top = (currenttop + direction/4) + 'px';
    } 
    else {
        img.style.left = (currentLeft - direction) + 'px';
        img.style.top = (currenttop - direction/4) + 'px';
    }    
}
setInterval(functioncatWalk, 10);

let div1=document.getElementById("div1");
let divfunc=function(event){
    div1.style.backgroundColor="red";
}
let divfunc2=function(event){
    div1.style.backgroundColor="white";
}
div1.addEventListener("mouseover", divfunc);
div1.addEventListener("mouseout", divfunc2);

let linky=document.getElementById("link")
let counterFunc=function(event){
    event.preventDefault();
    alert("You shall not pass");
}
linky.addEventListener("click", counterFunc);

