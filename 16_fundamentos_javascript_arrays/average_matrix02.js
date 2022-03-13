const salaJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum,atual) => acum + atual, 0);
    return somaDasNotas/notasDaSala.length;
}

console.log(`Média da sala de JS ${mediaSala(salaJS)}`);
console.log(`Média da sala de Java ${mediaSala(salaJava)}`);
console.log(`Média da sala de Python ${mediaSala(salaPython)}`);

const notas = [10, 6.5, 8, 7];

const media = notas.reduce((acum,atual) => acum + atual, 0)/notas.length;

// const classJS = [7,8,8,7,10,6.5,4,10,7];
// const classJava = [6,5,8,9,5,6];
// const classPython = [7,3.5,8,9.5];

// const classes = [classJS, classJava, classPython];

// // let sumEachClass = 0;
// let sumClasses = 0;
// let averageClasses;
// let bckpClass = [];
// let bckpLength = [];

// for (let i = 0; i < classes.length; i++) {
//     let sumEachClass = 0;

//     for (let j = 0; j < classes[i].length; j++) {
//         sumEachClass += classes[i][j];
//     }
//     bckpLength.push(classes[i].length);
//     // console.log(bckpLength);
//     bckpClass.push(sumEachClass);
//     // bckpClass = bckpClass.push(sumEachClass);
//     sumClasses += sumEachClass;
//     console.log(sumEachClass);
//     console.log(sumClasses);   
// }

// // averageClasses = sumClasses/classes.length;
// // console.log(`The `)

// for (let k = 0; k < classes)


// // averageClasses = sumClasses/
// // console.log(sumClasses);