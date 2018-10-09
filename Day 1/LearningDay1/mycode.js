alert("hello");
console.log("Message");
let VarExample=5;
console.log(VarExample);
let num1=123;
let num2=321;
console.log(num1+num2);
let firstName="Vachan";
let lastName='Dhillon';
console.log(firstName, lastName);

//fortune teller
let numChil=3;
let partner="name";
let loc="city";
let job="career";
console.log("You will be a " + job +" in " + loc + ", and married to " + partner + " with " + numChil + " kids.");

//age calc
let birthYear=1992;
let targetYear=2019;
let ageHigh=targetYear-birthYear;
let ageLow=ageHigh-1;
console.log("I will be either " + ageHigh + " or " + ageLow + " in " + targetYear);

//supply
let age=25;
let targetAge=30;
let daysIn=(targetAge-age)*365;
console.log("To go to the target age of " + targetAge + " you need " + daysIn + " kilos of it");

//geometrizer
let radius=10;
let circ=2*radius*3.14159;
let area=(Math.pow(radius,2))*3.14159;
console.log("The circumference is " + circ + " and the area is " + area);

//temperature
let cels=25;
let fahrenOut=(cels*1.8)+32;
let fahren=86;
let celsOut=(fahren-32)*(5/9);
let bools=true;
let boolfalse=false;
console.log(cels + "°C is "+ fahrenOut + "°F");
console.log(fahren + "°F is "+ celsOut + "°C");
if(cels<10){
    console.log("Put on a coat");
}
if(bools || boolfalse){
    let blarg=true;
}

//puppyage
let pupage=function(age){
    return age*7
}
console.log("Your 2 year old puppy is " + pupage(2) + " in dog years");

let sentenceMake=function(){
    console.log("The quick brown fox...");
}
sentenceMake();

let nameGen=function(first,last){
    return first + " " + last
}
let first="Vachan";
let last="Dhillon";
console.log(nameGen(first, last));
let nameSum=nameGen(first, last);

//activity the calculator 
let square=function(num){
    return num*num
}
let halfnumber=function(num){
    return num/2
}
let percenter=function(numerator, denom){
    let percen=(numerator/denom)*100;
    return percen
}
let circarea=function(radius){
    let area=3.14159*(radius*radius);
    area=Math.trunc(area*100);
    return area/100
}
