let i=1;
while(i<=12){
    console.log(9*i);
    i++;
}

for(i=1;i<=12;i++){
    for(j=1;j<=12;j++){
        if((i*j)===6){
            console.log("I hate 6");
            break;
        }
        console.log(i + " times " + j + " is " + (i*j));
    }
}

for(i=1;i<21;i++){
    if(i%2===0){
        console.log(i + " is even");
    }
    else{
        console.log(i + " is odd")
    }
}

let foodarr=["pizza", "ice cream", "chocolate"];
console.log(foodarr);
console.log(foodarr.length);

foodarr.push("pop", "cola");
console.log(foodarr[2]);

foodarr[2]="asparagus";
console.log(foodarr);

for(i in foodarr){
    console.log(foodarr[i]);
}

let obj={
    recipeTitle: "food",
    recipeDescription: "yum. is good",
    ingredients: ["ing1", "ing2", "ing3", "ing4", "ing5"],
    directions: "cook",
    rating: 3,
    cookTime: 11
};
console.log(obj.ingredients);

obj.servings=123;
obj.rating=4;
delete obj.cookTime;
console.log(obj);

let movarr=[
    obj1={
        movieName: "abc",
        movieRating: 9
    },
    obj2={
        movieName: "two",
        movieRating: 0
    }
];

for(i of movarr){
    console.log("I give " + i.movieName + " a rating of " + i.movieRating);
}

let recipefunc=function(objectIn){
    console.log("the recipe title: \'" + objectIn.recipeTitle + "\' and a rating of: " + objectIn.rating);
}
recipefunc(obj);

obj.func=function(){
    console.log("dfuhsdfjksdf");
}
obj.func();

let arrMovTemp=["title1","title2524","title3"];
let arrBook=["book1","book2","book343"];
let moviesAndBook=arrMovTemp.concat(arrBook);
let titleLong=moviesAndBook.filter(a=>a.length>6);
console.log(moviesAndBook);
console.log(titleLong);

let numPi= Number(3.14159);
numPi=numPi.toFixed(2);
console.log(numPi);

let days = new Date;
let today=days.getDay();
console.log(today);
let dayplot=function(today){
    switch(today){
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    }
}
console.log(dayplot(today));

let randomNumber=function(){
    let rando=Math.random()
    return Math.trunc(Math.ceil(rando*100))
}
console.log(randomNumber());

let randomPi=randomNumber()*3.14159;
console.log(Math.round(randomPi));

let myName="Vachan Dhillon";
console.log(myName.length);
console.log(myName.toLowerCase());
console.log(myName.substr(7,7));
console.log(myName.substring(7,14));
