const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
const express = require('express');
const app = express();

const cors = require('cors')({origin: true});
app.use(cors);

app.get('/getLinks', async (req, res) => {

  let links = ['a','b','c'];

  return res.json(links);
});

app.post('/setLinks', async (req, res) => {
  return res.send("wip");
});

exports.app = functions.https.onRequest(app);
