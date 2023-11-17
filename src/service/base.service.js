import axios, * as others from 'axios';

const API_URL = "http://103.50.213.106:9003/api/";
// const API_URL = "http://amitlaptop1:5000/api/"
const client = axios.create({
    baseURL: API_URL
});

const GetServiceClient = () => {
    return client;
}

const GetServiceUrl = () => {
    return API_URL;
}

const NavigateToPath = () => {
    return localStorage.getItem("path");
}


const BaseService = {
    GetServiceClient,
    GetServiceUrl,
    NavigateToPath,
    API_URL
}

export default BaseService;