"use strict";

// function getNumGrandkids(){
//     return 0;
// }

function getNumGrandKids(name) { // name is the parameter
    let num = 0;
    if (name == "Dana") {
        num = 6;
    }
    else if (name == "Karla") {
        num = 3;
    }
    else if (name == "Leslye") {
        num = 2;
    }
    else if (name == "Matt") {
        num = 0;
    }
    return num;
}

let num = getNumGrandKids("Dana");


console.log(num);

console.log(getNumGrandKids());

// function addNumbers(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

function addNumbers(num1, num2) {
    return num1 + num2;
}

let a = 7;
let b = 9;
let c = addNumbers(a, b);

let message = `${a} + ${b} = ${c}` 
console.log(message);