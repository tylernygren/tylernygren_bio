const functions = require("firebase-functions");
const express = require("express");
const app = express();
const fs = require('fs');

app.set('view engine', 'pug');
// app.use('views', './views');

app.get('/', (req, res) => {
    res.render('home', { title: 'Home', icon: 'home'});
});

app.post('/icons', (req, res) => {
    let obj = {}; 
    new Array(req.body).forEach(file => {
        fs.readFile(__dirname + `/icons/${file}.svg`)
            .then(data => {
                obj[file] = { valid: true, string: data }
            })
            .catch(err => {
                console.log(err);
            });
    });
    res.send(JSON.parse(obj));
});

exports.app = functions.https.onRequest(app);
