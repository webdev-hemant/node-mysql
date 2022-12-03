const express = require("express");
const router = express.Router();
const secretController = require("./middlewares/secretMiddleware");

router.get("/secret", (req, res) => {
  res.send("its secret");
});

router.post("/secret", secretController.postMiddleware, (req, res) => {
    res.send({message: req.body})
});

module.exports = router;
