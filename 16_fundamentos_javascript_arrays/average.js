const scores = [10, 6.5, 8, 7.5];

let average;
let sum = 0;

for (let i = 0; i < scores.length; i++) {
    // sum = sum + scores[i];
    sum += scores[i];
}

average = sum/scores.length;
console.log(`The average of the scores is ${average}.`);


