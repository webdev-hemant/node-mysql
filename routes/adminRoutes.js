const express = require("express");
const router = express.Router();
const secretController = require("../controller/middlewares/secretMiddleware");
const adminController = require('../controller/admin.controllers')

router.get("/secret", adminController.getSecret);

router.post("/secret", secretController.postMiddleware, adminController.postSecret);

module.exports = router;
