const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mysql = require("mysql2");
const adminRouter = require("./controller/adminRoutes");
const PORT = process.env.PORT_NUM;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "its working bro!" });
});

app.use("/admin", adminRouter);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
