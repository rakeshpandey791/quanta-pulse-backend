const express = require("express");

const app = express();

app.use("", (req, res) => {
  res.send("Welcome to quanta pulse backend");
});

app.listen(5000, () => {
  console.log("App is listening in port 5000");
});
