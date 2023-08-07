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

    process.stdout.write("\n");
    process.stdout.write("plusMinus:")
    process.stdout.write("\n");
    process.stdout.write(res)
    process.stdout.write("\n");
    // console.log("plusMinus Results:", res);
}

plusMinus(plusMinusArr);

/* stdout linebreak function */
function lineBreak() {
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
    process.stdout.write("\n");
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

    process.stdout.write("\n");
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

const countSortula = [
    63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33
]

function countingSort(countSortula) {
    let countArr = new Array(100).fill(0);

    for (let i of countSortula) {
        countArr[i] += 1;
    }

    console.log("Sorted Count:", countArr);
    return countArr;
}

countingSort(countSortula);

lineBreak();

/* Week 1 - Problem 9: Pangrams */

const testString = "We promptly judged antique ivory buckles for the next prize";

function pangrams(testString) {
    let result = false;
    let response = "";

    let alphabetRegex = /[A-Z]/g

    const isPangram = new Set(testString.toUpperCase().match(alphabetRegex)).size;

    if (isPangram === 26) {
        result = true
    } else {
        result = false
    }

    if (result === false) {
        response = "not pangram";
    } else {
        response = "pangram";
    }

    console.log("Response:", response);
    return response;
}

pangrams(testString);

lineBreak();

/* Week 1 - Problem 10: Permuting Two Arrays */

const challenger = 81;
const firstArr = [36, 25, 50, 69, 76, 21, 42, 68, 61, 59, 1, 17, 10, 69, 57, 71, 12, 13, 53, 67, 64, 22, 66, 61, 77, 11, 59, 71, 39, 2, 46, 36, 69, 58, 73, 68, 20, 29, 10, 31, 41, 16, 23, 25, 44, 25, 26, 39, 21, 67, 12, 80, 7, 41, 21, 46, 19, 5, 20, 59, 24, 66, 6, 71, 62, 8, 4, 53, 51, 37, 68, 13, 30, 40, 26, 10, 29, 12, 7];
const secondArr = [18, 65, 11, 75, 16, 26, 67, 63, 16, 61, 66, 76, 25, 68, 25, 65, 77, 15, 20, 54, 79, 27, 46, 55, 55, 37, 29, 88, 32, 66, 85, 22, 20, 49, 74, 85, 42, 75, 11, 18, 41, 80, 63, 59, 77, 63, 24, 83, 25, 69, 13, 52, 22, 42, 71, 45, 70, 45, 57, 43, 78, 17, 63, 16, 62, 8, 71, 22, 16, 39, 81, 62, 20, 9, 21, 56, 76, 46, 37];

function twoArrays(challenger, firstArr, secondArr) {
    let result = [];

    /* needed to specify the sort functions! was failing half of the tests otherwise */
    let firstSort = firstArr.sort(function(a, b){return a - b});
    let secondSort = secondArr.sort(function(a, b){return a - b}).reverse();

    for (let i = 0; i < firstArr.length; i++) {
        if (firstSort[i] + secondSort[i] < challenger) {
            result.push("false");
        } else {
            result.push("true");
        }
    }

    let response = ""

    if (result.includes("false")) {
        response = "NO"
    } else {
        response = "YES"
    }

    console.log("Is Every A[i] + B[i] greater than or equal to k?", response);
    return response
}

twoArrays(challenger, firstArr, secondArr);

lineBreak();

/* Week 1 - Problem 11: Subarray Division 1 */

const chocoArr = [2, 2, 1, 3, 2];
const birthDate = 4;
const birthMonth = 2;

function birthday(chocoArr, birthDate, birthMonth) {
    // write code here
}

birthday(chocoArr, birthDate, birthMonth);

lineBreak();