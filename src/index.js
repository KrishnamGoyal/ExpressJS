const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs"); //Handlebars.js to render dynamic pages
app.set("views", templatePath);
app.use(express.static(staticPath)); //To serve static assets (like CSS, images, or JavaScript files)
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("*", (req, res) => {
  res.render("404error", {
    errorcomment: "Oops, page not found!",
  });
});

// app.get("/", (req, res) => {
//   res.send("Hello from home page");
// });

// app.get("/about", (req, res) => {
//   res.send("Hello from about page");
// });

app.listen(8000, () => {
  console.log("Listening at port 8000");
});
