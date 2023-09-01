const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  id: Number,
  title: String,
  answers: Object,
  trueAnswer: String,
  description: String,
});

// Создание модели на основе схемы данных
const HardQuestion = mongoose.model("hardquestion", questionSchema);

module.exports = HardQuestion;
