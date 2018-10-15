let formGet=document.getElementById("userForm");
console.log(formGet);
let formSubset=formGet["yes/no"]
console.log(formSubset);
let formData=formSubset.value;
console.log(formData);
document.myForm.text.focus();

//form checklist
let checkboxList = document.myForm.feature;
let length=checkboxList.length;
console.log(length);
for(let i=0;i<length;i++){
    //console.log(checkboxList[i]);
    if(checkboxList[i].checked){
        console.log(checkboxList[i].value);
    }
}

let submitB=document.myForm.submit;
//console.log(submitB);
submitB.addEventListener("click", event => {
                            event.preventDefault();
                            let docu=document.myForm.text.value;
                            alert("Hello, " + docu);
                        }
)

let button2 = document.getElementById("button2");
let errorName = document.getElementById('errorName');
let errorAge = document.getElementById('errorAge');
let errorYoung=document.getElementById("errorYoung");
button2.addEventListener("click", event =>{
                    errorName.style.display = "none";  
                    errorAge.style.display = "none";
                    errorYoung.style.display="none";
                    let formName=document.form2.name.value;
                    let formAge=document.form2.age.value;
                    if(!formName){
                        event.preventDefault();
                        errorName.style.display = "block";  
                    }
                    if(!formAge){
                        event.preventDefault();
                        errorAge.style.display = "block";  
                    }
                    if(parseInt(formAge)<19){
                        event.preventDefault();
                        errorYoung.style.display="block";
                    }
                }
)

//regex
let testReg=new RegExp("abc");
let testStr="abcd";
console.log(testReg.test(testStr));
