import axios from "axios";

const baseURL = "https://api.jokolodang.com/api/v1"
const accessToken = localStorage.getItem('@acc_token')

const axiosInstance = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": "application/json",
    },
});


export default axiosInstance;
