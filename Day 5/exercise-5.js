//cycle through questions functionality
// let button1=document.getElementById("submitB1");
// let button2=document.getElementById("submitB2");
// let button3=document.getElementById("submitB3");
// let button4=document.getElementById("submitB4");

let butP=document.getElementById("bp");
let butN=document.getElementById("bn");
let counter=1;

let button5=document.getElementById("submitB5");
let divq1=document.getElementById("q1");
let divq2=document.getElementById("q2");
let divq3=document.getElementById("q3");
let divq4=document.getElementById("q4");
let divq5=document.getElementById("q5");

let scoring=function(){
    //let answer1=q1.name.value;
    console.log(divq1);
    alert("hello");
}

let next=function(){
    counter++;
    if(counter === 6){
        scoring();
    }
    else{
        butN.innerHTML="Next"
        switch(counter){
            case 2:
                divq1.style.display="none";
                divq2.style.display="block";
                break;
            case 3:
                divq2.style.display="none";
                divq3.style.display="block";
                break;
            case 4:
                divq3.style.display="none";
                divq4.style.display="block";
                break;
            case 5:
                divq4.style.display="none";
                divq5.style.display="block";
                butN.innerHTML="Submit"
                break;
        }
    }
}

let prev=function(){
    if(counter===1){
        return
    }
    else{
        counter--;
        switch(counter){
            case 1:
                divq2.style.display="none";
                divq1.style.display="block";
                break;
            case 2:
                divq3.style.display="none";
                divq2.style.display="block";
                break;
            case 3:
                divq4.style.display="none";
                divq3.style.display="block";
                break;
            case 4:
                divq5.style.display="none";
                divq4.style.display="block";
                butN.innerHTML="Next"
                break;
        }
    }
}

// console.log(divq1);
// //divq1.style.display="block";
// //divq2.style.display="none";
// //divq3.style.display="none";
// //divq4.style.display="none";
// //divq5.style.display="none";
// button1.addEventListener("click", event =>{
//         console.log("hi");
//         // if(document.q1.name.value==null){
//         //     console.log("no");
//         //     event.preventDefault();
//         //     console.log(document.q1.name.value);
//         // }
//         if(false){

//         }
//         else{
//             //console.log(document.q1.name.value);
//             divq1.style.display="none";
//             divq2.style.display="block";
//         }

// })
// button2.addEventListener("click", event =>{
//         divq2.style.display="none";
//         divq3.style.display="block";

// })
// button3.addEventListener("click", event =>{
//         divq3.style.display="none";
//         divq4.style.display="block";

// })
// button4.addEventListener("click", event =>{
//         divq4.style.display="none";
//         divq5.style.display="block";

// })
// button5.addEventListener("click", event =>{
//     //divq1.style.display="none";
//     //divq2.style.display="block";

// })
