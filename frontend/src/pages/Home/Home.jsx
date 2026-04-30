import Sidebar from "@/components/Sidebar/Sidebar";
import Calendar from "@/components/Calendar/Calendar";
import BookingModal from "@/components/BookingModal/BookingModal";
import { useState } from "react";

function Home() {
  const [modalAberto, setModalAberto] = useState(false);
  const [andar, setAndar] = useState("todos");

  return (
    <div className="flex h-screen bg-[#0f1117]">
      <Sidebar />

      <div className="flex-1">
        <header className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-white font-bold text-2xl">Calendario</h2>

          <select
            value={andar}
            onChange={(e) => setAndar(e.target.value)}
            className="bg-[#1a1d27] text-white rounded-lg p-3 border border-gray-700 cursor-pointer"
          >
            <option value="todos">Todos os Andares</option>
            <option value="1">1º Andar</option>
            <option value="2">2º Andar</option>
            <option value="3">3º Andar</option>
          </select>

          <button
            onClick={() => setModalAberto(true)}
            className="mr-6 bg-[#6366f1] text-white font-bold p-3 rounded-lg hover:bg-[#4f46e5] transition cursor-pointer"
          >
            Novo Agendamento
          </button>
        </header>
        <Calendar />
        {modalAberto && <BookingModal onFechar={() => setModalAberto(false)} />}
      </div>
    </div>
  );
}

export default Home;
