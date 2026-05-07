const express = require("express");
const router = express.Router();
const agendamentos = require("../models/agendamentos.js");
const { v4: uuidv4 } = require("uuid");
const autenticar = require("../middlewares/auth.js");

// LISTAR TODOS
router.get("/", autenticar, (req, res) => {
  res.json(agendamentos);
});

// LISTAR POR ID
router.get("/:id", autenticar, (req, res) => {
  const id = req.params.id;
  const agendamento = agendamentos.find((a) => a.id === id);

  if (agendamento) {
    res.json(agendamento);
  } else {
    res.status(404).json({ mensagem: "Não encontrado" });
  }
});

// CRIAR
router.post("/", autenticar, (req, res) => {
  const novoAgendamento = {
    id: uuidv4(),
    salaId: uuidv4(),
    ...req.body,
  };

  agendamentos.push(novoAgendamento);
  res.status(201).json(novoAgendamento);
});

//EDITAR PELO ID
router.put("/:id", autenticar, (req, res) => {
  const id = req.params.id;
  const index = agendamentos.findIndex((a) => a.id === id);

  if (index === -1) {
    res.status(404).json({ mensagem: "Não encontrado" });
  } else {
    agendamentos[index] = {
      ...agendamentos[index],
      ...req.body,
    };
    res.json(agendamentos[index]);
  }
});

// DELETAR PELO ID
router.delete("/:id", autenticar, (req, res) => {
  const id = req.params.id;
  const index = agendamentos.findIndex((a) => a.id === id);

  if (index === -1) {
    res.status(404).json({ mensagem: "Não encontrado" });
  } else {
    agendamentos.splice(index, 1);
    res.json({ mensagem: "Agendamento removido" });
  }
});

module.exports = router;
