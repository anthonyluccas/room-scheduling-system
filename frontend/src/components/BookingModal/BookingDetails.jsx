import axios from "axios";
import { useState } from "react";
import BookingModal from "./BookingModal";

function BookingDetails({ onFechar, agendamento }) {
  const [modalEditar, setModalEditar] = useState(false);
  const turnos = ["", "Manhã", "Tarde", "Noite"];
  const horarios = ["", "A", "B", "C", "D", "E", "F"];

  async function handleExcluir() {
    await axios.delete(`http://localhost:3000/agendamentos/${agendamento.id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    onFechar();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="rounded-2xl p-6 bg-[#1a1d27] w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-bold text-xl">
            Detalhes do Agendamento
          </h2>
        </div>

        <div className="flex flex-col p-1 mb-6 gap-4">
          <p className="text-gray-400 text-sm">
            Data: <span className="text-white">{agendamento.data}</span>
          </p>

          <p className="text-gray-400 text-sm">
            Turno: {""}
            <span className="text-white">{turnos[agendamento.turno]}</span>
          </p>

          <p className="text-gray-400 text-sm">
            Horário: {""}
            <span className="text-white">{horarios[agendamento.horario]}</span>
          </p>

          <p className="text-gray-400 text-sm">
            Descrição:{" "}
            <span className="text-white">{agendamento.descricao}</span>
          </p>
        </div>

        <div className="flex gap-3 mt-2">
          <button
            onClick={onFechar}
            className="flex-1 p-3 rounded-lg bg-[#6366f1] font-bold text-white transition cursor-pointer hover:bg-[#4f46e5]"
          >
            Fechar
          </button>

          <button
            onClick={() => setModalEditar(true)}
            className="flex-1 p-3 rounded-lg bg-[#6366f1] font-bold text-white transition cursor-pointer hover:bg-[#4f46e5]"
          >
            Editar
          </button>

          <button
            onClick={handleExcluir}
            className="flex-1 p-3 rounded-lg bg-red-600 font-bold text-white transition cursor-pointer hover:bg-red-800"
          >
            Excluir
          </button>
        </div>

        {modalEditar && (
          <BookingModal
            onFechar={() => setModalEditar(false)}
            agendamento={agendamento}
          />
        )}
      </div>
    </div>
  );
}
export default BookingDetails;
