const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/login", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send({
    token: "test123",
  });
});

app.listen(4000, () =>
  console.log("API is running on http://localhost:4000/login")
);
