// Section 1: Basic Rules and Data Types

// Excercise 1: Basic Rules and Data Types
var thisIsANewVariable = 10;

// using == to check value but NOT data type, === checks both
if(thisIsANewVariable == 10){
    console.log("thisIsANewVariable = " + thisIsANewVariable);
}

// Excercise 2: Defining Core Data Types
let myString = "This is a string.";

let myFloat = 22.7;

let myBoolean = true;

// Check values and types
console.log("myString = " + myString + " " + typeof myString);
console.log("myFloat = " + myFloat + " " + typeof myFloat);
console.log("myBoolean = " + myBoolean + " " + typeof myBoolean)

// Excercise 3: Single-Line Comments

// Declares a variable named currentScore with the value 95.
let currentScore = 95;

// Exercise 4: Equality Comparison
console.log("100" == 100); // Shows true because value is the same
console.log("100" === 100); // Shows false because type is different

// ============================================================================

// Section 2: Conditionals and Control Flow

// Exercise 5: Ternary Operator
let isWeekend = false;
let schedule;

isWeekend ? schedule = "Day off" : schedule = "Work day";

console.log(schedule); // Check to see if it works

// Exercise 6: If/Else Structure
let userAge = 16;

// Prints Access Denied because userAge doesn't meet the condition
if(userAge >= 18){
    console.log("Access granted");
}else{
    console.log("Access denied");
}

// Exercise 7: Logical AND Operator
let hasPermission = true;
let itemCount = 3;

if(hasPermission == true && itemCount < 5){
    console.log("Ready to process");
}

// Exercise 8: For Loop
for(let i = 0; i < 5; i++){
    console.log(i + 1);
}

// Exercise 9: Loop Control
for(let i = 0; i < 9; i++){
    if(i == 7){
        console.log("i = 7 reached");
        break;
    }
}

// Exercise 10: Ensuring Execution
let counter = 10;

do{
    console.log("running once");
}while(counter > 10);

// ============================================================================

// Section 3: Functions and Data Structures

// Exercise 11: Fucntion Definition (Coding)
function calculateArea(width, height){
    return width * height;
}

let resultArea = calculateArea(5, 10);
console.log(resultArea);

// Exercise 12: Array Manipulation
let fruitList = ["Apple", "Banana"];

// Add the "Grape"
fruitList.push("Grape");

// Remove the first element in the array, "Apple"
fruitList.shift();
console.log(fruitList[0]); // Check that it worked

console.log(fruitList.indexOf("Banana"));

// Exercise 13: Array Copying
let originalData = [1, "dog", true];

let clonedData = originalData.slice();

/* You should be aware that clonedData is a shallow copy of originalData
be aware that changing the elements of clonedData will NOT change the elements
of originalData */

// Exercise 14: Object Constructor
function Animal(species, sound){
    this.species = species;
    this.sound = sound;
}

// Exercise 15: Object Instantiation
let Spot = new Animal("Canine", "Woof");
let Whiskers = new Animal("Feline", "Meow");

let animalArray = [];
animalArray.push(Spot);
animalArray.push(Whiskers)

console.log(animalArray); // See if it works