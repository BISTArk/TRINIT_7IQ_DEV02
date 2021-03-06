import { useState } from "react";
import "./loguser.css"
import back from "../../assets/back.png";
import { NavLink as Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInUser } from "../../redux-store/actions/authAction.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LogUser() {

    const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {name,password};
      dispatch(signInUser(data));
    };

  return <div className="regpage3">
      <div className="sidepic">
      <Link to="/">
          <img src={back} alt="" className="backImg" />
          </Link>
      </div>
    <div className="mainform">
      <div className="headerReg">
      <h1 className="regorgHead">User Login</h1>
       
        </div>
          <form className="reg-form">
          <div className="form-field-reg">
                  <label htmlFor="username" className="input-text" >
                    Username
                  </label>
          <br />
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
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
                    placeholder="Enter Password"
                    className="RegInput"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
        </div>
        <span className="alreadyUser">New to Bug tracker?</span>
        <div className="buttonsReg">
               <button className=" createorg" onClick={handleSubmit}>
                          Log In
                      </button>
                    
                    <Link to="/reguser">
                    <button className="loginorg">
                        Register
                    </button>
                    </Link>
                </div>
          </form>
      </div>
      <ToastContainer autoClose={2000} />
  </div>;
}

export default LogUser;
