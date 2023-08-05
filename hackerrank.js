/* Doing the 1 Month Interview Prep Kit */

/* Week 1 - Problem 1: Plus Minus */

const arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    // Write your code here
    let posCount = 0
    let negCount = 0
    let zeroCount = 0
    let total = arr.length

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount += 1;
        } else if (arr[i] > 0) {
            posCount += 1;
        } else if (arr[i] < 0) {
            negCount += 1;
        }
    }

    let posRatio = (posCount / total).toFixed(6)
    let negRatio = (negCount / total).toFixed(6)
    let zeroRatio = (zeroCount / total).toFixed(6)

    let res = `${posRatio}
${negRatio}
${zeroRatio}`

    process.stdout.write(res)
    // console.log("plusMinus Results:", res);
}

plusMinus(arr);

/* Week 1 - Problem 2: Mini-Max Sum */

