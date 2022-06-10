import React from 'react';
import Header from "./components/Header"
import Register from "./pages/Register"
import Login from "./pages/Login"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
     <Router>
         <Header />
       <Routes>
           <Route path='/register' element={<Register />} />
           <Route path='/login' element={<Login />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
