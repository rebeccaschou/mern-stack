require("dotenv").config();
const express = require("express");

// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method); // prints requests to terminal
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
