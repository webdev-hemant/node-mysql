const express = require("express");
const router = express.Router();
const secretMiddleware = require("../controller/middlewares/secretMiddleware");
const adminController = require('../controller/admin.controllers')

router.get("/secret", adminController.getSecretController);

router.post("/secret", secretMiddleware.postMiddleware, adminController.postSecretController);

router.post("/login", adminController.loginController)

module.exports = router;
