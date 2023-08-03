/* the following is a solution for the "Square Every Digit" kata on CodeWars 
https://www.codewars.com/kata/546e2562b03326a88e000020/javascript */
const num = 6741962
console.log("Test Number:", num);

function squareDigits(num) {
    let numArr = Array.from(num.toString()).map(Number);

    let squareArr = [];

    for (i = 0; i < numArr.length; i++) {
        let square = numArr[i] * numArr[i];
        squareArr.push(square);
    }

    let answer = squareArr.reduce(function (accum, digit) {
        if (digit < 10) {
            return (accum * 10) + digit
        } else {
            return (accum * 100) + digit
        }
    }, 0);

    return answer
}

squareDigits(num);
console.log("Solution:", squareDigits(num))
/* that was a solution for the "Square Every Digit" kata on CodeWars 
https://www.codewars.com/kata/546e2562b03326a88e000020/javascript */

/* the following is a solution for the "Array.diff" kata on CodeWars
https://www.codewars.com/kata/523f5d21c841566fde000009/javascript */
const a = [-1, 18, 16, -12, -2, 4, 3, 13, -5, 8];
const b = [-1, 18, 16, -12, -2, 4, 3];
const c = [13, -5, 8];

function arrayDiff(a, b) {
    let array = a.map(Number);
    console.log("Here are all the numbers:", array);

    let remove = b.map(Number);
    console.log("Remove this number:", remove);

    let newArr = [];

    for (i = 0; i < array.length; i++) {
        let matchingValue = false;

        for (k = 0; k < remove.length; k++) {
            if (array[i] === remove[k]) {
                matchingValue = true;
            }
        }

        if (!matchingValue) {
            newArr.push(array[i])
        }
    }

    return newArr;
}

arrayDiff(a, b);
console.log("Solution:", arrayDiff(a, b));
console.log("Should Match:", c);
/* that was a solution for the "Array.diff" kata on CodeWars
https://www.codewars.com/kata/523f5d21c841566fde000009/javascript */