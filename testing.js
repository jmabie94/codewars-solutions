/* GENERAL TESTING GROUND */

/* the following was for a Hackerrank Coding Exam I failed lmao */
/* const meetings = ["1045, 45",
    "1115, 30",
    "1230, 60",
    "1330, 30"];

function conflictInfo(meetings) {
    let mtgTime = [];
    let mtgEnd = [];
    for (let i = 0; i < meetings.length; i++) {
        let mtgArr = meetings[i].split(",")
        console.log(mtgArr)

        let endTime = Number(mtgArr[0]) + Number(mtgArr[1])

        let endTimeCheck = endTime.toString().slice(-2);
        console.log(Number(endTimeCheck));

        if ((Number(endTimeCheck)) > 59) {
            endTime += 40;
        }

        console.log(endTime);

        mtgTime.push(Number(mtgArr[0]))
        mtgEnd.push(endTime);
    }

    console.log("Meeting Times:", mtgTime);
    console.log("Meeting Endings:", mtgEnd);

    let matchingValue = false;
    let conflictCount = 0;
    let conflictDurSingle = 0;
    let conflictDurTotal = 0;

    for (let i = 1; i < mtgTime.length; i++) {
        if (mtgTime[i] < mtgEnd[i - 1]) {
            matchingValue = true;
            conflictCount += 1;
            conflictDurSingle = (mtgEnd[i - 1] - mtgTime[i]);
            conflictDurTotal += conflictDurSingle;
        }
    }

    console.log("Matching?", matchingValue);
    console.log("Conflict Count:", conflictCount);
    console.log("Conflict Duration:", conflictDurTotal);

    if (!matchingValue) {
        console.log("Good");
    } else {
        console.log("conflict", conflictCount, conflictDurTotal);
    }
}

console.log(conflictInfo(meetings)); */

/* testing continues below */

