import React from 'react';
import Register from "./pages/Register"
import Login from "./pages/Login"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Home from "./pages/Home"
import Chat from "./pages/Chat"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
     <Router>
       <Routes>
           <Route path='/register' element={<Register />} />
           <Route path='/login' element={<Login />} />
           <Route path='/' element={<Home />} />
           <Route path='/chat' element={<Chat />} />
       </Routes>
     </Router>
    <ToastContainer />
    </div>
  );
}

export default App;
