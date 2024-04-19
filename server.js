const express = require('express');
const path    = require('path');

// import routes
const indexRouter = require('./routes/index');

const app = express();

// static content
const staticFilePath = path.join(__dirname, 'client', 'dist');
const staticFiles    = express.static(staticFilePath);
app.use('/', staticFiles);

// make routes available
app.use('/', indexRouter);

// start server
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port ', server.address().port);
});
