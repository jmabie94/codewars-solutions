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