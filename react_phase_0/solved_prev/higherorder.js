// 1. Higher Order Functions (30 min)
// Mini Task 1: Function as a Value

// Create a function:

// greet()

// and store it inside a variable.

// Print the result.

// Concept: Functions are just values.
function greet(){
    console.log("hello world")
}
const treat=greet;
treat();
// Mini Task 2: Callback

// Create a function:

// calculate(a, b, operation)

// Pass different functions:

// add
// subtract

// Goal: Understand passing functions around.
function add(a,b){
    return a+b;
}
function substract(a,b)
{
    return a-b;
}
function calculate(a,b,operation)
{
 return operation(a,b);
}
let a=10;
let b=2;
console.log(calculate(a,b,(a,b)=>{return a+b}));
console.log(calculate(a,b,(a,b)=>{return a-b}));

// Mini Task 3: Function Returning Function

// Create:

// multiplyBy(2)

// which returns a new function.

// Example:

// double = multiplyBy(2)

// double(5)
// → 10

// Outcome: React event handlers and custom hooks become easier.
function multiplyBy(a){
    return function(b){
        return a*b;
    }
}
let double=multiplyBy(2);
console.log(double(5));