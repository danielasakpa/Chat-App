import React from 'react';
import Header from "./components/Header"
import Register from "./pages/Register"
import Login from "./pages/Login"
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
           <Route path='/register' element={<>
                                            <Header />
                                            <Register />
                                            </>} />
           <Route path='/login' element={<>
                                            <Header />
                                            <Login />
                                            </>} />
           <Route path='/' element={<Home />} />
           <Route path='/chat' element={<Chat />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
