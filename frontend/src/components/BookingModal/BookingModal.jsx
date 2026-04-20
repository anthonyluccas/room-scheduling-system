import { X } from "lucide-react";

function BookingModal({ onFechar }) {
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
              className="w-full bg-[#0f1117] text-white rounded-lg p-3 border border-gray-700 mb-4"
              name=""
              id=""
            >
              <option value="">Sala 101</option>
              <option value="">Sala 102</option>
              <option value="">Sala 103</option>
              <option value="">Sala 104</option>
              <option value="">Sala 105</option>
            </select>

            <label className="block text-gray-400 text-sm mb-1" htmlFor="">
              Data
            </label>
            <input
              className="w-full bg-[#0f1117] text-white rounded-lg p-3 border border-gray-700 mb-4"
              type="date"
            ></input>

            <label className="block text-gray-400 text-sm mb-1" htmlFor="">
              Turno
            </label>
            <select
              className="w-full bg-[#0f1117] text-white rounded-lg p-3 border border-gray-700 mb-4"
              name=""
              id=""
            >
              <option value="">Manhã</option>
              <option value="">Tarde</option>
              <option value="">Noite</option>
            </select>

            <label className="block text-gray-400 text-sm mb-1" htmlFor="">
              Horário
            </label>
            <select
              className="w-full bg-[#0f1117] text-white rounded-lg p-3 border border-gray-700 mb-4"
              name=""
              id=""
            >
              <option value="">A</option>
              <option value="">B</option>
              <option value="">C</option>
              <option value="">D</option>
              <option value="">E</option>
              <option value="">F</option>
            </select>

            <label className="block text-gray-400 text-sm mb-1" htmlFor="">
              Descrição
            </label>
            <textarea
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

              <button className="flex-1 p-3 rounded-lg bg-[#6366f1] font-bold text-white transition cursor-pointer hover:bg-[#4f46e5]">
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
