const md5 = require('md5');
const { v4 } = require('uuid');

const Interval = 1000;

const begin = new Date();

let total = 0;

while ((new Date()) - begin <= Interval){
    v4();
    total++;
}

console.log(total);