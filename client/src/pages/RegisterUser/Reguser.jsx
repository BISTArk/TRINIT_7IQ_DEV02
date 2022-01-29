import { useState } from "react";
import "./reguser.css"
import { NavLink as Link } from "react-router-dom";

function RegUser() {

  const [name, setname] = useState("");
  const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      const re = /^\S+@\S+\.\S+$/;
      if (name.length < 2)
        alert("Name should be a minimum of 2 characters long");
      else if (name.length > 50)
      
        alert("Name should be a maximum of 50 characters long");
    else if (username.length < 2)
        alert("Name should be a minimum of 2 characters long");  
      else if (username.length > 50)
      
        alert("Name should be a maximum of 50 characters long");
      else if (password.length < 6)
        alert("Password should be a minimum of 6 characters long");
      else {
        const data = {
          Name: name,
          username:username,
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

      </div>
    <div className="mainform">
      <div className="headerReg">
      <h1 className="regorgHead">Register </h1>
        
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
                  <label htmlFor="name" className="input-text" placeholder="Enter organization name">
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

export default RegUser;
