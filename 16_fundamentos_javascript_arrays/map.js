// let scores = [10,9,8,7,6];
// let newScores = [];
// const delta = 1; //1 ponto extra

// for (let i = 0; i < scores.length; i++) {
//     let newScore = scores[i] + delta;
//     if (newScore > 10) {
//         newScores[i] = scores[i];
//     }
//     else {
//         newScores[i] = newScore;
//     }
// }

// console.log(newScores);


const scores = [10,9,8,7,6];
const newScores = scores.map( score => score == 10 ? score : ++score);

console.log(newScores);