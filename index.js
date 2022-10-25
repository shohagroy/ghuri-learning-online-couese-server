const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 5000;

const category = require("./data/category.json");
const courses = require("./data/course.json");
const courseDetails = require("./data/courseDetails.json");

app.get("/", (req, res) => {
  res.send(category);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/details/:id", (req, res) => {
  const id = req.params.id;
  const course = courseDetails.find((search) => search.id === id);
  res.send(course);
});

app.listen(port, () => {
  console.log("Ghuri Learning Server running on port:", port);
});
