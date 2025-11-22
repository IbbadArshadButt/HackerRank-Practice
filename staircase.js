/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
        let row = 1;
while(n>0){
    for(let i=n-1; i>0; i--){
        process.stdout.write(' ');
    }
    for(let j=1; j<=row; j++){
        process.stdout.write('#');
    }
    process.stdout.write('\n');
    row++;
    n--;
    // console.log('\n'); it will not be used
}
}

staircase();