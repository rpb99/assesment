import axios from "axios";
import apiClient from "./apiClient";



const baseURL = "https://api.jokolodang.com/api/v1"

interface IForm {
    email: string
    password: string
}

export const loginUser = (form: IForm) => axios.post(`${baseURL}/authentication/login`, form);
export const logoutUser = () => apiClient.post(`/authentication/logout`);