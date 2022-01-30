import React from 'react';
import { useSelector } from "react-redux"

function Loglanding() {

  const user = useSelector(state=>state.userInfo);

  

  return (<div>
      <div className="title">
        Helo
      </div>
      <button className="report">
          Report A Bug
      </button>
      <div className="assignbugs">

      </div>
      <div className="genbugs">

      </div>
      <button className="signout">SignOut</button>
  </div>);
}

export default Loglanding;
