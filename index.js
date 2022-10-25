const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;

const courses = require("./data/course.json");

app.get("/", (req, res) => {
  res.send("News API Running");
});

app.get("/course", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log("Ghuri Learning Server running on port:", port);
});
