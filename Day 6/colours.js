//function that when given array of random colors in hex form, create divs and append to page
//it also appends a text node with the hex value
let pageFill=function(colors,lums){
    for(let i of colors){
        //generate the new elements, a div to be coloured, and a text node with hex, apply styling
        let newBlock=document.createElement('div');
        let textHex=document.createTextNode(i);
        newBlock.style.height="75px";
        newBlock.style.width="75px";
        newBlock.style.backgroundColor=i;

        //pull containing div, append text to color div, attach style class, and then append all as child to holder
        let swathHold=document.getElementById("swathHold");
        newBlock.appendChild(textHex);
        newBlock.classList.add("color");

        //but first, check if colors are dark, if so change text color, for best contrast/visibility
        if(lums=="dark"){
            newBlock.style.color="white";
        }
         swathHold.appendChild(newBlock);
    }
}

//random colour generator
//get values from forms, run generator on button click, get results then pass into page filler function
$('#subm').on('click', function() {
    //let forms=$('inputs');
    let nums=formColor.num.value;
    let hues=formColor.hues.value;
    let lums=formColor.lum.value;
    //pass in requirements, get array called colors which is hex values, pass into function
    let colors=randomColor({
            count:nums,
            hue:hues,
            luminosity:lums
    })
    pageFill(colors,lums);
})
