import { X } from "lucide-react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function BookingModal({ onFechar, agendamento }) {
  const [salas, setSalas] = useState([]);
  const [salaId, setSalaId] = useState(agendamento?.salaId || "");
  const [data, setData] = useState(agendamento?.data || "");
  const [turno, setTurno] = useState(agendamento?.turno || "");
  const [horario, setHorario] = useState(agendamento?.horario || "");
  const [descricao, setDescricao] = useState(agendamento?.descricao || "");

  useEffect(() => {
    async function buscarSalas() {
      const resposta = await axios.get("http://localhost:3000/rooms", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setSalas(resposta.data);
    }

    buscarSalas();
  }, []);

  async function handleSalvar() {
    if (agendamento) {
      await axios.put(
        `http://localhost:3000/agendamentos/${agendamento.id}`,
        { salaId, data, turno, horario, descricao },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
    } else {
      await axios.post(
        `http://localhost:3000/agendamentos`,
        { salaId, data, turno, horario, descricao },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
    }
    onFechar();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="rounded-2xl p-6 bg-[#1a1d27] w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-bold text-xl">Novo Agendamento</h2>
          <button
            onClick={onFechar}
            className="text-gray-400 hover:text-white transition cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div>
          <div>
            <label className="block text-gray-400 text-sm mb-1" htmlFor="">
              Sala
            </label>
            <select
              value={salaId}
              onChange={(e) => setSalaId(e.target.value)}
              className="w-full bg-[#0f1117] text-white rounded-lg p-3 border border-gray-700 mb-4"
              name=""
              id=""
            >
              {salas.map((sala) => (
                <option key={sala.id} value={sala.id}>
                  {sala.descricao}
                </option>
              ))}
            </select>

            <label className="block text-gray-400 text-sm mb-1" htmlFor="">
              Data
            </label>
            <input
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="w-full bg-[#0f1117] text-white rounded-lg p-3 border border-gray-700 mb-4"
              type="date"
            ></input>

            <label className="block text-gray-400 text-sm mb-1" htmlFor="">
              Turno
            </label>
            <select
              value={turno}
              onChange={(e) => setTurno(e.target.value)}
              className="w-full bg-[#0f1117] text-white rounded-lg p-3 border border-gray-700 mb-4"
              name=""
              id=""
            >
              <option value="1">Manhã</option>
              <option value="2">Tarde</option>
              <option value="3">Noite</option>
            </select>

            <label className="block text-gray-400 text-sm mb-1" htmlFor="">
              Horário
            </label>
            <select
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              className="w-full bg-[#0f1117] text-white rounded-lg p-3 border border-gray-700 mb-4"
              name=""
              id=""
            >
              <option value="1">A</option>
              <option value="2">B</option>
              <option value="3">C</option>
              <option value="4">D</option>
              <option value="5">E</option>
              <option value="6">F</option>
            </select>

            <label className="block text-gray-400 text-sm mb-1" htmlFor="">
              Descrição
            </label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full bg-[#0f1117] text-white rounded-lg p-3 border border-gray-700 mb-4"
              name=""
              id=""
            ></textarea>

            <div className="flex gap-3 mt-2">
              <button
                onClick={onFechar}
                className="flex-1 p-3 rounded-lg border border-gray-700 text-gray-400 hover:text-white transition cursor-pointer"
              >
                Cancelar
              </button>

              <button
                onClick={handleSalvar}
                className="flex-1 p-3 rounded-lg bg-[#6366f1] font-bold text-white transition cursor-pointer hover:bg-[#4f46e5]"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
