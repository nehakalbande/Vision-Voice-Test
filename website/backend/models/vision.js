const mongoose = require("mongoose");


const visionSchema = new mongoose.Schema({
    googleId: String,
    question1: Number,
    question2: Number,
    question3: Number,
    question4: Number,
    finalScore: Number,
});

const Vision = mongoose.model('vision', visionSchema);

module.exports = Vision;