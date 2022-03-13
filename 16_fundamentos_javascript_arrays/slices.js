const students = ['João', 'Julia', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const numList = 2;
let classroom01;
let classroom02;

let numStudents = students.length;
console.log(numStudents)
const idxList = (numStudents/numList);
console.log(idxList);

classroom01 = students.slice(0,idxList);
classroom02 = students.slice(idxList);

console.log(`The students of the classroom 01 are ${classroom01}.`);
console.log(`The students of the classroom 02 are ${classroom02}.`);