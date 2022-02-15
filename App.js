import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className="App">
      <Chat socket={socket}/>
    </div>
  );
}

export default App;
