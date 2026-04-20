import Sidebar from "@/components/Sidebar/Sidebar";

function Dashboard() {
  return (
    <div className="flex h-screen bg-[#0f1117]">
      <Sidebar />
      <div className="flex-1"></div>
    </div>
  );
}

export default Dashboard;
