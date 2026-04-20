import Sidebar from "@/components/Sidebar/Sidebar";
import Calendar from "@/components/Calendar/Calendar";

function Dashboard() {
  return (
    <div className="flex h-screen bg-[#0f1117]">
      <Sidebar />

      <div className="flex-1">
        <header className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-white font-bold text-2xl">Calendario</h2>
          <button className="mr-6 bg-[#6366f1] text-white font-bold p-3 rounded-lg hover:bg-[#4f46e5] transition cursor-pointer">
            Novo Agendamento
          </button>
        </header>
        <Calendar />
      </div>
    </div>
  );
}

export default Dashboard;
