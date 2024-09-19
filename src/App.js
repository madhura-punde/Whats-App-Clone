import Chat from "./Chat/Chat";
import Sidebar from "./Sidebar/Sidebar";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  //BEM naming convention
  return (
    <div className="app">
      <div className="app_body">
        {/* sidebar, chat */}
        <Sidebar />
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/rooms/:roomId" element={<Chat />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
