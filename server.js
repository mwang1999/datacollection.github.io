const http = require('http')
const fs = require('fs')
var port = process.env.PORT || 3000;

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
    res.writeHead(200, {'Content-Type': 'text/css' })
    })
});

server.listen(port, function(error){
    if (error) {
        console.log('Error', error)
    } else {
        console.log('Server is listening on port' + port)
    }
})




