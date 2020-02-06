//导入File System API
var fs = require('fs');


var data = fs.readFileSync('additional.json'); // Sync表示这项命令执行完之前别的code不会执行
var afinndata = fs.readFileSync('AFFINN-111.json');
//将数据转换为JSON格式
var additional = JSON.parse(data);
var afinn = JSON.parse(afinndata);


console.log('server is starting.')

//导入Express,bodyParse;
var express = require('express');
var bodyParser = require('body-parser')

var app = express();

//make a web server
var server = app.listen(3000,listening);
function listening(){
  console.log("listening...")
}

//host a stactic file.
app.use(express.static('datafolder'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/analyze',analyzeThis);
function analyzeThis(request,response){
  var txt = request.body.text;
  //console.log("text:" + txt);

  var words = txt.split(/\W+/);

  //console.log("words:" + words);

  var totalScore = 0;
  var wordlist = [];

  for (var i = 0; i < words.length; i++){
    var word = words[i];
    var score = 0;
    var found = false;
    if(additional.hasOwnProperty(word)){
      score = Number(additional[word])
      found = true;
    }else if(afinn.hasOwnProperty(word)){
      score = Number(afinn[word]);
      found = true;
    }

    if (found){
      wordlist.push({
        word:word,
        score:score
      });
    }
    totalScore += score;
  }

  var comp = totalScore / words.length;

  var reply = {
    score: totalScore,
    camparative : comp,
    words:wordlist
  }
  response.send(reply);
}

//: indicates search is the route followed by some thing user enter.
app.get('/add/:word/:score?', addWord);
// when receive a request,based on request,send the response.
function addWord(request, response){
  //get the data from website request
  var data = request.params;
  var word = data.word;
  var score = Number(data.score);
  var reply;

  if(!score){
    reply = "Score is required";
  }else{
    //add the add request to server database
    additional[word] = score;
    var data = JSON.stringify(additional,null,2);
    fs.writeFile('additional.json',data,finished);

    function finished(err){
      console.log('all set');
    }
    reply = "thank you for your word"
  }
  response.send(reply);
}

//anthoer route for display all words
app.get('/all', sendAll);

function sendAll(request,response){
  var data = {
    additional: additional,
    afinn:afinn
  }
  response.send(data);
}

//another route for search word.
app.get('/search/:word/',searchWord);

function searchWord(request, response){
  var data = request.params.word;
  var reply;
  if(words[data]){
    reply = {
      status: "Found",
      word: data,
      score: words[data]
    }
  }else{
    reply = {
      status: "not found",
      word: data
    }
  }
  response.send(reply)
}
