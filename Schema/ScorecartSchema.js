const mongoose = require("mongoose")

const ScorecartSchema = new mongoose.Schema({
    userId: String, 
    jsscoral : Number,
    reactscore : Number,
})

const modelschema = mongoose.model("Scorecart",ScorecartSchema)
module.exports = modelschema;