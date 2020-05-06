'use strict';
const numbers = [1, 2, 3, 4, 5]; // expected  [3 4 9 8 15]

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
const modifyArray = (nums) => {
    const func = nums.map(function(num) {

        if (num % 2 == 0)
        {
            return 2*num;
        }
        else
        {
            return 3*num;
        }
    });
    return func;
}

console.log(modifyArray(numbers));
