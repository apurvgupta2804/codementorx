var express = require('express');
var path = require('path');
//var xFrameOptions = require('./server/routes/xFrameOptions');
var app = express();
app.use(express.static(path.join(__dirname, './public'), {
  //  setHeaders: xFrameOptions
})); // handles all static resource requests inside public directory


// handles any requests which is not handled by any routes defined above
app.route('/*')
.get(function(req, res) {
  //  xFrameOptions(res, req.url);
    res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = app;