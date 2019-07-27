var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var getWeather = require('../apilibs/weatherChecker');

module.exports = function (app) {
    app.post('/api/:id/validate', jsonParser, (req, res) => {
        res.json({
            'username': req.body.username,
            'password': req.body.password
        });
        console.log(req.body);
    });

    app.post('/apis/:apiname', jsonParser, (req, res) => {
        console.log("Incoming Requests");
        console.log(req.body);
        if (req.params.apiname == "weather") {
            res.status(200);
            var responseToClient = {}
            getWeather(req.body,(weatherDataSrv)=>{
                var result = JSON.parse(weatherDataSrv);
                if (result.cod==="404"){res.json({error:"ERROR: INVALID INPUT"});}else{
                console.log(result);
                console.log(result.weather);
                responseToClient.name= result.name;
                responseToClient.weather=result.weather[0].main;
                responseToClient.description=result.weather[0].description;
                res.json(responseToClient);}
            });
            
        }
        else {
            res.status(400);
        }
    })
}