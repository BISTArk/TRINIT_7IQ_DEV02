import { useState } from "react";
import "./logorg.css";
import { useDispatch } from "react-redux";
import { signInOrganizer } from "../../redux-store/actions/authAction.js";

import { NavLink as Link } from "react-router-dom";

function LogOrg() {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, password };
    dispatch(signInOrganizer(data));
  };

  return (
    <div className="regpage">
      <div className="sidepic"></div>
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
    </div>
  );
}

export default LogOrg;
