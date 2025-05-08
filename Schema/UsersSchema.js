const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username : String,
    email : String,
    number : Number,
    password : String,
    useimage :String 
})

const modelschema = mongoose.model("Userdata",UserSchema)
module.exports = modelschema;

