/*
Polyfills:
1. Piece of code written in JS.
2. Used to provide modern features on older browsers that do not natively support these features.
3. A browser callback made in JS that allows modern functionality to work in older browsers
4. HTML5 feature canvas
5. ES6 featrues like map, filter, reduce
Eg: Babel is a modern transpiler to make modern JS features work in older browser engines.
*/

//Array
var cities = [
    "New Delhi",
    "Jaipur",
    "Noida",
    "Hyderabad"
]

/*
Map:
1. Syntax: array.map( function( currentValue, index, arr ) )
2. creates a new array with the results of calling a function for every array element.
3. calls the provided function once for each element in an array, in order.
4. does not execute the function for empty elements.
5. does not change the original array.
*/

//ES6 map usage
var mapResult = cities.map( city => console.log(city) ); 

//Polyfill for ES6 map
Array.prototype.myPolyfillMap = function(callback){
    var resultArray = [];
    for(var i=0; i<this.length; i++){
        resultArray.push( callback( this[i], i, this ) );
    }
    return resultArray;
}

//polyfill map usage
var polyfillMapResult = cities.myPolyfillMap( city => console.log(city) ); 

/*
Filter:
1. Syntax: array.filter( function( currentValue, index, arr ), thisValue )
2. creates an array filled with all array elements that pass a test (provided as a function).
3. does not execute the function for empty array elements.
4. does not change the original array.
*/

//ES6 filter usage
var filterResult = cities.filter( city => city === "Hyderabad")
console.log(filterResult)

//Polyfill for ES6 filter
Array.prototype.myPolyfillFilter = function(callback, context){
    var resultArray = [];
    for(var i=0; i<this.length; i++){
        if( callback.call( context, this[i], i, this ) ){
            resultArray.push(this[i]);
        }
    }
    return resultArray;
}

//polyfill filter usage
var polyfillFilterResult = cities.myPolyfillFilter( city => city !== "Hyderabad")
console.log(polyfillFilterResult)

/*
Reduce:
1. array.reduce( ( accumulator, currentValue, index, arr ) => {}, initialValue );
2. The first time the callback is called accumulator and currentValue can be one of two values.
3. If initialValue is provided in the call to reduce(), then:
    a. accumulator will be equal to initialValue
    b. currentValue will be equal to first value in the array
4. If no initialValue is provided, then:
    a. accumulator will be equal to the 1st value in the array
    b. currentValue will be equal to the 2nd
3. executes a reducer function on each element in the array
*/

//ES6 reduce usage

//on arrays
const nums = [10,20];
var reduceResult = nums.reduce( (total, value) => total+value, 11 ); //takes 11 as initial total
console.log(reduceResult)

//on objects
const users = [
    { name: 'John', age: 34 },
    { name: 'Mehdi', age: 19 },
    { name: 'Alex', age: 10 },
]
const reduceSumOfAges = users.reduce( (sum, user) => sum+user.age, 0);
console.log(reduceSumOfAges);

//Polyfill for ES6 reducer
Array.prototype.myPolyfillReduce = function(fn, initial){
    let values = this;
    values.forEach(item => {
        initial = initial !== undefined ? fn(initial, item) : item; 
    })
    return initial;
}

//polyfill reduce usage
const polyfillReduceResult = nums.myPolyfillReduce( (a,b) => a+b );
console.log(polyfillReduceResult);
