require('dotenv').config()
const express = require('express')
const app =require('./app')
const Port = process.env.PORT || 3000

app.get('/', (req, res)=>{                           // 1. Create a route for the home page
    res.send('Home Page')
})

app.listen(Port, ()=>{                               // 2. Listen to the server
    console.log(`Servert is listening at... ${Port}`)
})