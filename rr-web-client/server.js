require('zone.js/dist/zone-node');

const express = require('express');
const { ngExpressEngine } = require('@nguniversal/express-engine');

// create express app
const app = express();

//import server module bundle
var { ServerAppModuleNgFactory } = require('./dist-server/main');

//set up engine for .html files
app.engine('html', ngExpressEngine({
    bootstrap: ServerAppModuleNgFactory
}));

app.set('view engine', 'html');
app.set('views', 'dist-browser');

// serve static files
app.use(express.static(__dirname + '/dist-browser', { index: false }));

// return rendered index.html on every request
app.get('*', (req, res) => {
    res.render('index', {req, res});
    console.log(`new GET request at : ${req.originalUrl}`);
});

// Start server and listen
app.listen('3013', () => {
    console.log('Angular server started on port 3013');
});