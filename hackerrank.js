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

