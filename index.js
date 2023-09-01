const express = require("express");
require("./mongodb");
const EasyQuestion = require("./easymodels");
const MediumQuestion = require("./mediummodels");
const HardQuestion = require("./hardmodels");

const app = express();
const port = process.env.PORT;

//весь список легких вопросов
app.get("/questions/easy", async (req, res) => {
  const questions = await EasyQuestion.find({});
  if (questions.length === 0) {
    return res.status(404).json({ error: "Вопросы не найдены" });
  }
  res.send(questions);
});

//весь список средних вопросов
app.get("/questions/medium", async (req, res) => {
  const questions = await MediumQuestion.find({});
  if (questions.length === 0) {
    return res.status(404).json({ error: "Вопросы не найдены" });
  }
  res.send(questions);
});

//весь список сложных вопросов
app.get("/questions/hard", async (req, res) => {
  const questions = await HardQuestion.find({});
  if (questions.length === 0) {
    return res.status(404).json({ error: "Вопросы не найдены" });
  }
  res.send(questions);
});

//получения отдельного легкого вопроса
app.get("/questions/easy/:id", async (req, res) => {
  const questionId = req.params.id;
  const question = await EasyQuestion.findOne({ id: questionId });
  if (!question) {
    return res.status(404).json({ error: "Вопрос не найден" });
  }
  res.send(question);
});

//получения отдельного среднего вопроса
app.get("/questions/medium/:id", async (req, res) => {
  const questionId = req.params.id;
  const question = await MediumQuestion.findOne({ id: questionId });
  if (!question) {
    return res.status(404).json({ error: "Вопрос не найден" });
  }
  res.send(question);
});

//получения отдельного сложного вопроса
app.get("/questions/hard/:id", async (req, res) => {
  const questionId = req.params.id;
  const question = await HardQuestion.findOne({ id: questionId });
  if (!question) {
    return res.status(404).json({ error: "Вопрос не найден" });
  }
  res.send(question);
});

//главная страница сервера
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port || 3000, () => {
  console.log(`Example app listening on port ${port}`);
});
