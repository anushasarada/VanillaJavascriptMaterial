/*
Hoisting:
1. Memory is allocated to every variable and function even before the code starts executing. Assigns undefined
*/

getName(); // This is your Name
console.log(getName); // Prints the entire function
console.log(x); // undefined : If x i defined later, Error : If x is not defined anywhere

var x = 7;

function getName(){
    console.log("This is your Name");
}

getName(); // This is your Name
console.log(getName); //Prints the entire function
console.log(x); // 7

//Hoisting : Arrow function
getArrowName(); // getArrowName behaves a variable with value as undefined 

var getArrowName = () => {
    console.log("This is an Arrow Function");
}