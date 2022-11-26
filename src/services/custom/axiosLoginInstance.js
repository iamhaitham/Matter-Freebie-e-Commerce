import axios from "axios";

export const axiosLoginInstance = axios.create({
    baseURL: 'https://fakestoreapi.com/auth'
});
