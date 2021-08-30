const {PythonShell} = require('../../../node_modules/python-shell');
window.$ = window.jQuery = require('../../../node_modules/jquery/dist/jquery.min.js');
var usbDetect = require('../../../node_modules/usb-detection');
const fs = require('fs')

usbDetect.startMonitoring();

fs.readFile('changelog.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    $("#changelog").text(data)
  })

checkState(); 

usbDetect.on('change', function(device) { 
   console.log('add', device); 
   checkState();
  });


function checkState(){
  let options = {
    pythonPath: 'scripts/python/python.exe',
  };

  let pyshell = new PythonShell('scripts/ConnectionChecker.py', options);

  pyshell.on('message', function (message) {
    console.log(message);
    if (message.includes("connected") && $("#connected-img").length == 0){
      $("#disconnected-img").remove()
      $("#disconnected-txt").remove()
      $("#state").append('<img src="../img/check.png" alt="" style="width: 90px; margin-left: 945px; margin-top: 290px;" id="connected-img">')
      $("#status").append('<p id="connected-txt" style="color: green; font-weight: normal; text-align: center; font-size: 18px;">Connected</p>')
    } else if($("#disconnected-img").length == 0){
      $("#connected-img").remove()
      $("#connected-txt").remove()
      $("#state").append('<img src="../img/bouton-croix.png" alt="" style="width: 90px; margin-left: 945px; margin-top: 290px;" id="disconnected-img">')
      $("#status").append('<p id="disconnected-txt" style="color: red; font-weight: normal; text-align: center; font-size: 18px;">Disconnected</p>')
    }
  }); 
}



