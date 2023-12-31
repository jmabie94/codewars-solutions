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
const firstArr = [
    36, 25, 50, 69, 76, 21, 42, 68, 61, 59, 1, 17, 10, 69, 57, 71, 12, 13, 53, 67, 64, 22, 66, 61, 77, 11, 59, 71, 39, 2, 46, 36, 69, 58, 73, 68, 20, 29, 10, 31, 41, 16, 23, 25, 44, 25, 26, 39, 21, 67, 12, 80, 7, 41, 21, 46, 19, 5, 20, 59, 24, 66, 6, 71, 62, 8, 4, 53, 51, 37, 68, 13, 30, 40, 26, 10, 29, 12, 7
];
const secondArr = [
    18, 65, 11, 75, 16, 26, 67, 63, 16, 61, 66, 76, 25, 68, 25, 65, 77, 15, 20, 54, 79, 27, 46, 55, 55, 37, 29, 88, 32, 66, 85, 22, 20, 49, 74, 85, 42, 75, 11, 18, 41, 80, 63, 59, 77, 63, 24, 83, 25, 69, 13, 52, 22, 42, 71, 45, 70, 45, 57, 43, 78, 17, 63, 16, 62, 8, 71, 22, 16, 39, 81, 62, 20, 9, 21, 56, 76, 46, 37
];

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
    let combos = 0;

    if (chocoArr.length < birthMonth) {
        return 0;
    }

    for (let i = 0; i < chocoArr.length; i++) {
        let total = 0;
        for (let k = 0; k < birthMonth; k++) {
            total += chocoArr[i-k];
        }
        if (total === birthDate) {
            combos++;
        }
    }

    console.log("Total Combinations:", combos);
    return combos;

}

birthday(chocoArr, birthDate, birthMonth);

lineBreak();

/* Week 1 - Problem 12: XOR Strings 2 */
/* BUGGED JAVASCRIPT - NO CODE AVAILABLE TO DEBUG */

/* Week 1 - Mock Test */

/* Mock Test Question 1 - Find The Median */

const medArr = [0, 1, 2, 4, 6, 5, 3, 7];
/* 0 1 2 3 4 5 6 7 */

function findMedian(medArr) {
    let sortArr = medArr.sort((a, b) => a - b);
    let midEl = Math.floor(sortArr.length / 2)

    let medInt = 0

    if (sortArr.length % 2 === 0) {
        medInt = (sortArr[midEl - 1] + sortArr[midEl]) / 2
    } else {
        medInt = sortArr[midEl]
    }

    console.log("Median:", medInt)
    return medInt
}

findMedian(medArr);

lineBreak();

/* Mock Test Question 2 - Flipping The Matrix */

const matrixFlip = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
]

/* I want to see if I can find a way to make this simplified */
function flippingMatrix(matrixFlip) {
    let subMatrix = matrixFlip.length / 2;
    let maxValue = 0;
    let maxSum = 0;

    for (let row = 0; row < subMatrix; row ++) {
        for (let col = 0; col < subMatrix; col ++) {
            maxValue = Number.MIN_VALUE;
            maxValue = Math.max(matrixFlip[row][col], maxValue);
            maxValue = Math.max(matrixFlip[row][2 * subMatrix - col - 1], maxValue);
            maxValue = Math.max(matrixFlip[2 * subMatrix - row - 1][col], maxValue);
            maxValue = Math.max(matrixFlip[2 * subMatrix - row - 1][2 * subMatrix - col - 1], maxValue);

            maxSum += maxValue
        }
    }

    console.log("Max Sum of Submatrix:", maxSum);
    return maxSum;
}

flippingMatrix(matrixFlip);

lineBreak();

/* Week 2 - Problem 1: Sales by Match */

const saleArr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const saleInt = saleArr.length;

