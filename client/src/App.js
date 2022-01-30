// import {getState} from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register.js";
import Landing from "./pages/Landing/Landing.jsx";
import Regorg from "./pages/RegisterOrg/Regorg.jsx";
import Logorg from "./pages/LoginOrg/Logorg.jsx";
import Loguser from "./pages/LoginUser/Loguser.jsx";
import AddBug from "./pages/addBug/addBug.jsx";
import Reguser from "./pages/RegisterUser/Reguser.jsx";
<<<<<<< HEAD
import HomeUser from "./pages/UserHome/UserHome";
=======
import LandingOrg from "./pages/LandingOrg/Land.js";
>>>>>>> 4fd5abcd438f107fd133e0ca8af50e52af68d1b6

function App() {
  // console.log(getState())
  return (
    <Router>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Landing />} />
          <Route path="/regorg" element={<Regorg />} />
          <Route path="/logorg" element={<Logorg />} />
          <Route path="/loguser" element={<Loguser />} />
          <Route path="/reguser" element={<Reguser />} />
          <Route path="/addbug" element={<AddBug />} />
<<<<<<< HEAD
          <Route path="/home" element = {<HomeUser/>} />
=======
          <Route path="/orgDashboard" element={<LandingOrg />} />
>>>>>>> 4fd5abcd438f107fd133e0ca8af50e52af68d1b6
        </Routes>
      </main>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
