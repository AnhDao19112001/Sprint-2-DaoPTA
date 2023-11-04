import axios from "axios";

export const loginUser = async (data) => {
    const result = await axios.post(`http://localhost:8080/api/user/login-by-username`,data)
    return result;
}

export const registerUser = async () => {
    const result = await axios.post(`http://localhost:8080/api/user/register-by-customer`)
    return result;
}