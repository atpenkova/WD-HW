let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];


// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---
let maxScore = 0
let index = 0 
// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---
function getHighestScoreIndex(scores) {
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= maxScore) {
            maxScore=scores[i];
            index = i;
        }
    }
    return (index)
}
let res = getHighestScoreIndex(scores);
console.log(res)
// expected output
// Maria has the higest score: 6


