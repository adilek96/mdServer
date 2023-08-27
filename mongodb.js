const { connect, connection } = require("mongoose");

connect(
  "mongodb+srv://mindAdmin:SefiHVJMIwyThdKL@mb.pziqwbu.mongodb.net/mindBlower?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => {
    console.log("Успешное подключение к MongoDB");
  })
  .catch((err) => {
    console.error("Ошибка подключения к MongoDB", err);
  });

// Получение экземпляра подключения
const db = connection;

// Обработчик события успешного подключения
db.on("connected", () => {
  console.log("Подключено к MongoDB");
});

// Обработчик события ошибки подключения
db.on("error", (err) => {
  console.error("Ошибка подключения к MongoDB", err);
});
//------------------------------------------------------------
