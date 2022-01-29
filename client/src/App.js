import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from "./components/Register.js";
import Landing from "./pages/Landing.js";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path='/signup' element={<Register/>} />
          <Route path='/' element={<Landing/>} />
        </Routes>
      </main>
      {/* <Footer/> */}
    </Router>

  );
}

export default App;
