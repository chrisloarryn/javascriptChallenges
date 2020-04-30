const name = [ 'ball', 'box', 'ball', 'ball', 'box'£ ]
const price = [ 2, 2, 2, 2, 2 ]
const weight = [ 1, 2, 1, 1, 3 ]

function numDuplicates(name, price, weight) {
    // Write your code here
    let products = [];
    let sum = 0;
    for (let i in name) {
        products.push({name: name[i], price: price[i], weight: weight[i]})
    }
    //console.log(products)
    let seen = new Set();
    var hasDuplicates = products.some((currentObject) => {
        return seen.size === seen.add(currentObject.name).size;
    });
    sum = products.length - seen.size;
    return sum
}

console.log(numDuplicates(name, price, weight))
