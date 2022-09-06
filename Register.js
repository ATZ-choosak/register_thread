const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    name : String,
    subject : String
})

module.exports = mongoose.model("Register" , registerSchema)