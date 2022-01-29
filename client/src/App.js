import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from "./components/Register.js";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      
    </div>
=======
    <Router>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path='/signup' element={<Register/>} />
        </Routes>
      </main>
      {/* <Footer/> */}
    </Router>

>>>>>>> fc442d3cdf2e474b947ae53aebd9ddeba424db4d
  );
}

export default App;
