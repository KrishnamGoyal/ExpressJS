const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

hbs.registerPartials(partialsPath);

app.set("view engine", "hbs"); //To render dynamic pages
app.set("views", templatePath);
app.use(express.static(staticPath)); //To render static html pages

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("*", (req, res) => {
  res.render("404error");
});

// app.get("/", (req, res) => {
//   res.send("Hello from home page");
// });

// app.get("/about", (req, res) => {
//   res.send("Hello from about page");
// });

// app.get("/gallery", (req, res) => {
//   res.send("Hello from gallery page");
// });

// app.get("/contact", (req, res) => {
//   res.send("Hello from contact page");
// });

app.listen(8000, () => {
  console.log("Listening at port 8000");
});
