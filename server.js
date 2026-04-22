require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

connectToDB().catch(err => {
  console.log("DB init failed, continuing without DB:", err.message);
});

app.get("/", (req, res) => {
  res.json({ message: "Backend is live and healthy!" });
});

module.exports = app;
