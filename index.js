var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 4444));
app.get('/service-worker.js', function(req, res) {
    var options = {
        root: __dirname + '/',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };


    res.sendFile('service-worker.js', options, function(err) {
        if (err) {
            console.log(err);
        }
    });
});

app.get('/nv.js', function(req, res) {
    var options = {
        root: __dirname + '/',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };


    res.sendFile('service-worker.js', options, function(err) {
        if (err) {
            console.log(err);
        }
    });
});

app.get('/:sub/:name', function(req, res) {
    var fileName = req.params.name;
    var sub = req.params.sub||'Home';
    var options = {
        root: __dirname + '/' + sub + '/',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };


    res.sendFile(fileName, options, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});


app.listen(app.get('port'), function() {
    console.log('app at port:- ' + app.get('port'));
});