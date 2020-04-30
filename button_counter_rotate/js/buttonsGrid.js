const b = document.getElementById('btn5');
const arr = [1, 2, 3, 6, 9, 8, 7, 4];

b.onclick = () => {
    // unshift()	Adds new elements to the beginning of an array, and returns the new length
    // pop()	Removes the last element of an array, and returns that element
    // pop delete last element and It's added to the start of the array
    arr.unshift(arr.pop());
    document.getElementById('btn1').innerHTML = arr[0].toString();
    document.getElementById('btn2').innerHTML = arr[1].toString();
    document.getElementById('btn3').innerHTML = arr[2].toString();
    document.getElementById('btn6').innerHTML = arr[3].toString();
    document.getElementById('btn9').innerHTML = arr[4].toString();
    document.getElementById('btn8').innerHTML = arr[5].toString();
    document.getElementById('btn7').innerHTML = arr[6].toString();
    document.getElementById('btn4').innerHTML = arr[7].toString();
}
