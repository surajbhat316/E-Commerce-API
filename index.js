const express = require('express');
const app = express();
const port = 8000;

app.get('/', function (req, res) {
    return res.json(200, {
        message : "Home Page"
    })
});

app.listen(port, function(err){
    if(err){
        console.log("Error in starting server  "+ err);
        return;
    }
    console.log("Server Started on port "+ port);
})