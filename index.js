require('dotenv').config()
const express = require('express')
const app =require('./app')
const Port = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send('Home Page')
})

app.listen(Port, ()=>{
    console.log(`Servert is listening at... ${Port}`)
})