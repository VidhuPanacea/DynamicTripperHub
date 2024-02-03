import axios, * as others from 'axios';

const API_URL = "http://103.50.213.106:9002/tripperhub-api/api/";
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



const BaseService = {
    GetServiceClient,
    GetServiceUrl,
    API_URL
}

export default BaseService;