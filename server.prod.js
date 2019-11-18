const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(bodyParser.json())

// add more endpoints by copying this pattern
app.use(require('./api/routes/list'))
require('./api/routes/list')

app.use(require('./api/routes/login'))
require('./api/routes/login')

//
//
app.get('/*all', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

//
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/woapp/'));

//
//
app.get('/*', function(req,res) {

//
//
res.sendFile(path.join(__dirname+'/dist/woapp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
