/*
Currying:
1. Make a copy of the method and create more methods out of it by pre-setting some arguments inside the function
2. Currying doesn't call a function. It just transforms it.
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

//Currying using closure : simple variable
let mul = function(x){
    return function(y){
        console.log(x * y)
    }
}

let mulByTwo = mul(2);
mulByTwo(3); // 6

//Currying using closure : function
function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  // usage
  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
  
  console.log( curriedSum(1)(2) ); // 3