const User = require('../model/userModel')                  // 3. Import the model in the controller

exports.registerUser = async(req, res)=>{                   // 4. Create the controller function for registering a user 
    const {name, email, password} = req.body

    if(!name || !email || !password){                       // 5. Validate the request body
        return res.status(400).json({
            message: "name, email and password are required"
        })
    }

    try {
        const user = await User.create({                    // 6. Create a new user and send a response to the client
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

exports.loginUser = async(req, res)=>{                      // 7. Create the controller function for logging in a user 
    const {email, password} = req.body

    if(!email || !password){                                // 8. Validate the request body 
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

        res.status(200).json({                             // 9. Send a response to the client 
            message: "User logedin successfully"
        })

    } catch (error) {                                      // 10. Handle errors 
        return res.status(400).json({
            message: error.message
        })  
    }
}