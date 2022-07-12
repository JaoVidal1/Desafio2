const express = require("express")
const db = require("./config/dbConnect.js")
const routes = require("./routes/index.js")

db.once("open", () => {
    console.log('A conexão foi feita com sucesso!')
})
const app = express();
app.use(express.json())
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
routes(app);
    


module.exports = app 