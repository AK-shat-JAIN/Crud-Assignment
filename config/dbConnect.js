const mongoose = require('mongoose')
const dbString = process.env.DB_STRING

module.exports = dbConnect = async()=>{
    await mongoose.connect(dbString)
    .then((conn)=>{
        console.log(`Database connected.. at ${conn.connection.host}`)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = dbConnect;