import axios from "axios";

const login = async (user) => {
    try {
        const { data } = await axios.post(process.env.REACT_APP_API_URL + "/", {
            email: user.email,
            password: user.password
        });

        return data;

    } catch(err) {
        console.log(err.response.data);
        throw err;
    }
}

const signUp = async (user) => {
    try {
        const { data } = await axios.post(process.env.REACT_APP_API_URL + "/cadastro", {
            name: user.name,
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword
        });

        return data;

    } catch(err) {
        console.log(err.response.data);
        throw err;
    }
}

const apiAuth = { login, signUp };
export default apiAuth;