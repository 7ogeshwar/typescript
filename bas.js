var Student = /** @class */ (function () {
    function Student(name, rollNo, maths, science, social, english) {
        this.name = name;
        this.rollNo = rollNo;
        this.maths = maths;
        this.science = science;
        this.social = social;
        this.english = english;
    }
    Student.prototype.calculateGrade = function () {
        var average = (this.maths + this.science + this.social + this.english) / 4;
        if (average >= 90) {
            return 'A';
        }
        else if (average >= 80) {
            return 'B';
        }
        else if (average >= 70) {
            return 'C';
        }
        else if (average >= 60) {
            return 'D';
        }
        else {
            return 'F';
        }
    };
    return Student;
}());
document.getElementById('calculateButton').addEventListener('click', function () {
    var name = document.getElementById('nameInput').value;
    var rollNo = parseInt(document.getElementById('rollNoInput').value);
    var maths = parseFloat(document.getElementById('mathsInput').value);
    var science = parseFloat(document.getElementById('scienceInput').value);
    var social = parseFloat(document.getElementById('socialInput').value);
    var english = parseFloat(document.getElementById('englishInput').value);
    if (isNaN(rollNo) || isNaN(maths) || isNaN(science) || isNaN(social) || isNaN(english)) {
        alert("Please enter valid numerical values for all subjects and roll number.");
        return;
    }
    var student = new Student(name, rollNo, maths, science, social, english);
    var grade = student.calculateGrade();
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<p>Grade for ".concat(name, " (Roll No: ").concat(rollNo, "): <strong>").concat(grade, "</strong></p>");
});
