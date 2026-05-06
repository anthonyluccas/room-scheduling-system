const express = require("express");
const router = express.Router();
const autenticar = require("../middlewares/auth");
const salas = require("../models/salas");

router.get("/", autenticar, (req, res) => {
  res.json(salas);
});

module.exports = router;
