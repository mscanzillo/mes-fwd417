// Let's create 4 functions!

// 1. Square of a number
console.log("1. Square of a number")
// Create a function called `squared` that takes one argument
// The function will return the argument times itself (the square of the number)
function squared(myNum) {
    return myNum * myNum;
}
console.log(squared(2));
console.log(squared(5));
console.log(squared(-3));

// BONUS: Check if the argument is a number first! (Hint: conditionals - if statements)

// 2. Get string length!
console.log("2. Get string length!")
// Create a function called `stringLength` that returns the length of a string (how many characters?)
// So: stringLength("hello") would return 5
function stringLength(myString) {
    return myString.length
}
console.log(stringLength("testing"))
console.log(stringLength("This is a longer string."))

// 3. Add two numbers together
console.log("3. Add two numbers together")
// Create a function called addNumbers
// Takes two arguments and returns the sum of those arguments
function addNumbers(myFirstNum, mySecondNum) {
    return myFirstNum + mySecondNum;
}
console.log(addNumbers(4, 2));
console.log(addNumbers(6, 3));

// 4. Create a function called sayHello
console.log("4. Create a function called sayHello")
// Takes one argument
// Returns a string that is the combination of "Hello, " + the argument passed into the function
// So sayHello("Paul") would return "Hello, Paul";
function sayHello(name) {
    return "Hello, "+name;
}

console.log(sayHello("Paul"));