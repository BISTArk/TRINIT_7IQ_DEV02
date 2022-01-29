import { useState } from "react";
import "./reguser.css"
import back from "../../assets/back.png";
import { NavLink as Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux-store/actions/authAction.js";

function RegUser() {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, username, password };
    dispatch(signUpUser(data));
  };

  return (
    <div className="regpage">
      
      <div className="sidepic">
      <Link to="/">
          <img src={back} alt="" className="backImg" />
          </Link>
      </div>
    <div className="mainform">
      <div className="headerReg">
      <h1 className="regorgHead">Register </h1>
        
        </div>
        <form className="reg-form">
          <div className="form-field-reg">
            <label htmlFor="username" className="input-text">
              Username
            </label>
            <br />
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              className="RegInput"
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>
          <div className="form-field-reg">
            <label
              htmlFor="name"
              className="input-text"
              placeholder="Enter organization name"
            >
              Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
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
              placeholder="Enter password"
              className="RegInput"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <span className="already">Already a Member?</span>
          <div className="buttonsReg">
            <button className="createorg" onClick={handleSubmit}>
              Register
            </button>
            <Link to="/loguser">
              <button className="loginorg">Log In</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegUser;
