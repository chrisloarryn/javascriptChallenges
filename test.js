'use strict';




/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    // Write your code here
    // multiples_3 = [];
    // multiples_5 = [];
    const m3 = n%3 === 0;
    const m5 = n%5 === 0;
    switch(m3,m5){
        case (m3 && m5):
            console.log('FizzBuzz');
            break;
        case (m3 && m5):
            console.log('Fizz');
            break;
        case (m5 && !m3):
            console.log('Buzz');
            break;
        default:
            console.log(n)

    }
        
        

}

fizzBuzz(30);