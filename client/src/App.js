import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from "./components/Register.js";
import Landing from "./pages/Landing.js";
import Regorg from "./pages/Regorg.js";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path='/signup' element={<Register/>} />
          <Route path='/' element={<Landing/>} />
          <Route path='/regorg' element={<Regorg/>} />
        </Routes>
      </main>
      {/* <Footer/> */}
    </Router>

  );
}

export default App;
