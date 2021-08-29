const {PythonShell} = require('../../../node_modules/python-shell');
window.$ = window.jQuery = require('../../../node_modules/jquery/dist/jquery.min.js');
//var usb = require('../../../node_modules/usb');
const fs = require('fs')

fs.readFile('changelog.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    $("#changelog").text(data)
  })

checkState(); 

usb.on('attach', function(device) { 
  checkState();
});


usb.on('detach', function(device) { 
  checkState();
});

function checkState(){
  let options = {
    pythonPath: 'scripts/python/python.exe',
  };

  let pyshell = new PythonShell('scripts/ConnectionChecker.py', options);

  pyshell.on('message', function (message) {
    console.log(message);
    if (message.includes("connected")){
      $("#disconnected-img").remove()
      $("#disconnected-txt").remove()
      $("#state").append('<img src="../img/check.png" alt="" style="width: 90px; margin-left: 945px; margin-top: 290px;" id="connected-img">')
      $("#status").append('<p id="connected-txt" style="color: green; font-weight: normal; text-align: center; font-size: 18px;">Connected</p>')
    } else {
      $("#connected-img").remove()
      $("#connected-txt").remove()
      $("#state").append('<img src="../img/bouton-croix.png" alt="" style="width: 90px; margin-left: 945px; margin-top: 290px;" id="disconnected-img">')
      $("#status").append('<p id="disconnected-txt" style="color: red; font-weight: normal; text-align: center; font-size: 18px;">Disconnected</p>')
    }
  }); 
}



