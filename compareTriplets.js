/* Complete the 'compareTriplets' function below.

 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
   a = [1, 2, 3]
   b = [3, 2, 1]
 */

function compareTriplets(a, b) {
let r = [];
let i=0;
r[0]=0;
r[1]=0;
while(i<3){

if(a[i]>b[i]){
    r[0]=r[0]+1;
}
else if(a[i]<b[i]){
    r[1]=r[1]+1;
}
i++;
}
return r;
}

compareTriplets();