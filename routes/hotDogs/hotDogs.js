const express = require("express");
const router = express.Router();
const hotDogsControllers = require("../../controllers/hotDogs-controllers/hotDogs-controllers");

router.get("/", hotDogsControllers.getHotDogs);

module.exports = router;
