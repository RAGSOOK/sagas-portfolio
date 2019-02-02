const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

//routes
const projectRouter = require('./routes/projects.router.js');
const tagsRouter = require('./routes/tags.router.js');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//serve statics
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/projects', projectRouter);
app.use('/tags', tagsRouter);


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});