const express = require("express");
const router = express.Router();
const burgerControllers = require("../../controllers/burger-controllers/burgers-controllers");

router.get("/", burgerControllers.getAll);

module.exports = router;
