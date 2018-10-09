'use strict';

// Create an index.html page and add an external link to this .js file.
document.write("Successfully Linked Exercises Day 1");

// Open up index.html in the browser. If you see "Successfully Linked Exercises Day 1" on your page, you may continue.
// Check

//1. Define a new variable `quote` for the value "A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things."
let quote="A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things.";

//Log out the quote
console.log(quote);

//Log out the type of the variable. Is it a string? A number? Something else?
console.log(typeof quote);

//2. Define a variable `quoteLength` that stores the length of the quote.
let quoteLength=quote.length;

//Log out the length
console.log(quoteLength);

//3. Create a new variable `attributedQuote`. Add the string "- Rear Admiral Grace Hopper" to the end of the `quote` variable with an appropriate space in between.
//This new value should not _replace_ the `quote` variable's value
//Log out the new quote
let attributedQuote=quote + " - Rear Admiral Grace Hopper";
console.log(attributedQuote);

//4. Create a function `attribute` that takes a quote and author and returns the attributed quote.
//Example: Takes "The key to being a successful programmer is to learn how to learn." and "- Shannon Burns" and returns "The key to being a successful programmer is to learn how to learn. - Shannon Burns"
let attribute=function(quote,author){
    return quote + " " + author
}
console.log(attribute("The key to being a successful programmer is to learn how to learn.", "- Shannon Burns"));

//5. Create a function `sumOfNumbers` that takes 2 numbers and returns the sum of those numbers.
let sumOfNumbers=function(num1,num2){
    return num1+num2
}
console.log(sumOfNumbers(1,2));

//6. Create a function `sumOfLowNumbers` that takes 5 numbers and returns the sum of all numbers that are less than or equal to 6.
let sumOfLowNumbers=function(arrayNum){
    let sum=0;
    for (var i in arrayNum){
        if (arrayNum[i]<=6){
            sum+=arrayNum[i];
        }
        else{
            continue;
        }
    }
    return sum
}
console.log(sumOfLowNumbers([1,2,3,4,100]));
//scales for flexible input, array can range in size

//7. Go to https://pages.github.com/ and read through the tutorial to create a Github page.
// Choose Project site, Start from scratch. When you're finished, link your new project page here.

// https://vd1992.github.io/
//check

//8. Commit and push this file to your repository. Submit the URL for Assignment 1 on Brightspace.
//check
