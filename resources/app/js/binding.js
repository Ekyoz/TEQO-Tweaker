const fs = require('fs');

let rawdata = fs.readFileSync('bindings.json');
let student = JSON.parse(rawdata);
console.log(student);