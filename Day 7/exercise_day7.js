//get button, add Listener
let funcButton=document.getElementById("lyricGet");
lyricGet.addEventListener("click", ()=>{
            //get form inputs on click, form url to use for fetch
            let artistName=document.lyricForm.inputName.value;
            let songName=document.lyricForm.inputSong.value;
            let url="https://api.lyrics.ovh/v1/" + artistName +"/" + songName;

            //execute fetch with formed url, GET request and get response, then pull JSON
            fetch(url, {
                method:"GET",
                headers:{
                    'Content-type':'application/json'
                }
            })                
            .then((response) => {
                return response.json();
            })
            .then((response2) => {
                //error case, if error not null in response, grab holder div and replace contents with message
                if(response2.error!=null){
                    let divHold=document.getElementById("holder");
                    divHold.innerHTML="";
                    divHold.innerHTML="Error, unable to execute request, sorry but either there are typos or you like really obscure stuff";
                }

                //grab response and split into array separated by newline character
                //grab holder, clear it, for loop through array, create P element, fill with an array line and then append
                else{
                    let songArr=((response2.lyrics).split("\n"));
                    let divHold=document.getElementById("holder");
                    divHold.innerHTML="";
                    for(let i of songArr){
                        let pNew=document.createElement("p");
                        pNew.innerHTML=i;
                        pNew.classList.add("lyricP");
                        holder.appendChild(pNew);
                    } 
                }
            })
})
