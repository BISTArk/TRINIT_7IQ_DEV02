import { useState } from "react";
import "./regorg.css"
import back from "../../assets/back.png";
import { NavLink as Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpOrganizer } from "../../redux-store/actions/authAction.js";


function Regorg() {

    const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(name, password);
      const data = {name,password};
      dispatch(signUpOrganizer(data));
    };

  return <div className="regpage">
      <div className="sidepic">
      <Link to="/">
          <img src={back} alt="" className="backImg" />
          </Link>
      </div>
    <div className="mainform">
      <div className="headerReg">
      <h1 className="regorgHead">Create </h1>
        <h1 className="regorgHead">Organization</h1>
        </div>
          <form className="reg-form">
          <div className="form-field-reg">
                  <label htmlFor="name" className="input-text" placeholder="Enter organization name">
                    Organization Name 
                  </label>
          
                  <input
                    type="text"
                    name="orgname"
                    placeholder="Enter Organization Name"
                    className="RegInput"
                    value={name}
                    onChange={(e) => {
                      setname( e.target.value);
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
        <span className="already">Got an organization?</span>
                <div className="buttonsReg">
                    <button className="createorg" onClick={handleSubmit}>
                        Create
                    </button>
                    <Link to="/logorg">
                      <button className="loginorg">
                          Log In
                      </button>
                    </Link>
                </div>
          </form>
      </div>
  </div>;
}

export default Regorg;
