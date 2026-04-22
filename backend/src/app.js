const express = require("express");
const cors = require("cors");
require("dotenv").config();
const agendamentosRoutes = require("./routes/agendamentos");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/agendamentos", agendamentosRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("deu bom");
});
