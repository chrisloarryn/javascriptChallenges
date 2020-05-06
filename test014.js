'use strict';

const sc = 11

const getGrade = (score) => {
    let grade = '';
    const s = score
    // Write your code here
    if (s > 25 && s <= 30) {
        grade = 'A'
    } else if (s > 20 && s <= 25) {
        grade = 'B'
    } else if (s > 15 && s <= 20) {
        grade = 'C'
    } else if (s > 10 && s <= 15) {
        grade = 'D'
    } else if (s > 5 && s <= 10) {
        grade = 'E'
    } else if (s > 0 && s <= 5) {
        grade = 'F'
    }
    return grade
}

console.log(getGrade(sc))
