const app = require("express")()
app.get("/", (req, res) => {
    
    res.setHeader('set-cookie', ["setfromserver=1", "jscantseethis =1; httponly"]) //Web server cookie
    res.sendfile('${__dirname}/index.html') //Client set cookie

    app.get("/path1", (req, res) => {
        
        res.send('Sent cookies:${req.headers.cookie}')
    })

})

app.listen(8080, () => console.log("listening on port 8080"))

