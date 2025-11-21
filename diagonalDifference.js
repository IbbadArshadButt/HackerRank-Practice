/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
   let sumDiagonal1=0;
   let sumDiagonal2=0;
   let len = arr.length;
   let dDifference=0;
   for (let i=0; i<len; i++){
    for(let j=0; j<len; j++){
        if(i===j){
            sumDiagonal1=sumDiagonal1+arr[i][j];
        } 
        if(i+j===len-1){
            sumDiagonal2=sumDiagonal2+arr[i][j];
        }
    }
   }
   dDifference=sumDiagonal1-sumDiagonal2;
   return Math.abs(dDifference);
}