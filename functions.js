"use strict"; // enable modern Javascript modifications

/**********************************************************
 * Functions
 **********************************************************/

/**
 * function definition
 *  starts with the keyword "function"
 *  followed by function name
 *  followed by parameter list in parentheses
 *    no types are specified, unlike Java
 *    arguments are passed by value, like Java
 *  follow by function body in curly brackets
 *  no return type specified, unlike Java
 */
function mean(x, y) {
  return (x + y) / 2;
}

console.log(mean(3, 7)); // 5

// unspecified arguments are assigned a value of undefined
function sayHello(name) {
  console.log(`Hello ${name}`);
}
sayHello(); // Hello undefined

// functions are first-class entities and may be assigned to variables
const mathOperation = mean;
console.log(mathOperation(9, 5)); // 7

/**
 * function expression
 *  there is no function name after the function keyword
 */
let average = function (x, y) {
  return (x + y) / 2;
};

/**
 * arrow function
 *  a more concise syntax for function expressions
 *  the parameters are listed in parentheses
 *  parameters are followed by the arrow operator (=>)
 *  the return keyword is implied
 *  similar to lambdas in Java
 */
average = (x, y) => (x + y) / 2;

// if there are no parameters, use empty parentheses
const hello = () => console.log("Hello World");

// multi-line arrow functions must use curly brackets and the return keyword
average = (x, y) => {
  const sum = x + y;
  return sum / 2;
};
console.log(average(3, 7)); // 5
