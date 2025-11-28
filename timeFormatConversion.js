/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
let smallStringhh = s.slice(0,2);
let smallNumberhh = Number(smallStringhh);

if(smallNumberhh == 12 && s.slice(2,8) == ':00:00' && s.slice(8,10) == 'AM'){
s = '00:00:00';
return s;
}

if(smallNumberhh == 12 && s.slice(2,8) != ':00:00' && s.slice(8,10) == 'AM'){
smallStringhh = '00';
s = smallStringhh.concat(s.slice(2,8));
return s;
}

if(smallNumberhh != 12 && s.slice(8,10) == 'AM'){
s = s.slice(0,8);
return s;
}

if(smallNumberhh == 12 && s.slice(8,10) == 'PM'){
s = s.slice(0,8);
return s;
}

if(smallNumberhh != 12 && s.slice(8,10) == 'PM'){
let newsmallNumberhh = smallNumberhh + 12;
let newsmallstringhh = String(newsmallNumberhh);
let newfullstring = newsmallstringhh.concat(s.slice(2,8));
s = newfullstring;
return s;
}

}
