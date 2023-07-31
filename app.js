const express = require('express')
const dbConnect = require('./config/dbConnect')
const router = require('./routes/routers')

const app = express()                    // 1. Create an express app
dbConnect()                              // 2. Connect to the database
                                         
app.use(express.json())                  // 3. Use express.json() to parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true }))     // 4. Use express.urlencoded() to parse incoming requests with urlencoded payloads

app.use('/', router)                     // 5. Use the router

module.exports = app                       