function sockMerchant(saleInt, saleArr) {
    let pairs = 0
    let sortSale = saleArr.sort((a, b) => a - b);
    /* console.log(sortSale); */
    let count = 1;

    for (let i = 0; i < saleInt; i = i + count) {
        count = 1
        for (let k = i + 1; k < saleInt; k++) {
            if (sortSale[i] === sortSale[k]) {
                count++;
            }
        }
        console.log(`Count of ${i}:`, count);
        if (count % 2 === 0) {
            pairs += count / 2
        } else {
            pairs += Math.floor(count / 2)
        }
    }

    console.log("Total Number of Pairs:", pairs);
    return pairs;
}

sockMerchant(saleInt, saleArr);

lineBreak();

/* Week 2 - Problem 2: ZigZag Sequence */
/* BUGGED JAVASCRIPT - NO CODE AVAILABLE TO DEBUG */

/* Week 2 - Problem 3: Drawing Book */

const targetPage = 5
const totalPages = 6

function pageCount(totalPages, targetPage) {
    let frontPageDiff = targetPage - 1
    let backPageDiff = totalPages - targetPage
    let shorterDiff = 0

    /* use the shortest # of Pages difference */
    if (frontPageDiff < backPageDiff) {
        shorterDiff += frontPageDiff
    } else if (backPageDiff < frontPageDiff) {
        /* odd numbers on the right of every two page flip, so if a number is odd and the difference is 1, that means the target is on the same two page flip, thus 0 */
        if (totalPages % 2 !== 0 && backPageDiff === 1) {
            shorterDiff = 0
        /* even numbers on the left of every two page flip, so if a number is even and the difference is 1, that means the target is on the prior page, thus 1 */
        } else if (totalPages % 2 === 0 && backPageDiff === 1 ) {
            shorterDiff = 1
        /* odd numbers on the right of ever two page flip, so if a number is odd and the difference is 5, that means the target is on the left side 2 flips back, not 3*/
        } else if (backPageDiff % 2 !== 0 && backPageDiff > 1) {
            shorterDiff += backPageDiff -1
        } else {
            shorterDiff += backPageDiff
        }
    } else if (frontPageDiff === backPageDiff) {
        /* same logic for these, operating on the assumption that if both are equal, and the front page will always require a flip with any difference, the back is a good starting place because it has a chance of needing zero flips */
        if (totalPages % 2 !== 0 && backPageDiff === 1) {
            shorterDiff = 0
        } else if (totalPages % 2 === 0 && backPageDiff === 1 ) {
            shorterDiff = 1
        } else if (backPageDiff % 2 !== 0 && backPageDiff > 1) {
            shorterDiff += backPageDiff -1
        } else {
            shorterDiff += frontPageDiff
        }
    }

    console.log("Pages from Front:", frontPageDiff)
    console.log("Pages from Back:", backPageDiff)
    console.log("Shortest Distance:", shorterDiff);

    let pageFlips = 0

    if (shorterDiff === 0 ) {
        pageFlips += 0
    } else if (shorterDiff === 1) {
        pageFlips += shorterDiff
    } else if (shorterDiff % 2 === 0) {
        pageFlips += shorterDiff / 2
    } else {
        pageFlips += Math.ceil(shorterDiff / 2)
    }

    console.log("How Many Flips?", pageFlips);
    return pageFlips
}

pageCount(totalPages, targetPage);

lineBreak();

/* Week 2 - Problem 4: Tower Breakers */

const towerCount = 4;
const towerHeight = 8;

function towerBreakers(towerCount, towerHeight) {
    let winner = 0

    /* deceptively simple answer here
    if all towers have a height of 1, 1st player has no moves, second player wins
    if there are an even number of towers of any height other than 1, second player copies first player's moves until first player runs out of moves and second player wins
    if there are an odd number of towers of any height other than 1, first player gets the final copy move in the first round and second player runs out of moves before first player does */
    if (towerCount % 2 === 0 || towerHeight === 1) {
        winner = 2
    } else {
        winner = 1
    }

    console.log(`If there are ${towerCount} towers of height ${towerHeight}, the winner will be Player ${winner}`)
    return winner
}

towerBreakers(towerCount, towerHeight);

lineBreak();