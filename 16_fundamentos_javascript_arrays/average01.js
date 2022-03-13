const scores = [10, 6, 8, 5.5, 10];
// scores.push(7); //adding a new element (7) to the end of the list
// scores.pop(); //removing the last element of the list


let average;
let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
}

average = sum/scores.length;
console.log(`The average of the scores is ${average}.`);


