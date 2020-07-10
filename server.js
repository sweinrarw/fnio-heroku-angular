const express = require('express')
const app = express();
const path = require('path');

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.listen(process.env.PORT || 8080);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/dist/fnio-heroku-angular/index.html'));
});
