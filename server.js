const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')

db.connect()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.listen(3000, () => {
    console.log('Listening on port 3000')
})