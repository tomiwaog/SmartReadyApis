var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){
    app.get('/userloginform', function(req,res){
        res.render('index');
      });
      app.post('/form', urlencodedParser, function(req,res){
        res.send('Thank you '+req.body.username + ' Your bad password is '+ req.body.password);
  });

      app.get('/:id', function(req,res){
        res.send('<html><head><link href=assets/css/style.css type=text/css rel=stylesheet /><title>Internal index Param HTML Page</title></head><body>Express Server page with Routing <br />'+'URL is'+ req.url+' and ID is ' + req.params.id+'</body></html>');
      });

      app.get('/details/:id/ok', (req,res)=>{
        res.send('<html><head><link href=assets/css/style.css type=text/css rel=stylesheet /><title>Website Title</title></head><body>Express Server page with Routing <br />'+'URL is'+ req.url+' and ID is ' + req.params.id+'</body></html>');
      });
}