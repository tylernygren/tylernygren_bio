const functions = require("firebase-functions");
const express = require("express");
const app = express();
const fs = require('fs');

app.set('view engine', 'pug');
// app.use('views', './views');

app.get('/', (req, res) => {
    res.render('home', { title: 'Bio'});
});
app.get('/chiropractic', (req, res) => {
    res.render('chiropractic', { title: 'Chiropractic' });
});

exports.app = functions.https.onRequest(app);
