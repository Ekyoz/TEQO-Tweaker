const {PythonShell} = require('../../../node_modules/python-shell');
window.$ = window.jQuery = require('../../../node_modules/jquery/dist/jquery.min.js');
var usb = require('../../../node_modules/usb');


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
      $("#state").append('<img src="../img/check.png" alt="" style="margin-bottom: 80px; margin-top: 60px; height: 130px; width:auto" id="connected-img">')
    } else {
      $("#connected-img").remove()
      $("#state").append('<img src="../img/bouton-croix.png" alt="" style="margin-bottom: 80px; margin-top: 60px;" id="disconnected-img">')
    }
  }); 
}



