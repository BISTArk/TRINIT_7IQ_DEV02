// import {getState} from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register.js";
import Landing from "./pages/Landing/Landing.jsx";
import Regorg from "./pages/RegisterOrg/Regorg.jsx";
import Logorg from "./pages/LoginOrg/Logorg.jsx";
import Loguser from "./pages/LoginUser/Loguser.jsx";
import Reguser from "./pages/RegisterUser/Reguser.jsx";
import Loglanding from "./pages/LoggedLand/Loglanding";
import { useSelector } from "react-redux";
import { signInOrganizer } from "./redux-store/actions/authAction.js";

function App() {
  const { processing,userInfo, error} = useSelector((state) => state.signIn)
  console.log(userInfo);
  return (
    <Router>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route exact path="/" element={!userInfo ? <Landing /> : <Loglanding />} />
          <Route path="/regorg" element={<Regorg />} />
          <Route path="/logorg" element={<Logorg />} />
          <Route path="/loguser" element={<Loguser />} />
          <Route path="/reguser" element={<Reguser />} />
        </Routes>
      </main>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
