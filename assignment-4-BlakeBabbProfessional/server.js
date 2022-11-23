/*
 * Write your server code in this file.
 *
 * name: Blake Babb
 * email: babbb@oregonstate.edu
 */

let http = require("http")
let fs = require("fs")

let pages =  {
    "public/index.html": fs.readFileSync("public/index.html", "utf-8"),
    "public/404.html": fs.readFileSync("public/404.html", "utf-8"),
    "public/benny.jpg": fs.readFileSync("public/benny.jpg", "utf-8"),
    "public/index.js": fs.readFileSync("public/index.js", "utf-8"),
    "public/style.css": fs.readFileSync("public/style.css", "utf-8")
}

let server = http.createServer(function (req, res) {
    res.setHeader("Content-Type", "text/html")
    res.statusCode = 200

    let url = req.url
    if (url === "/") url = "public/index.html"
    url = url.replace("/public", "public")

    let data = pages[url]
    if (data === undefined) {
        res.statusCode = 404
        data = pages["public/404.html"]
    }

    res.write(data.toString())

    res.end()
})

let port = process.env.PORT
if (port === undefined) port = 3000

server.listen(port, function () {
    console.log("Server is listening on port", port + "!")
})