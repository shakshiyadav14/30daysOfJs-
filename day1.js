// Activity 1: Variable Declaration

// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.

var num = 14;
console.log(num); // Output: 14

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.

let str = "wlcm to 30days js challenge";
console.log(str); // Output: wlcm to 30days js challenge

// Activity 2: Constant Declaration

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.

const bool = true;
console.log(bool); // Output: true

// Activity 3: Data Types

// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.

let numVal = 100;
let strVal = "JavaScript"; 
let boolVal = false; 
let obj = {name: "shakshi"}; // Object
let arr = [1, 2, 3, 4, 5]; // Array

console.log(typeof numVal); // Output: number
console.log(typeof strVal); // Output: string
console.log(typeof bool); // Output: boolean
console.log(typeof obj); // Output: object
console.log(typeof arr); // Output: object (Arrays are a type of object in JavaScript)

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.

let reassign = "initial Value";
console.log(reassign); // Output: initial Value
reassign = "new Value";
console.log(reassign); // Output: new Value

// Activity 5: Understanding `const`

// Task 6: Try reassigning a variable declared with `const` and observe the error.

const constnum = 22;
console.log(constnum); // Output: Constant Value
// Uncommenting the next line will cause an error
//constVar = "New Value"; // Error: Assignment to constant variable.

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let numberType = 15;
let stringType = "i'm a string";
let booleanType = true;
let objectType = { key: 22 };
let arrayType = [11, 21, 32];
let undefinedType;
let nullType = null;

console.log("Value: ", numberType, ", Type: ", typeof numberType);
// Output: Value: 15, Type: number

console.log("Value: ", stringType, ", Type: ", typeof stringType);
// Output: Value: i'm a string, Type: string

console.log("Value: ", booleanType, ", Type: ", typeof booleanType);
// Output: Value:  true, Type: boolean

console.log("Value: ", objectType, ", Type: ", typeof objectType);
// Output: Value:{ key: 22 } , Type: object

console.log("Value: ", arrayType, ", Type: ", typeof arrayType);
// Output: Value:  [ 11, 21, 32 ] , Type: object 

console.log("Value: ", undefinedType, ", Type: ", typeof undefinedType);
// Output: Value:  <value of undefinedType>, Type: undefined

console.log("Value: ", nullType, ", Type: ", typeof nullType);
// Output: Value:  null, Type: object 


// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.
let letVariable = "heyy ";
console.log(letVariable); // Output: heyy
letVariable = "hii";
console.log(letVariable); // Output: hii

const constVariable = "constant";
console.log(constVariable); // Output: constant

// constVariable = "hiii"; 
// this will throw and error 
