import Chat from "./Chat/Chat";
import Sidebar from "./Sidebar/Sidebar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Login/Login";
import { useStateValue } from "./StateProvider";

function App() {
  //BEM naming convention
  // let [user, setUser] = useState("");
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {/* sidebar, chat */}
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/rooms/:roomId" element={<Chat />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
