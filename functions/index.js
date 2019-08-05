// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
// const functions = require('firebase-functions');
const express = require('express');
const path = require('path');

const app = express();
const log = console.log
const PORT = 8080;

app.use(express.static(__dirname+'/dist'));

app.get('', (req,res)=>{
    res.sendFile(path.join(__dirname,'dist','index.html'));
})





app.listen(PORT,() => log('Server is on PORT', PORT))
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// })