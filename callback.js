let student = [
    { name: "Micheal", score: 70, school: 'Wast' },
    { name: "Kamino", score: 85, school: 'East' },
    { name: "Alderaan", score: 60, school: 'East' },
    { name: "Tomas", score: 40, school: 'Wast' },
    { name: "Dagobah", score: 90, school: 'East' },
    { name: "Adonay", score: 50, school: 'East' },
    { name: "Tatooine", score: 80, school: 'Wast' },
    { name: "Endor", score: 95, school: 'East' },
];
const processStudents=(data, callback)=> {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase() === 'east') {
            callback(data[i]);
        }
    }
}
const studentPassed=()=>{
    let passCount = 0;
    let failCount = 0;

    processStudents(student, function (obj) {
        if (obj.score >= 60) {
            passCount++;
        }
        else {
            failCount++;
        }
    });
    return passCount;
}

const checkValidation = ()=>{
    let passedStudents = [];
    let failedStudents = [];
    processStudents(student, function (obj) {
        if (obj.score >= 60) {
            passedStudents.push(obj);
            obj.registrationValid = true;
    
        } else {
            failedStudents.push(obj);
            obj.registrationValid=false;
        }
    
    });
    return passedStudents;
}
const render=(domSelector, element)=>{
    let studentData = checkValidation();
    let totalPassedStudent = studentPassed();
    if(studentData.length=== totalPassedStudent){
        let container = document.querySelector(domSelector);
        let ul = document.createElement(element);
        ul.className = 'student-list';
        studentData.forEach(student=>{
            let s = `
                <li>
                    <h3>Student Name: ${student.name}</h3>
                    <p>Score: ${student.score}</p>
                    <p>School: ${student.school}</p>
                </li>
            `;
            ul.innerHTML += s;
        });
      container.append(ul);
    }
}
class App{
    static init(selector, element){
        render(selector, element);
    }
}
App.init('.student', 'ul');
