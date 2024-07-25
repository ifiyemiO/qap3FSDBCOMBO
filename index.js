const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Set view engine
app.set("view engine", "ejs");

// Routes
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// Route root
app.get("/", (req, res) => {
  res.render("index");
});

// Starting server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
