let student = [
    { name: "Micheal", score: 70, school: 'Wast' },
    { name: "samuel", score: 85, school: 'East' },
    { name: "Lidet", score: 60, school: 'East' },
    { name: "Tomas", score: 40, school: 'Wast' },
    { name: "Mihiret", score: 90, school: 'East' },
    { name: "Adonay", score: 50, school: 'East' },
    { name: "Kidst", score: 80, school: 'Wast' },
    { name: "Antenh", score: 95, school: 'East' },
];
function processStudents(data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase() === 'east') {
            callback(data[i]);
        }
    }
}
processStudents(student, function (obj) {
    if (obj.score > 60) {
        console.log(obj.name + " Passed!")

    } else {
        console.log(obj.name + ' failed!');
    }

});
function studentPassed() {
    let passCount = 0;
    let failCount = 0;

    processStudents(student, function (obj) {
        if (obj.score > 60) {
            passCount++;
        }
        else {
            failCount++;
        }
    });
    console.log(passCount + ' student passed');
    console.log(failCount + ' student failed');
}

studentPassed();