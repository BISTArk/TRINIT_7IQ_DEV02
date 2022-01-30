import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "../../redux-store/store.js";

const LandingOrg = () => {
  const userInfo = store.getState().signIn.userInfo;
  console.log(userInfo)
  return (
    <>
      {/* <p>hi {userInfo.name}</p> */}

    </>
  );
};
export default LandingOrg;
