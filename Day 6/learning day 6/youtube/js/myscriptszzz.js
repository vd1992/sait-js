//pull links from page into array
let linkz=document.querySelectorAll("a");

//loop through array, get href attribute, generateThumbnail, create image, and then append to its link, which is a tags as that is what i is
for(let i of linkz){
    let names=i.getAttribute("href");
    let thumbUrl=youtube.generateThumbnailUrl(names);
    let imagNew=document.createElement("img");
    imagNew.src=thumbUrl;
    i.appendChild(imagNew);
}
