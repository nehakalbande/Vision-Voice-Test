const mongoose = require('mongoose');

const auralSchema = new mongoose.Schema({
    googleId: String,
    question1: Number,
    question2: Number,
    question3: Number,
    question4: Number,
    finalScore: Number,
})

const Aural = mongoose.model("aural", auralSchema)
module.exports = Aural
