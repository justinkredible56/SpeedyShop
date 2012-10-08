/*jshint node:true */

var PORT = process.env.PORT || process.argv[2] || 80;

var express = require('express'),
    app = express();

app.listen(PORT);
console.log('Server running on port:' + PORT);

var indexServices = require('./serverFiles/indexServices')();
var authServices = require('./serverFiles/authServices')();

app.configure(function () {
    app.use(express.logger({format: ':method :status :url'}));
    app.use(express.cookieParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler({ dumpExceptions:true, showStack:true }));
});

// REST Call Routing Registry

// Menu Stuff
app.get('/getItems', indexServices.getItems);
app.get('/getItems/:catID', indexServices.getItems);
app.get('/getCategories/', indexServices.getCategories);

// Authentication Stuff
app.post('/login', authServices.login);
app.post('/logout', authServices.logout);
app.get('/getUserName', authServices.getUserName);
app.post('/signup', authServices.signup);
