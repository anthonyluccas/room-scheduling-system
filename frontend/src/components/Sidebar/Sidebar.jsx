import { NavLink } from "react-router-dom";
import { Calendar, DoorOpen, ClipboardList } from "lucide-react";

function Sidebar() {
  return (
    <div className="h-screen bg-[#1a1d27] w-64 p-6 flex flex-col">
      <div>
        <h1 className="text-[#6366f1] font-bold text-xl mb-8">RoomSync</h1>
      </div>
      <nav>
        <NavLink
          className="flex items-center gap-3 text-gray-400 hover:text-white p-3 rounded-lg hover:bg-[#0f1117] transition w-full mb-1"
          to="/dashboard"
        >
          <Calendar size={18} /> Calendario
        </NavLink>
        <NavLink
          className="flex items-center gap-3 text-gray-400 hover:text-white p-3 rounded-lg hover:bg-[#0f1117] transition w-full mb-1"
          to="/dashboard"
        >
          <DoorOpen size={18} /> Salas
        </NavLink>
        <NavLink
          className="flex items-center gap-3 text-gray-400 hover:text-white p-3 rounded-lg hover:bg-[#0f1117] transition w-full mb-1"
          to="/dashboard"
        >
          <ClipboardList size={18} /> Agendamentos
        </NavLink>
      </nav>
    </div>
  );
}
export default Sidebar;
