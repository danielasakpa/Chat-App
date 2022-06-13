import React from "react";
import { useState } from "react";
import io from "socket.io-client";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const socket = io.connect("https://chatappserver34.run-us-west2.goorm.io");

function App() {
  const [roomJoined, setroomJoined] = useState("");

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={<Home socket={socket} setroomJoined={setroomJoined} />}
          />
          <Route
            path="/chat"
            element={<Chat socket={socket} roomJoined={roomJoined} />}
          />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
