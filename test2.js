const operations =
    [
        'push 4',   // 4
        'pop',      // EMPTY
        'push 3',   // 3
        'push 5',   // 5
        'push 2',   // 2 good

        'inc 3 1',  // 3
        'pop',      // 6
        'push 1',   // 1
        'inc 2 2',  // 1
        'push 4',   // 4

        'pop',      // 1
        'pop'       // 8
    ];

function superStack(operations) {
    // console.log(operations);
    // operations.split(' ')
    let v = [];
    let values = [];
    return operations.forEach(el => {
        let split = [...el.split(' ')];
        const sp = split.length > 1 ? [split[0], parseInt(split[1]), (split[2] ? parseInt(split[2]) : undefined)] : split;
        // console.log(sp)
        switch (sp[0]) {
            case ('push'):
                console.log(values.push(sp[1]));
                break;
            case ('pop'):
                console.log((values.pop()));
                v.push([]);
                break;
            case ('inc'):
                // sp[1], sp[2] => 3,1
                const n = values.forEach((value, index, array) => {
                    
                });
                n ? v.push(sp[1]) : v.push([]);
                break;
            default:
                console.log('not method defined!')
        }
    });

    //return v
}

//superStack(operations)
superStack(operations)
