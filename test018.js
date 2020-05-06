'use strict';

const dummy_data = [{x: 1, y: 1},
    {x: 2, y: 3},
    {x: 3, y: 3},
    {x: 3, y: 4},
    {x: 4, y: 5}];

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let count = 0;
    for (const index in objects) {
        if (objects[index].x == objects[index].y) {
            count++;
        }
    }
    return count;
}

console.log(getCount(dummy_data))
