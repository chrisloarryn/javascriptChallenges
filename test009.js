'use strict';

const eee = 3;
const iii = 1;
const ooi = 2;
const uuu = 3;
const aba = 0;
const abe = -2;
const abi = -5;

let a = abi;

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */

function isPositive(a) {
    if (a > 0) return 'YES'
    if (a === 0) return 'Zero Error'
    if (a < 0) return 'Negative Error'
}

console.log(isPositive(a))
