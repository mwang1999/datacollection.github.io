/*
var http = require('http');
var fs = require('fs');
var PORT = 5000; 

const server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data)
    {
        if (error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
    res.end()
})

server.listen(port, function(error){
    if (error) {
        console.log("Error", error)
    } else {
        console.log("Server is listening on port" + port)
    }
})
*/

/*
var express = require('express');
var cookieParser = require ('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/'. function(req, resp) { 
    resp.cookie('IPCookie', 'response', {maxAge: 6000 seconds, httpOnly: true, secure: process.env.NODE_ENV === 'production'? true: false});
});
*/

const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error')    
        } else {
            res.write(data)
        }
        res.end()
    })
});

server.listen(port, function(error){
    if (error) {
        console.log('Error', error)
    } else {
        console.log('Server is listening on port' + port)
    }
})


