const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});



app.use('/employees', require('./employeeRouter'))


app.use((err, req, res, next) =>{
  console.error(err)
  res.status(err.status ?? 500)
  res.json(err.message ?? "Sorry, something went wrong!");
})

app.listen(PORT, () => {
  `Listening on port ${PORT}...`;
});
