const express = require('express')
const app = express();
const path = require('path');

var distDir = __dirname + "/dist/fnio-heroku-angular";
app.use(express.static(distDir));


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/fnio-heroku-angular/index.html'));
});
app.listen(process.env.PORT || 8080);
