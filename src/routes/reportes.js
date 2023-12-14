const express = require("express");
const controller = require("../controllers/reportes.js");

const router = express.Router();

router.get("/horas_lineadeproduccion", controller.getHoursByProductionLine);
router.get("/test", controller.test);

module.exports = router;