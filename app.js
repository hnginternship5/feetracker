const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const expressOasGenerator = require('express-oas-generator');
const path = require('path');

const database = require('./config/key').MongoURI;
var indexRoute = require('./routes/index');

// Set up the app with express
const app = express();

// set up views path
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));

// view engine
app.set('view engine', 'hbs');

// set up morgan
app.use(logger('dev'));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// connect flash
app.use(flash());
app.use(session({ secret: 'dragonbeast4theTrophy', saveUninitialized: false, resave: false }));

// generate api docs (Swagger)
expressOasGenerator.init(app, spec => {
	return spec;
});

// connect to database
mongoose.connect(database, { useNewUrlParser: true }, function(err, client) {
	if (err) console.log(err);
	console.log('Mongodb Connection passed');
});
var db = mongoose.connection;
db.once('open', () => console.log('Connected to Mongodb'));
// check if error
db.on('error', console.error.bind(console, 'Mongodb connection error:'));

// API ROUTES
app.use('/', indexRoute);

// Express will serve up 404 file if a route is not recognized
app.get('*', (req, res) => {
	res.render(path.resolve(__dirname, 'views', '404'));
});


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
