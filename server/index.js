const functions = require("firebase-functions");
const express = require("express");
const app = express();
const fs = require('fs');

app.set('view engine', 'pug');
// app.use('views', './views');

app.get('/', (req, res) => {
    res.render('home', { title: 'About'});
});

exports.app = functions.https.onRequest(app);
