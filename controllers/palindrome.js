var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

module.exports = function(app){

  app.use(bodyParser());

  app.get('/', function(req, resp){
    resp.sendFile('index.html', {root: path.join(__dirname, './../html')});
  });

  app.post('/', function(req, resp){
    if(req.body.palindromeText == ""){
      resp.status(400).send('Blank text');
    }
    else{
      if(checkPalindrom(req.body.palindromeText)){
      resp.status(200).send('It is a palindrome');
      }
      else{
        resp.status(400).send('It is not a palindrome');
      }
    }
  });

  function checkPalindrom(str) {
    str = str.replace(/ /g,'');
    return str == str.split('').reverse().join('');
  }

}