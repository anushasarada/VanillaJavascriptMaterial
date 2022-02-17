/*
Currying:
1. Make a copy of the method and create more methods out of it by pre-setting some arguments inside the function
*/

//Currying using bind
let multiply = function (x, y){
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2); // Initializing one of the parameters with value 2
multiplyByTwo(5); // 10

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5); // 15

let multiplyWithVar = multiply.bind(this, 2, 3); //Ignore this i.e., 5 and multiplies last 2 parameters i.e., 2 & 3
multiplyWithVar(5); // 6

//Currying using closure
let mul = function(x){
    return function(y){
        console.log(x * y)
    }
}

let mulByTwo = mul(2);
mulByTwo(3); // 6