const mongoose = require("mongoose")

const ScorecartSchema = new mongoose.Schema({
    jsscoral : Number,
    reactscore : Number,
})

const modelschema = mongoose.model("Scorecart",ScorecartSchema)
module.exports = modelschema;