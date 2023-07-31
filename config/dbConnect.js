const mongoose = require('mongoose')
const dbString = process.env.DB_STRING                           // 1. Get the database string from the .env file

module.exports = dbConnect = async()=>{                          // 2. Create a function to connect to the database and export it 
    await mongoose.connect(dbString)
    .then((conn)=>{                                              // 3. Use .then() to log a message if the connection is successful
        console.log(`Database connected.. at ${conn.connection.host}`)
    }).catch((err)=>{                                            // 4. Use .catch() to log an error if the connection is unsuccessful
        console.log(err)
    })
}

module.exports = dbConnect;                                       // 5. Export the function 