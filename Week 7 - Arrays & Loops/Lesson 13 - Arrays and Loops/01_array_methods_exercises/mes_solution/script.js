const fruits = ["banana", "orange", "apple"];

// output each fruit to the console


// 1
// You can ask for the index number of any array item
// Print the index of "orange" to the console
console.log("Prompt 1: Index of Orange");
console.log(fruits.indexOf("orange"));

// 2
// Print the length of the array to the console
console.log("Prompt 2: Length of Array");
console.log(fruits.length);

// 3
// .pop() removes the last item
// Print the removed item and the new array to the console
console.log("Prompt 3: .pop()");
console.log(fruits.pop());
console.log(fruits);


// 4
// .shift() removes the first item
// Print both the removed item and the new array to the console
console.log("Prompt 4: .shift()");
console.log(fruits.shift());
console.log(fruits);

// 5
// .push() adds whatever you pass into the method parenthesis to the end of an array
// Add "kiwi" to the end of the array
// Print the new array to the console
console.log("Prompt 5: .push()");
fruits.push("kiwi");
console.log(fruits);


// 6
// .unshift() adds whatever you pass into the method parenthesis to the beginning of an array
// Add "cherry" to the front of the array
// Print the new array to the console
console.log("Prompt 6: .unshift()");
fruits.unshift("cherry");
console.log(fruits);

// 7
// .splice() to adjust array values (REMOVE)
// 1st number = index value for splice
// 2nd number = number of items to remove

// Remove the first item from the array
// Print the new array to the console
console.log("Prompt 7: .splice() - REMOVE");
fruits.splice(0, 1);
console.log(fruits);


// 8
// .splice() to adjust array values (ADD)
// 1st number = index value for splice
// 2nd number = number of items to remove
// 3rd value = item to be added to array

// Add "pear" as the second item in the array
// Print the new array to the console
console.log("Prompt 8: .splice() - ADD");
fruits.splice(1, 0, "pear");
console.log(fruits);

// 9
// reverse() reverses the order of the items in the array without modifying them
// Print your reversed array to the console
console.log("Prompt 9: .reverse()");
fruits.reverse();
console.log(fruits);

// 10
// join()  combines - or concatenates - an array into a string
// The string is separated by whatever you pass into the parentheses

// Join all the fruit together by the word "and" - dont forget spaces
// Print your new string to the console
console.log("Prompt 10: .join()");
console.log(fruits.join(" and "));

// 11
// Multi-dimensional arrays

const produce = [["kiwi", "pear", "cherry"], ["broccoli", "celery", "carrots"]];

// Access multidimensional arrays similarly to regular arrays
// First square bracket - array
// Second square bracker - item
// Print the entire first nested array to the console
console.log("Prompt 11 & 12: Nested Arrays");
console.log(produce[0]);

// 12
// Using bracket notation, print the second item of the first array to the console
// Using bracket notation, print the first item of the second array to the console
console.log(produce[0][1]);
console.log(produce[1][0]);

