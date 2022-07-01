'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 3));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
console.log("Hello!");
};

logger();


let a = 3;
function addTwo(x) {
let ret = x + 2;
return ret;
}
let b = addTwo(a);
console.log(b);


let val = 7
function createAdder() {
    function addNumbers(a, b) {
     let ret = a + b
     return ret
   }
    return addNumbers
 }
let adder = createAdder()
let sum = adder(val, 8)
console.log('example of function returning a function: ', sum



1 function createCounter() {
2  let counter = 0
3     const myFunction = function() {
4     counter = counter + 1
5          return counter
6           }
7   return myFunction
8 }
9 const increment = createCounter()
10 const c1 = increment()
11 const c2 = increment()
12 const c3 = increment()
13 console.log('example increment', c1, c2, c3)


const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);