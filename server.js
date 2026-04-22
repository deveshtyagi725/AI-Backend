require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

connectToDB().catch(err => {
  console.log("DB init failed, continuing without DB:", err.message);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000")
  setTimeout(() => {
    console.log("DB Connected:", typeof global !== 'undefined' && global.dbConnected !== undefined ? global.dbConnected : 'unknown');
  }, 1000);
});
