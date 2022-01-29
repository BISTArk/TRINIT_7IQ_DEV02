import axios from 'axios'
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from "../types";
import {server_base_url} from '../../shared'

export const signUpUser = ({username,email,password}) => async (dispatch) =>{
    try {
        dispatch({
            type:REGISTER_REQUEST,
        })

        const url = `${server_base_url}/api/auth/signup`
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        const {data} = await axios.post(
            url,
            {username,email,password},
            config
        )

        dispatch({
            type:REGISTER_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type:REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message 
                : error.message
        })
    }
}
