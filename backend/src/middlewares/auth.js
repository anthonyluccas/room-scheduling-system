const jwt = require("jsonwebtoken");
require("dotenv").config();

function autenticar(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ mensagem: "Token não fornecido" });
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ mensagem: "Token inválido" });
  }
}

module.exports = autenticar;
