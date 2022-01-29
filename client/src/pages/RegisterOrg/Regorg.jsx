import { useState } from "react";
import "./regorg.css"

function Regorg() {

    const [name, setname] = useState("");
    const [password, setpassword] = useState("");

  return <div className="regpage">
      <div className="sidepic">

      </div>
      <div className="mainform">
      <h1 className="regorgHead">Create </h1>
      <h1 className="regorgHead">Organization</h1>
          <form className="reg-form">
          <div className="form-field-reg">
                  <label htmlFor="name" className="inputBox" placeholder="Enter organization name">
                    Organization Name *
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
