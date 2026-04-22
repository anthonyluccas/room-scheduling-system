const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/", (req, res) => {
  const { usuario, senha } = req.body;

  if (usuario === "admin" && senha === "admin123") {
    const token = jwt.sign({ usuario: usuario }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.json({ token });
  } else {
    res.status(401).json({ mensagem: "Credenciais inválidas" });
  }
});

module.exports = router;
