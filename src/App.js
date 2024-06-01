import Chat from "./Chat/Chat";
import Sidebar from "./Sidebar/Sidebar";
import "./App.css";

function App() {
  //BEM naming convention
  return (
    <div className="app">
      <div className="app_body">
        {/* sidebar, chat */}
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
