/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
let n = grades.length;
let diff = 0;
let dist = 0;
let newgrades = [];
for(let i=0; i<n; i++){
    if(grades[i] < 38){
        newgrades[i]= grades[i];
    }
    else if(grades[i] % 5 == 0){
        newgrades[i]= grades[i];
    }
    else if(grades[i] % 5 != 0){
        let alt = grades[i];
        diff = alt%5;
        dist = 5-diff;
        if(dist<3){
            newgrades[i]= alt + dist;
        }
        else{
            newgrades[i]= grades[i];
        }
        }
}
    // console.log(newgrades);
    return newgrades;
}
