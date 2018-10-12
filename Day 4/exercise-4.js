let quoteArr=["Everything you can imagine is real. – Pablo Picasso",
                "Whatever you do, do it well. – Walt Disney",
                "Yesterday you said tomorrow. Just do it. – Nike",
                "Happiness depends upon ourselves. – Aristotle",
                "Simplicity is the ultimate sophistication. – Leonardo da Vinci"
]

let phold=document.getElementById("quotes");
phold.innerHTML=quoteArr[0];
let quoteplace=0;

let timerInc=function(){
    quoteplace++;
    if(quoteplace===5){
        quoteplace=0;
    }
    phold.innerHTML=quoteArr[quoteplace];
    
}
setInterval(timerInc, 30000);

backB=document.getElementById("back");
forthB=document.getElementById("forth");
backB.addEventListener("click", event => {
                            quoteplace=quoteplace-1;
                            if(quoteplace<0){
                                quoteplace=4;
                            }     
                            phold.innerHTML=quoteArr[quoteplace];
                        }
)
forthB.addEventListener("click", event => {
                            quoteplace=quoteplace+1;
                            if(quoteplace===5){
                                quoteplace=0;
                            }
                            phold.innerHTML=quoteArr[quoteplace];
                        }
)

let atweet=document.getElementById("tweet");
atweet.addEventListener("click", event => {
                        atweet.href="https://twitter.com/intent/tweet?text=" + quoteArr[quoteplace];

        }
)
