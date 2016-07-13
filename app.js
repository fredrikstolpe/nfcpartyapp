var express = require('express'),
  socket_io = require( "socket.io" ),
  path = require('path'),
  favicon = require('serve-favicon'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
	config = require('./config');

mongoose.connect('mongodb://localhost/' + config.db);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected');
});

var app = express();

var io = socket_io();
app.io = io;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Dependencies can be passed to controllers constructors
app.use('/', require('./controllers/index')());
app.use('/api/users', require('./controllers/api/users')());

app.use(require('./middleware/404'));
app.use(require('./middleware/error'));

module.exports = app;
