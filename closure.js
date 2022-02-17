//Assigning function to a variable
var b = function z(){
    console.log('7');
}

/*
Closure:
1. It is a function bundled together with its lexical environment / scope.
2. A closure gives you access to an outer function's scope from an inner function.
3. Closures are created every time a function is created, at function creation time.
*/
function x(){
    var a = 7;
    function y(){
        console.log(a); // 7 : before changing a value  // 100 : after changing value 
    }
    y();
    a = 100;
    //JavaScript allows returning a function
    return y;
}
//After assigning x() to w, x will be vanished ! But, it remembers the reference to a. Reference to variable persists.
var w = x();
console.log(w); // [Function: y]
w(); // 7

function first(){
    var f = 900;
    function second(){
        var s = 7;
        function third(){
            console.log(f, s); // 900 7
        }
        third();
    }
    second();
}
first();