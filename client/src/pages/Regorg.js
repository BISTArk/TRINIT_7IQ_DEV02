import { useState } from "react";
import "./global.css"

function Regorg() {

    const [name, setname] = useState("");
    const [password, setpassword] = useState("");

  return <div className="regpage">
      <div className="sidepic">

      </div>
      <div className="mainform">
          <h1>Create Organization</h1>
          <form className="reg-form">
          <div className="form-field-reg">
                  <label htmlFor="name" className="input-text">
                    Name *
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
                    Username *
                  </label>
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
                <div className="form-field-reg">
                    <button className="createorg">
                        Create
                    </button>
                    <button className="loginorg">
                        Log In
                    </button>
                </div>
          </form>
      </div>
  </div>;
}

export default Regorg;
