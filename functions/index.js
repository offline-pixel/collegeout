// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
// const functions = require('firebase-functions');
const express = require('express');
const path = require('path');

const app = express();
const log = console.log
const PORT = 8080;

// use static files
app.use(express.static(__dirname+'/dist'));

// use data parsing
app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());

app.post('/email',(req,res)=>{
    //TODO
    //Send email here
    log("DATA:", req.body)
    res.json({message:"message received!!"})
})

app.get('', (req,res)=>{
    res.sendFile(path.join(__dirname,'dist','index.html'));
})





app.listen(PORT,() => log('Server is on PORT', PORT))
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// })