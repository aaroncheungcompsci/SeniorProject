var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');
var api = require('./routes/api');
var authenticate = require('./routes/authenticate')(passport);

//this is the mongodb database
const dbRoute = 
    'mongodb+srv://admin:admin@karmecca-ussjs.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(dbRoute, { useNewUrlParser: true})
let db = mongoose.connection
db.once('open', () => console.log('Connected to the database')) 
// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

require('./schema/userSchema.js');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(session({
  secret: 'mysecret'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
//// Initialize Passport
var initPassport = require('./passportInit');
initPassport(passport);

app.use('/api', api);
//app.use('/auth', authenticate);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//initialize passport


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
