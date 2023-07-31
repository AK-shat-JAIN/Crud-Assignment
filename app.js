const express = require('express')
const dbConnect = require('./config/dbConnect')
const router = require('./routes/routers')


const app = express()
dbConnect()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

module.exports = app