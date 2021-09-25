const {PythonShell} = require('../../../node_modules/python-shell');
window.$ = window.jQuery = require('../../../node_modules/jquery/dist/jquery.min.js');
var usbDetect = require('../../../node_modules/usb-detection');
const fs = require('fs')



$(document).ready(function(){
  $(".pageloader").addClass('is-active')
  setTimeout(function() {
    usbDetect.startMonitoring();
    checkState(); 
    $(".pageloader").removeClass('is-active')
  }, 1000);
})


fs.readFile('changelog.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    $("#changelog").text(data)
  })


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
      $("#state").append('<img src="../img/check.png" alt="" style="width: 90px; margin-left: 945px; margin-top: 290px; opacity: 0; transition: 0.24s" id="connected-img">')
      $("#status").append('<p id="connected-txt" style="color: green; font-weight: normal; text-align: center; font-size: 18px; opacity: 0; transition: 0.24s">Connected</p>')
      $("#connected-img").fadeTo(0.24, 1)
      $("#connected-txt").fadeTo(0.24, 1)
    } else if($("#disconnected-img").length == 0){
      $("#connected-img").remove()
      $("#connected-txt").remove()
      $("#state").append('<img src="../img/bouton-croix.png" alt="" style="width: 90px; margin-left: 945px; margin-top: 290px; opacity: 0; transition: 0.24s" id="disconnected-img">')
      $("#status").append('<p id="disconnected-txt" style="color: red; font-weight: normal; text-align: center; font-size: 18px; opacity: 0; transition: 0.24s">Disconnected</p>')
      $("#disconnected-img").fadeTo(0.24, 1)
      $("#disconnected-txt").fadeTo(0.24, 1)
    }
  }); 
}



