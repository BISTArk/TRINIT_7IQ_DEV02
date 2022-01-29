import { useState } from "react";
import "./loguser.css"
import back from "../../assets/back.png";
import { NavLink as Link } from "react-router-dom";

function LogUser() {

    const [name, setname] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      const re = /^\S+@\S+\.\S+$/;
      if (name.length < 2)
        alert("Name should be a minimum of 2 characters long");
      else if (name.length > 50)
        alert("Name should be a maximum of 50 characters long");
      else if (password.length < 6)
        alert("Password should be a minimum of 6 characters long");
      else {
        const data = {
          Name: name,
          password:password,
        };
        const options = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(data),
        };
  
        const response = await fetch(process.env.REACT_APP_SERVER_BASE_URL +
          "/api/auth/signupOrganizer",
          options
        );
        console.log(response);
        window.location.href = "/login";
      }
    };

  return <div className="regpage">
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
        <span className="alreadyUser">New to Bug tracker?</span>
        <div className="buttonsReg">
               <button className=" createorg">
                          Log In
                      </button>
                    
                    <Link to="/regorg">
                    <button className="loginorg" onClick={handleSubmit}>
                        Create
                    </button>
                    </Link>
                </div>
          </form>
      </div>
  </div>;
}

export default LogUser;
