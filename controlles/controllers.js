const e = require('express')
const User = require('../model/userModel')

exports.registerUser = async(req, res)=>{
    const {name, email, password} = req.body

    if(!name || !email || !password){
        return res.status(400).json({
            message: "name, email and password are required"
        })
    }

    try {
        const user = await User.create({
            name,
            email,
            password
        })
        res.status(201).json({
            message: "User registered Successfully"
        })
    } catch (error) {
        if(error.code === 11000){
            return res.status(400).json({
                message: "Email already exists"
            })
        }

        console.log(error.message)

        res.send(400).json({
            message: error.message
        })
    }
}

exports.loginUser = async(req, res)=>{
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({
            message: "Email and password are required"
        })
    }

    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({
                message: "User not found"
            })
        }
        if(password !== user.password){
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        res.status(200).json({
            message: "User logedin successfully"
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })  
    }
}