const studentScores = [35, 92, 47, 80, 89, 34, 45, 99, 61, 72];

for (let i = 0; i < studentScores.length; i++) {
    if (studentScores[i] < 40) {
        studentScores[i] += 20;
    } else if (studentScores[i] > 90) {
        studentScores[i] = 90;
    }
}

const passedStudents = studentScores.filter(score => score >= 50).length;

console.log("Number of students who passed:", passedStudents);
console.log("Final adjusted scores:", studentScores);
