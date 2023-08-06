/* Doing the 1 Month Interview Prep Kit */

/* Week 1 - Problem 1: Plus Minus */

const plusMinusArr = [-4, 3, -9, 0, 4, 1]

function plusMinus(plusMinusArr) {
    // Write your code here
    let posCount = 0
    let negCount = 0
    let zeroCount = 0
    let total = plusMinusArr.length

    for (let i = 0; i < plusMinusArr.length; i++) {
        if (plusMinusArr[i] === 0) {
            zeroCount += 1;
        } else if (plusMinusArr[i] > 0) {
            posCount += 1;
        } else if (plusMinusArr[i] < 0) {
            negCount += 1;
        }
    }

    let posRatio = (posCount / total).toFixed(6)
    let negRatio = (negCount / total).toFixed(6)
    let zeroRatio = (zeroCount / total).toFixed(6)

    let res = `${posRatio}
${negRatio}
${zeroRatio}`

    process.stdout.write("plusMinus:")
    process.stdout.write("\n");
    process.stdout.write(res)
    // console.log("plusMinus Results:", res);
}

plusMinus(plusMinusArr);

/* stdout linebreak function */
function lineBreak() {
    process.stdout.write("\n");
    process.stdout.write("\n");
}

lineBreak();

/* Week 1 - Problem 2: Mini-Max Sum */

const miniMaxArr = [7, 69, 2, 221, 8974]

function miniMaxSum(miniMaxArr) {
    // Write your code here
    miniMaxArr.sort();

    let miniSum = miniMaxArr[0] + miniMaxArr[1] + miniMaxArr[2] + miniMaxArr[3]
    let maxSum = miniMaxArr[1] + miniMaxArr[2] + miniMaxArr[3] + miniMaxArr[4]

    let res = `${miniSum} ${maxSum}`

    process.stdout.write("miniMaxSum:")
    process.stdout.write(res);
}

miniMaxSum(miniMaxArr);

lineBreak();

/* Week 1 - Problem 3: Time Conversion */
const timeString = "04:59:59AM"

function timeConversion(timeString) {
    let timeCode = timeString.slice(-2);

    let justTime = timeString.slice(0, -2);

    let hourMinSec = justTime.split(":")

    let hour = Number(hourMinSec[0]);
    hourMinSec.splice(0, 1);
    let minSec = hourMinSec.toString().replace(",", ":");

    let convertedHour = ""

    if (timeCode === "AM" && hour === 12) {
        convertedHour = "00"
    } else if (timeCode === "PM" && hour !== 12) {
        hour += 12;
        convertedHour = hour.toString();
    } else {
        convertedHour = hour.toString().padStart(2, '0');
    }

    let convertedTime = `${convertedHour}:${minSec}`

    process.stdout.write("Time Given:");
    process.stdout.write("\n");
    process.stdout.write(timeString);
    process.stdout.write("\n");
    process.stdout.write("Time Conversion:");
    process.stdout.write("\n");
    process.stdout.write(convertedTime);
}

timeConversion(timeString);

lineBreak();

/* Week 1 - Problem 4: Sparse Arrays */

const sparseStrings = ['ab', 'ab', 'abc'];
const sparseQueries = ['ab', 'abc', 'bc'];

function matchingStrings(sparseStrings, sparseQueries) {
    let res = []

    for (i = 0; i < sparseQueries.length; i++) {
        res[i] = 0;
        for (k = 0; k < sparseStrings.length; k++) {
            if (sparseQueries[i] === sparseStrings[k]) {
                res[i]++;
            }
        }
    }

    console.log("Matching Strings:", res);
    return res;
}

matchingStrings(sparseStrings, sparseQueries);

lineBreak();

/* Week 1 - Problem 5: Lonely Integer */

const lonelyArray = [1, 2, 3, 4, 3, 2, 1];

function lonelyInteger(lonelyArray) {
    const lonelyBoi = 
    lonelyArray.filter((v, i) => lonelyArray.indexOf(v) === lonelyArray.lastIndexOf(v));

    console.log("Which is the loneliest Number?", Number(lonelyBoi[0]));
    return Number(lonelyBoi[0]);
}

lonelyInteger(lonelyArray);

lineBreak();

/* Week 1 - Problem 6: Flipping Bits */

const flipBit = 9

function flippingBits(flipBit) {

    let stringMe = flipBit.toString(2);
    let longMe = 32-stringMe.length;
    let longerBro = "";

    for (let i = 0; i < longMe; i++) {
        longerBro += "0";
    }

    let longString = longerBro.concat(stringMe);
    let flipMe = "";

    for (let i of longString) {
        if (i === "0") {
            flipMe += "1";
        } else if (i === "1") {
            flipMe += "0";
        }
    }
    
    console.log("Flipped Number:", parseInt(flipMe, 2));

    return parseInt(flipMe, 2);
}

flippingBits(flipBit);

lineBreak();

/* Week 1 - Problem 7: Diagonal Difference */

const diaDiffArr = [
    [11, 2 , 4],
    [4, 5, 6],
    [10, 8, -12]
]

const diaDiffArrDeux = [
    [12, 6, 7, 34, -5],
    [15, -9, 1, 14, 8],
    [74, 5, -15, 2, 0],
    [9, -14, 25, 1, 9],
    [42, 9, -6, 18, 7]
]

/* this attempt only works for 3x3 matrix */
function diagonalDifferenceFailure(diaDiffArr) {
    // Write your code here
    let topLeft = Number(diaDiffArr[0][0])
    let deadCenter = Number(diaDiffArr[1][1])
    let botRight = Number(diaDiffArr[2][2])
    let priDia = topLeft + deadCenter + botRight;
    
    let topRight = Number(diaDiffArr[0][2])
    let botLeft = Number(diaDiffArr[2][0])
    let secDia = topRight + deadCenter + botLeft;
    
    let diffAb = Math.abs(priDia - secDia);
    
    console.log("Absolute Difference:", diffAb);

    return diffAb
}

//diagonalDifferenceFailure(diaDiffArr);

function diagonalDifference(diaDiffArrDeux) {
    let priDia = 0
    let secDia = 0

    for (let i = 0; i < diaDiffArrDeux.length; i++) {
        priDia += diaDiffArrDeux[i][i];
        secDia += diaDiffArrDeux[i][diaDiffArrDeux.length - 1 - i];
    }
    console.log("Primary Diagonal Sum:", priDia);
    console.log("Secondary Diagonal Sum:", secDia);

    const abDiff = Math.abs(priDia - secDia);
    
    console.log("Absolute Difference:", abDiff)
    return abDiff;
}

diagonalDifference(diaDiffArrDeux);

lineBreak();

/* Week 1 - Problem 8: Counting Sort 1 */

