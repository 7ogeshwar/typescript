class Student {
    name: string;
    rollNo: number;
    maths: number;
    science: number;
    social: number;
    english: number;

    constructor(name: string, rollNo: number, maths: number, science: number, social: number, english: number) {
        this.name = name;
        this.rollNo = rollNo;
        this.maths = maths;
        this.science = science;
        this.social = social;
        this.english = english;
    }

    calculateGrade(): string {
        const average = (this.maths + this.science + this.social + this.english) / 4;

        if (average >= 90) {
            return 'A';
        } else if (average >= 80) {
            return 'B';
        } else if (average >= 70) {
            return 'C';
        } else if (average >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    }
}

document.getElementById('calculateButton')!.addEventListener('click', function() {
    const name = (document.getElementById('nameInput') as HTMLInputElement).value;
    const rollNo = parseInt((document.getElementById('rollNoInput') as HTMLInputElement).value);
    const maths = parseFloat((document.getElementById('mathsInput') as HTMLInputElement).value);
    const science = parseFloat((document.getElementById('scienceInput') as HTMLInputElement).value);
    const social = parseFloat((document.getElementById('socialInput') as HTMLInputElement).value);
    const english = parseFloat((document.getElementById('englishInput') as HTMLInputElement).value);

    if (isNaN(rollNo) || isNaN(maths) || isNaN(science) || isNaN(social) || isNaN(english)) {
        alert("Please enter valid numerical values for all subjects and roll number.");
        return;
    }

    const student = new Student(name, rollNo, maths, science, social, english);
    const grade = student.calculateGrade();

    const outputDiv = document.getElementById('output')!;
    outputDiv.innerHTML = `<p>Grade for ${name} (Roll No: ${rollNo}): <strong>${grade}</strong></p>`;
});
