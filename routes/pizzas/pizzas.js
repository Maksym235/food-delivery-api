const express = require("express");
const router = express.Router();
const pizzaControllers = require("../../controllers/pizza-controllers/pizza-controllers");

router.get("/", pizzaControllers.getPizzas);

module.exports = router;
