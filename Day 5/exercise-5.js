//create needed variables, here are previous and next button as well as their counter, and the final submit
let butP=document.getElementById("bp");
let butN=document.getElementById("bn");
let counter=1;

//pull the questions, needed to dynamically control their visibility
let divq1=document.getElementById("q1");
let divq2=document.getElementById("q2");
let divq3=document.getElementById("q3");
let divq4=document.getElementById("q4");
let divq5=document.getElementById("q5");

//create scoring function to run after q5, it grades and is executed in the final run case of next()
//it pulls form answers, runs through compare statements to grade, and lastly alerts the score
let scoring=function(){
    let answer1=document.fq1.name.value;
    let answer2=document.fq2.selector.value;
    let answer3=document.fq3.yesno.value;
    let answer4=document.fq4.num.value;
    let answer5=document.fq5.owner.value;
    //iniate grading portion
    let score=0;
    if(answer2=="Correct"){
        score++;
    }
    if(answer3=="Correct"){
        score++;
    }
    if(answer4==2){
        score++;
    }
    if((answer5.toLowerCase())=="vachan"){
        score++;
    }
    //alert with greeting, name, and grade
    alert("Hello " + answer1 + ", you got: " + score + "/4 correct");
}

//function to proceed to next question, swap visibility based off switch cases, if q5 returned, changed text to submit and prepare scoring
let next=function(){
    counter++;
    //if at end of counter, execute scoring
    if(counter >= 6){
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

//function to go backwards, effectively the same as next except flipped, with a condition to avoid attempting to go to question 0
let prev=function(){
    //prevent going to question 0
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
