const { v4: uuidv4 } = require("uuid");

const salas = [
  {
    id: uuidv4(),
    descricao: "Sala 101",
    andar: "1º Andar",
    capacidade: 30,
    status: 1,
  },

  {
    id: uuidv4(),
    descricao: "Sala 202",
    andar: "2º Andar",
    capacidade: 25,
    status: 1,
  },

  {
    id: uuidv4(),
    descricao: "Sala 303",
    andar: "3º Andar",
    capacidade: 35,
    status: 1,
  },

  {
    id: uuidv4(),
    descricao: "Sala 104",
    andar: "1º Andar",
    capacidade: 15,
    status: 1,
  },

  {
    id: uuidv4(),
    descricao: "Sala 205",
    andar: "2º Andar",
    capacidade: 20,
    status: 1,
  },
];

module.exports = salas;
