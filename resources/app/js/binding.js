const fs = require('fs');
window.$ = window.jQuery = require('../../../node_modules/jquery/dist/jquery.min.js');


let rawdata = fs.readFileSync('bindings.json');
let student = JSON.parse(rawdata);
console.log(student);

$(document).ready(function(){
    $(".pageloader").addClass('is-active')
    setTimeout(function() {
      $(".pageloader").removeClass('is-active')
    }, 500);
  })