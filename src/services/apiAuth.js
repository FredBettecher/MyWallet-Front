import axios from "axios";
import { useEffect } from "react";
import dotenv from "dotenv";

dotenv.config();

function login(body) {
    const promise = axios.post(process.env.REACT_APP_API_URL + "/", body);
    return promise;
}

function signUp(body) {
    const promise = axios.post(REACT_APP_API_URL + "/cadastro", body);
    return promise;
}

const apiAuth = { login, signUp };
export default apiAuth;