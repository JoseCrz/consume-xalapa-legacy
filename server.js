const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./network/routes')
const db = require('./db')

db.connect()

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

routes(app)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log('Listening on port 3000')
})