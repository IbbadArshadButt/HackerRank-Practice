/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// function miniMaxSum(arr) {
//     // Write your code here
// let size = arr.length;
// let minct = 0;
// let maxct = 0;
// for(let i=0; i<size; i++){
//     for(let j=0; j<size-i-1; j++){
//     if(arr[j]>arr[j+1]){
//         [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//     }
// }
// // console.log(arr);
// }
// for(let j=0; j<size-1; j++){
//     minct += arr[j];
// }
// for(let k=1; k<size; k++){
//     maxct += arr[k];
// }
// console.log(minct, maxct);
// }

function miniMaxSum(arr) {
    // Write your code here
let size = arr.length;
let minct,maxct;
let minVal = arr[0];
let maxVal = arr[0];
let total = 0;
for(let i=0; i<size; i++){
    total += arr[i];
    if(maxVal < arr[i]){
        maxVal = arr[i];
    }
    if(minVal > arr[i]){
        minVal = arr[i];
    }
}
    minct = total - maxVal;
    maxct = total - minVal;
console.log(minct,maxct);
}