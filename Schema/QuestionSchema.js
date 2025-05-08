const mongoose = require("mongoose")

const QuestionSchema = new mongoose.Schema({
    category : String,
    qst : String,
    options1 : String,
    options2 : String,
    options3 :String, 
    options4 :String,
    options4 :String,
    result : String  
})

const modelschema = mongoose.model("Question",QuestionSchema)
module.exports = modelschema;