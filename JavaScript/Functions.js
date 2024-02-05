// Functions Excercise

// Task 1: Write a function named letterFinder that accepts two parameters
// Task 2: Code a for loop inside the function's body.  
    // The for loop's counter should start at 0, increment by 1 on each iteration 
    // Should exit when the counter variable's value is equal to the length of the word parameter
// Task 3: Add an if statement inside the for loop whose condition works as follows:
    // Access each of the letters inside the passed in word using the counter variable
    // Check if the current word[i] is equal to the value of match
// Task 4: console.log inside the body of the if statement ('Found the', match. 'at', i)
// Task 5: Write else condition: console.log('---No match found at', i)
// Task 6: 
    // Call the letterFinder and pass it as its first argument as the string "test" and as its second argument, the string "t".
    // Your output should be the following:

    // Found the t at 0

    // ---No match found at 1

    // ---No match found at 2

    // Found the t at 3



function letterFinder (word, match) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder('test', 't')

// Creating arrays and objects
    // Tasks to complete:
    // Create a new empty array literal and assign it to the variable clothes.

    // Add 5 of your favorite items of clothing as strings using the push() method.

    // Remove the fifth piece of clothing from the array using the pop() method.

    // Add a new piece of clothing using the push() method.

    // Use console.log to show the third item from the clothes array in the console.

    // Create a new empty object literal and assign it to the variable favCar.

    // Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.

    // Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.

    // Use the console to log the entire favCar object.

// Arrays
let clothes = [];

clothes.push('sweaters', 'leggings', 'graphic tees', 'jeans', 'cardigans');
clothes.pop(clothes); // to remove the last element, which would be cardigans
clothes.push('flannels');

console.log(clothes);
console.log(clothes[3]); // shows the third element

// Objects
let favCar = {};

favCar.color = 'red';
favCar.covertible = true;

console.log(favCar)

