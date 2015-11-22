var crypto = require('crypto');
var express = require('express');
var app = express();
var redisvar = process.env.REDIS_URL || "redis://h:p4uj069431mqe8a04m1mk6rniqc@ec2-54-83-9-36.compute-1.amazonaws.com:21039";
var client = require('redis').createClient(redisvar);


// ---------- START CONFIGURATION ----------
app.set('port', (process.env.PORT || 5000));    // default port
app.use(express.static(__dirname + '/public')); // public static file directory
app.set('views', __dirname + '/views');         // HTML templates (not used)
app.set('view engine', 'ejs');                  // Template type (not used)
// ------------ END CONFIGURATION ----------



var uriLogic = {
  /*
    Create a new slide show
  */
  runSlideshow: function(request, response) {
    var entropy = ['slideshow', Math.random()];
    var slideshowId = helperFunction.createSHA1(entropy);
    var keyDefinition = ['careageous', 'slideshow', slideshowId];
    var key = helperFunction.createRedisKey(keyDefinition);
    var value = {slideshowId: slideshowId};
    var callback = function(err, result) {
    if (err) return response.json({status: false, err: err});
      response.json({status: true, message: "all_good", result: result, value: value});
    };
    client.set(key, JSON.stringify(value), callback);

  },
  /*
    View most recent slideshow
  */
  viewSlideshow: function somefunction(request, response) {
    var callback = function(err, value) {
      if (err) return response.json({status: false, err: err});
      var json = JSON.parse(value);
      response.json({status: true, message: "also_good_too", value: value, json: json});
    };
    var key = 'key:test';
    client.get(key, callback);
  }
};

var helperFunction = {
  createRedisKey: function(values) {
    var key = values.join(':');
    console.log('createRedisKey', values, key);
    return key;
  },
  createSHA1: function(entropy) {
    var current_date = (new Date()).valueOf().toString();
    var random = Math.random().toString();
    entropy.push(current_date);
    entropy.push(random);
    var inputStr = entropy.join(':');
    console.log('createSHA1', entropy, inputStr);
    return crypto.createHash('sha1').update(inputStr).digest('hex');
  }
}

// ------- START ROUTE CONFIGURATION --------
app.get ('/slideshow', uriLogic.runSlideshow);
app.post('/slideshow', uriLogic.runSlideshow);
app.get ('/grandma',   uriLogic.viewSlideshow);
// --------- END ROUTE CONFIGURATION --------



// --------------- THE LISTENER -------------
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
// --------------- THE LISTENER -------------

