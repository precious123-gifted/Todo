const mongoose = require('mongoose')
require('dotenv').config();
const connectionString = process.env.MONGO_URI

const connectDB = ()=>{

    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(console.log('connected to the database successfully')) 
}

module.exports = connectDB