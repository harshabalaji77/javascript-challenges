/* Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement  */

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;                                      
let JohnHeight = 1.95;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / JohnHeight ** 2;

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} 
else {
    console.log(`John's BMI (${BMIMark}) is higher than Mark's (${BMIJohn})!`);
}