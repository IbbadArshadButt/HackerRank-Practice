/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
let n = candles.length;
let tallest = candles[0];
let count = 0;
for(let i=1; i<n; i++){
    if(tallest < candles[i]){
        tallest = candles[i];
    }
    else {
        continue;
    }
}
for(let j=0; j<n; j++){
    if(candles[j] == tallest){
    count++;
}
}
return count;
}