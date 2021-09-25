const fs = require('fs');
window.$ = window.jQuery = require('../../../node_modules/jquery/dist/jquery.min.js');

const fileName = 'bindings.json';


function modifyBinding(profile, bind, newBind){

    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        let bindings = JSON.parse(data);
    
        bindings['profiles'][profile]['bindings'][bind] = newBind
    
        fs.writeFile(fileName, JSON.stringify(bindings, null, 2), function writeJSON(err) {
            if (err) return console.log(err);
          });
    });
}

function modifySetting(profile, setting, newSetting){

    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        let bindings = JSON.parse(data);
    
        bindings['profiles'][profile]['bindings'][bind] = newBinding
    
        fs.writeFile(fileName, JSON.stringify(bindings, null, 2), function writeJSON(err) {
            if (err) return console.log(err);
            console.log('writing to ' + fileName);
          });
    });
}




modifyBinding('default', 'slider_1', 'volume_app')



$(document).ready(function(){
    $(".pageloader").addClass('is-active')
    setTimeout(function() {
      $(".pageloader").removeClass('is-active')
    }, 500);
  })