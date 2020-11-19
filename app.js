var express = require('express'); //express 모듈
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express(); //application 객체
app.use('/public/models',express.static(__dirname+"/public/models"));
app.use('/script',express.static(__dirname+"/script"));
app.use('/known',express.static(__dirname+"/known"));
app.use(bodyParser.urlencoded({extended:false}));
app.locals.pretty=true;

app.get('/',function(req,res){
    fs.readFile('index.html',function(error,data){
        if(error){
            console.log(error);
        }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
        }
    });
});

app.listen(3000,function(){
    console.log('Connected, 3000 port!!!')
})