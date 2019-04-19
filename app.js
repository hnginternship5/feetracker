/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const _ = require('lodash');
const flash = require('connect-flash');
// const session = require('express-session');
// const expressOasGenerator = require('express-oas-generator');
const path = require('path');
// const RedisStore = require('connect-redis')(session);
const passport = require('passport');
var expressValidator = require('express-validator');


const database = require('./config/key').MongoURI;
const indexRoute = require('./routes/index');

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
// app.use(session({
//   store: new RedisStore({
//     url: config.redisStore.url
//   }),
//   secret: config.redisStore.secret,
//   resave: false,
//   saveUninitialized: false
// }));

app.use(passport.initialize());
app.use(passport.session());

// generate api docs (Swagger)
// expressOasGenerator.init(app, function(spec) {
// _.set(spec, 'info.title', 'New Title');
// _.set(spec, "paths['/path'].get.parameters[0].example", 2);
// return spec;
// });

// connect to database
// eslint-disable-next-line no-unused-vars
mongoose.connect(database, { useNewUrlParser: true }, (err, client) => {
  if (err) console.log(err);
  console.log('Mongodb Connection passed');
});
const db = mongoose.connection;
db.once('open', () => console.log('Connected to Mongodb'));
// check if error
db.on('error', console.error.bind(console, 'Mongodb connection error:'));

// API ROUTES
app.use('/', indexRoute);
app.use(expressValidator());

// Express will serve up 404 file if a route is not recognized
app.get('*', (req, res) => {
  res.render(path.resolve(__dirname, 'views', '404'));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
