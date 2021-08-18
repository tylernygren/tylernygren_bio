const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.set('view engine', 'pug');
// app.use('views', './views');

app.get('/', (req, res) => {
    res.render('home', { title: 'Home', icon: 'home.svg'});
});

exports.app = functions.https.onRequest(app);
