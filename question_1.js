/* Define an array of numbers (use any random numbers). Write a program in
Javascript to print only the even numbers of the array. Do not use any library
functions, need to do via for loops only */

let array = [1,3,12,22,25,16,3,4,26,7];

for (let i = 0; i < array.length; ++i) { 
    if ((array[i] % 2) === 0) {
        console.log(array[i]);
    }
}