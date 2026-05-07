const { v4: uuidv4 } = require("uuid");

const agendamento = [
  {
    id: uuidv4(),
    salaId: uuidv4(),
    data: "2026-04-20",
    turno: 1,
    horario: 4,
    descricao: "Aula de Matematica",
  },

  {
    id: uuidv4(),
    salaId: uuidv4(),
    data: "2026-04-20",
    turno: 1,
    horario: 2,
    descricao: "Aula de quimica",
  },

  {
    id: uuidv4(),
    salaId: uuidv4(),
    data: "2026-04-20",
    turno: 2,
    horario: 4,
    descricao: "Aula de Fisica",
  },
];

module.exports = agendamento;
