import { useState } from "react";
import "./loguser.css"
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

export default LogUser;
