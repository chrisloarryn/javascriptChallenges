'use strict';
// calculate Area and Perimeter
const myFunction = (num) => {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    const r = parseFloat(num);
    const area = PI * r * r;
    const perimeter = 2 * PI * r;
    // Print the area of the circle:
    console.log(area);

    // Print the perimeter of the circle:
    console.log(perimeter);

    try {
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch (error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
};

myFunction(2.6);
