const express = require("express");
const cors = require("cors");
require("dotenv").config();
const agendamentosRoutes = require("./routes/agendamentos");
const authRoutes = require("./routes/auth");
const autenticar = require("./middlewares/auth");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/agendamentos", agendamentosRoutes);
app.use("/login", authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("deu bom");
});
