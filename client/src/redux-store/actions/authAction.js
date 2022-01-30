import axios from "axios";
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_ORGANIZER_REQUEST,
  REGISTER_ORGANIZER_SUCCESS,
  REGISTER_ORGANIZER_FAIL,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNOUT_REQUEST,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAIL,
} from "../types";
import { server_base_url } from "../../shared.js";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const signUpUser =
  ({ username, name, password }) =>
  async (dispatch) => {
    console.log("signUpUser");
    try {
      dispatch({
        type: REGISTER_USER_REQUEST,
      });
      const url = `${server_base_url}/api/auth/signupUser`;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        url,
        { username, name, password },
        config
      );
      
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: data,
      });
      toast.success("Successful");
    } catch (error) {
      
      dispatch({
        type: REGISTER_USER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      toast.fail(error.message);
    }
  };

export const signUpOrganizer =
  ({ name, password }) =>
  async (dispatch) => {
    console.log("signUpOrganizer");
    try {
      dispatch({
        type: REGISTER_ORGANIZER_REQUEST,
      });
      const url = `${server_base_url}/api/auth/signupOrganizer`;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log(name,password)
      const { data } = await axios.post(url, { name, password }, config);

      dispatch({
        type: REGISTER_ORGANIZER_SUCCESS,
        payload: data,
      });
      toast.success("Successful");
    window.location.href = "/orgDashboard";

    } catch (error) {
      dispatch({
        type: REGISTER_ORGANIZER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      toast.error(error.response.data.msg);
    }
  };

export const signInOrganizer =
  ({ name, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: SIGNIN_REQUEST,
      });
      const url = `${server_base_url}/api/auth/signinOrganizer`;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log({ name, password });
      const { data } = await axios.post(url, { name, password }, config);

      dispatch({
        type: SIGNIN_SUCCESS,
        payload: data,
      });
      toast.success("Successful");
    window.location.href = "/orgDashboard";

    } catch (error) {
      dispatch({
        type: SIGNIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      toast.error(error.response.data.msg);
    }
  };

export const signInUser =
  ({ name, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: SIGNIN_REQUEST,
      });
      const url = `${server_base_url}/api/auth/signInUser`;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        url,
        { username: name, password },
        config
      );

      dispatch({
        type: SIGNIN_SUCCESS,
        payload: data,
      });
      toast.success("Successful");
    window.location.href = "/orgDashboard";
    } catch (error) {
      dispatch({
        type: SIGNIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      toast.error(error.response.data.msg);
    }
  };
