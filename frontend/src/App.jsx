import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";
import Scheduling from "./pages/Scheduling/Scheduling";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/scheduling" element={<Scheduling />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
