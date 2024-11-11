const mongoose = require('mongoose')

const quizScoreSchema = new mongoose.Schema({
  userId: {
    type: String,
    //required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  quizCount: {
    type: Number,
    required: true,
  },
})

const SelectedScore = mongoose.model('SelectedScore', quizScoreSchema)

module.exports = SelectedScore
