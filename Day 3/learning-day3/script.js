console.log(navigator.userAgent);
console.log(navigator.vendor);
console.log(navigator.platform);

let locator=function(position){
    let latitude=position.coords.latitude;
    let longitude=position.coords.longitude;
    let altitude=position.coords.altitude;
    let speed=position.coords.speed;
    let holder=document.getElementById("p");
    holder.innerHTML="Latitude: " + latitude + " Longitude: " + longitude + " Altitude: " + altitude + " Speed: " + speed;
}

let failed=function(){
    let holder=document.getElementById("p");
    holder.innerHTML="Failed";
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(locator,failed);
}
else{
    let holder=document.getElementById("p");
    holder.innerHTML="Internet Explorer, gross, go away";
}

console.log(screen.height, screen.width, screen.colorDepth, screen.orientation);

document.bgColor="lightblue";

let headerVar=document.getElementById("header");
console.log(headerVar);

let ptags=document.getElementsByTagName("p");
console.log(ptags);

let listsVar1=document.getElementsByClassName("lists");
let listsVar2=document.querySelectorAll("li");
let listsVar3=document.querySelector("li");
console.log(listsVar1, listsVar2, listsVar3);

let listCol=document.getElementsByClassName('lists')[2];
console.log(listCol);

let h1H=document.getElementById("h1Header");
h1H.style.color="red";

let newimg=document.createElement("img");
let divhold=document.getElementById("main");
newimg.src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Wikimedia_logo_family_complete-2013.svg/1200px-Wikimedia_logo_family_complete-2013.svg.png"
divhold.append(newimg);

