const express = require("express");
const router = express.Router();
const getAll = require("../../controllers/allShops-Controllers/allShops-Controllers");

router.get("/", getAll);

module.exports = router;
