const func = require('func');

let minNum = 10;
let maxNum = 50;

console.log(`Losowy numer od ${func.randomNum(minNum, maxNum)[1]} do ${func.randomNum(minNum, maxNum)[2]}: \x1B[32m${func.randomNum(minNum, maxNum)[0]}\x1B[37m`);

let strLen = 7

console.log(`${func.randomStr(strLen)[0]}-cyfrowy ciąg alfanumeryczny: \x1B[31m${func.randomStr(strLen)[1]}\x1B[37m`);

let minArr = 1;
let maxArr = 20;
let lenArr = 5;

console.log(`Losowa ${func.randomArr(minArr, maxArr, lenArr)[2]}-elementowa tablica z przedziału od ${func.randomArr(minArr, maxArr, lenArr)[0]} do ${func.randomArr(minArr, maxArr, lenArr)[1]}: \x1B[34m[${func.randomArr(minArr, maxArr, lenArr)[3]}] \x1B[37m`);