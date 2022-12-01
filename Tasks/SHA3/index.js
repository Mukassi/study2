const fs = require('fs')
var sha3_256 = require('js-sha3').sha3_256;

var result = [];

var temp = fs.readdirSync('data','utf-8');
temp.forEach( (file) => {
    result.push(sha3_256(fs.readFileSync('data/'+file)));
});

result.sort();

var str = '';
result.forEach( (hash) => {
    str += hash;
});
var email = 'ilya_mukosey@mail.ru';
str += email;
str = sha3_256(str);
console.log(str);
