var crypto = require('crypto');
var express = require('express');
var app = express();
var redisvar = process.env.REDIS_URL || "redis://h:p4uj069431mqe8a04m1mk6rniqc@ec2-54-83-9-36.compute-1.amazonaws.com:21039";
var client = require('redis').createClient(redisvar);


// ---------- START CONFIGURATION ----------
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// ------------ END CONFIGURATION ----------


// ------- START PATH CONFIGURATION --------
app.get('/slideshow', function(request, response) {
  var callback = function(err, value) {
  if (err) return response.json({status: false, err: err});
  var json = JSON.parse(value);
  response.json({status: true, message: "also_good_too", value: value, json: json});
  };
  var key = 'key:test';
  client.get(key, callback);
});

app.get('/grandma', function somefunction(request, response) {
  //response.render('pages/index');
  var key = 'key:test';
  var value = {value: Math.random()};
  var callback = function(err, result) {
	if (err) return response.json({status: false, err: err});
    response.json({status: true, message: "all_good", result: result, value: value});
  };
  client.set(key, JSON.stringify(value), callback);
});

/* app.post('/slideshow', function(request, response) {
  console.log(request.body);
  response.json({status: true, params: request.body});
}); */

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
// ------- END PATH CONFIGURATION --------

//display html stuff? idk what this does anymore
/* var http = require('http'),
    fs = require('fs');


fs.readFile('./public/index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8000);
}); */

