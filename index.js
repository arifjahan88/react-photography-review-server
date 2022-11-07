const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

//MiddleWire
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Volunteer network Server is running");
});

app.listen(port, () => {
  console.log(`Volunteer server is running in port ${port}`);
});
