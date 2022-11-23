/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Blake Babb
 * Email: babbb@oregonstate.edu
 */

let path = require('path')
let express = require('express')
let expressHandlebars = require('express-handlebars')
let postData = require('./postData.json')

let app = express()
let port = process.env.PORT || 3000

app.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
    res.status(200).render('index', {
        posts: postData,
        multiPostMode: true
    })
})

app.get('/posts/:n', function (req, res, next) {
    let n = req.params.n
    let post = postData[n]

    if (post) {
        res.status(200).render('index', {
            posts: post,
            multiPostMode: false
        })
    } else next()
})

app.use(express.static('public'), function (req, res, next) {
    next()
})

app.get('*', function (req, res) {
    res.status(404).render('404')
})

app.listen(port, function () {
    console.log("== Server is listening on port", port)
})
