const names = ['Ana','Marcos','Maria','Mauro'];
const scores = [7,4.5,8,7.5];

const reproved = names.filter((_student,index) => scores[index] <5);

console.log(reproved);