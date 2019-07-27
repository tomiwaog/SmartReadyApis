var http = require('http');
var licensekey = '6ee71ef2a14fejb07e919646152c6ddd'
function getWeather(incomingRequest, callback) {
  var location = incomingRequest.location;
  var options = {
    host: 'api.openweathermap.org',
    port: 80,
    path: '/data/2.5/weather?q=' + encodeURI(location) + '&appid='+licensekey,
    method: 'GET'
  };

  if (parseInt(location).toString() != 'NaN') options.path = '/data/2.5/weather?zip=' + location + '&appid='+licensekey


  return http.request(options, function (res) {
    // console.log('STATUS: ' + res.statusCode);
    // console.log('HEADERS: ' + JSON.stringify(res.headers));
    var finalData = '';
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      // console.log('BODY: ' + chunk);
      finalData += chunk;
    });
    res.on('end', () => {
      // console.log("*************** It is finished now! ***************");
      console.log(JSON.parse(finalData));
      callback(finalData);
    })
  }).end();
}

// getWeather({ "location": "london" }, (result) => {
//   result = JSON.parse(result);
//   console.log(result.weather);
// });
module.exports = getWeather;