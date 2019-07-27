var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var htmlController = require('./controllers/htmlcontroller');
var apiController = require('./controllers/apicontroller');

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
  console.log('Request URL: ' + req.url);
  next();
})

app.listen(PORT, () => {
  console.log("Express Server running on PORT " + PORT);
});

htmlController(app);
apiController(app);