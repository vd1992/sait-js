//define function normally
let greet=function(){
    console.log("Hello");
}

//immediately invoke anonymous functions
(function(){
    console.log("Hello");
});

const a=5;
//a=6;

var funcs = [];
for (var i = 0; i < 3; i++) {
      funcs.push(function(){
          console.log(j);
          }
        );
    }
for (var j = 0; j < funcs.length; j++){
      funcs[j](); // should output 0, then 1, then 2
    }

const getMessage = name => "hello " + name + "!";
console.log(getMessage("Vachan"));

const sum = (num1,num2) => num1+num2;
console.log(sum(3,4));
const fibi = (n) => {
    if(n<3){
        return 1
    }
    else{
        return fibi(n-1) + fibi(n-2)
    }
}
console.log(fibi(9));

let multiply = (a,n=1) => {if(a==null){return "Error"} else{return a*n}}
console.log(multiply(5));

function product(...numbers) {
    return numbers.reduce((currentProduct, number) => currentProduct*number, 1)
}
console.log(product(1,2,3,4,5));
function join(...list) {
    return list;
}
console.log(join([1, 2, 3], [4, 5, 6]));

const user = {name: 'Cody',loginCount: 1,goldStatus: true};
const className = 'container';
// const html = '<div class="' + className + '">'
//         + '<h2>Welcome' + (user.goldStatus ? ' to our gold status member, ' : ', ') +user.name + '!' + '</h2>'
//         + '<p>Today is ' + "newDate()" + '</p>'        
//         + '<p>You have logged in ' + ++user.loginCount + ' times.</p>'      + '</div>';
//document.getElementById("target").innerHTML=html;
document.getElementById("target").innerHTML=`<div class="  ${className}  '">
<h2>Welcome ${(user.goldStatus ? ' to our gold status member, ' : ', ')} ${user.name} ! </h2>
<p>Today is  ${new Date()}</p>
<p>You have logged in ${user.loginCount+1} times.</p></div>`

const trips = [  { mph: 10, hours: 3 },  { mph: 30, hours: 2 },  { mph: 25, hours: 4 }];
trips.forEach((arr,index) => console.log(`${(arr.mph*arr.hours)} miles, at ${index}`));

const availableLaptops = [  
    { name: 'MacBook', RAM: 8 },  
    { name: 'Asus', RAM: 32 },  
    { name: 'Lenovo', RAM: 16 },
    { name: 'HP', RAM: 4 }
];
const every16 = availableLaptops.every((Laptops) => Laptops.RAM>=16);
console.log(every16);
const some16 = availableLaptops.some((Laptops) => Laptops.RAM>=16);
console.log(some16);

const groceries = [
    { name: 'bananas', aisle: 'produce', price: 2 },
    { name: 'flour', aisle: 'baking', price: 5 },
    { name: 'avocados', aisle: 'produce', price: 4},  
    { name: 'lettuce', aisle: 'produce', price: 5 },  
    { name: 'olive oil', aisle: 'baking', price: 10 },  
    { name: 'shampoo', aisle: 'beauty', price: 12 }
];
const cheap=groceries.filter((arr) => arr.price<5);
console.log(cheap);

const trips2 = [  
    { miles: 5, hours: 1},  
    { miles: 6, hours: 0.5},  
    { miles: 4, hours: 2 }
]
const speeds=trips2.map((arr) => arr.miles/arr.hours);
console.log(speeds);

const posts = [  
    { id: 23, title: 'Becoming an ES6 Wizard', body: 'Ille vivere. Ut ad te ...' },  
    { id: 29, title: 'JavaScript Pro Tips', body: 'Pellentesque euismod ...' },  
    { id: 31, title: 'Acing your next JS interview', body: 'Lorem ipsum dolor sitamet...'}
];
const currentId = 29;
const currentPost=posts.find((arr) => arr.id == currentId);
const currentPostIndex=posts.findIndex((arr) => arr.id == currentId);
console.log(currentPost);
console.log(currentPostIndex);

const transactions = [ 5, 10, 15 ];
const sumAgain = transactions.reduce(((currentSum, number) => currentSum+number), 0);
console.log(sumAgain);

