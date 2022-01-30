import { useState, useEffect } from "react";
import "./logorg.css";
import { useDispatch, useSelector} from "react-redux";
import { signInOrganizer } from "../../redux-store/actions/authAction.js";
import { useNavigate } from "react-router-dom";
import back from "../../assets/back.png";
import { NavLink as Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function LogOrg() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const { processing,userInfo, error} = useSelector((state) => state.signIn)
  useEffect(() =>{
    if(userInfo){
      history('/orgDashboard', { replace: true })
    }
},[userInfo, history])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name:name, password:password };
    dispatch(signInOrganizer(data));
  };

  return (
    <div className="regpage4">
      <div className="sidepic">
        <Link to="/">
          <img src={back} alt="" className="backImg" />
          </Link>
      </div>
      <div className="mainform">
        <div className="headerReg">
          <h1 className="regorgHead">Admin Login</h1>
        </div>
        <form className="reg-form">
          <div className="form-field-reg">
            <label
              htmlFor="name"
              className="input-text"
              placeholder="Enter organization name"
            >
              Organization Name
            </label>

            <input
              type="text"
              name="orgname"
              placeholder="Enter Organization Name"
              className="RegInput"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div className="form-field-reg">
            <label htmlFor="password" className="input-text ">
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter username"
              className="RegInput"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <span className="already">Register your organization</span>
          <div className="buttonsReg">
            <button className=" createorg" onClick={handleSubmit}>Log In</button>

            <Link to="/regorg">
              <button className="loginorg">Create</button>
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default LogOrg;
