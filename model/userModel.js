const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({                          // 1. Create a schema
    name: {
        type: String,
        trim: true,
        required: [true, 'Name is required']
    },
    email:{
        type: String,
        trim: true,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists']
    },
    password:{
        type: String,
        trim: true,
        required: [true, 'Password is required']
    }
})

module.exports = mongoose.model('User', userSchema)                // 2. Create a model from the schema and export it