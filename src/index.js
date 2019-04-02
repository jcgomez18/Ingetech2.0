var expess = require('express');
var app = expess();
var path = require('path')


//Setings
app.set('port', 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middlewares

//routes
app.use(require('./routes/index'));

//stactic files
app.use(expess.static(path.join(__dirname,'public')));

app.listen(app.get('port'),() =>{
  console.log('Server on port', app.get('port'));
});


// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
