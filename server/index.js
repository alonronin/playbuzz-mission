var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.listen(process.env.PORT || 3000, function () {
  console.log('server started at port %s. http://localhost:%s', this.address().port, this.address().port);
});
