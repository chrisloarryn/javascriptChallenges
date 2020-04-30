// text in reverse

const sd = "1234"
const s = 'Number(1234)';


function reverseString(s) {
    try {
        var splitString = s.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        console.log(joinArray);
    }
    catch (error)
    {
        // Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
        console.log(error.message);
        console.log(s);
    }
}

console.log(reverseString(s))
