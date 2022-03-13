const students = ['João', 'Julia', 'Ana', 'Caio'];
const scores = [10, 8, 7.5, 9];

let listScoresStudents = [students, scores];

const nameScore = (nameStudent) => {
    if (listScoresStudents[0].includes(nameStudent)) {
        index = listScoresStudents[0].indexOf(nameStudent);
        return listScoresStudents[0][index] + ', the average is ' + listScoresStudents[1][index];
    }
    else {
        return ('This is not a student!');
    }
}

console.log(nameScore('Eduarda'));