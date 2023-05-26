const express = require("express");
const router = express.Router();
const isValidBody = require("../../middlewares/isValidBody");
const schemas = require("../../models/Schemas/joiOrderSchema");
const createOrder = require("../../controllers/orders-controllers/orders-controllers");

router.post("/", isValidBody(schemas.orderSchema), createOrder);

module.exports = router;
