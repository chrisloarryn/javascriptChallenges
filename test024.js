function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        // Write your code here
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

}

// fizzBuzz(16)

function isPrime(n) {
    if (n===1)
    {
      return false;
    }else if(n === 2)
    {
      return true;
    }else{
      for(var x = 2; x < n; x++)
      {
        if(n % x === 0)
        {
          return false;
        }
      }
      return true;  
    }
}
// console.log(isPrime(16))

const obj = { name: 'John', lastName: 'Bliss', city: 'Florida' }
const operation = 'delete'
const prop = 'city'
const newValue = 'Seattle'

function manipulateStudentRecord(obj, operation, prop, newValue) {
    // write your code here
    let newObj;
    switch (operation) {
        case 'edit':
            const field = {[prop]: newValue}
            newObj = {...obj, ...field}
            break;
        case 'delete':
            newObj = {...obj}
            delete newObj[prop];
            break;
        default:
            newObj = {...obj}
    }
    return newObj
}

// console.log(manipulateStudentRecord(obj, operation, prop, newValue));


let TEAMS = [ [ 1, 2 ], [ 1, 3 ] ]
const R = 50

function devTeam(teams, r) {
    // Write your code here
    //console.log('TEAMS::', TEAMS)
    //console.log('R::', R)
    for (let team of teams) {
        for (let i in team) {
            if (team[i] < 0) team[i] = 0
            // Write your code here
            //console.log(team[i]);
        }
    }

}

// devTeam(TEAMS, R)

let inputs = [ '1', '-2', '-8', '4', '5' ];
const n = 5
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    
    // console.log(t)
}



function calculateClosestTo0 (arr) {
    return arr.reduce((acc, x) =>
        acc === 0 ? x :
        x > 0 && x <= Math.abs(acc) ? x :
        x < 0 && -x < Math.abs(acc) ? x : acc
    , 0)
}

console.log(calculateClosestTo0(inputs));