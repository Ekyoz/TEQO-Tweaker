window.$ = window.jQuery = require('../../../node_modules/jquery/dist/jquery.min.js');
const fs = require('fs')

fs.readFile('changelog.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    $("#changelog").text(data)
  })