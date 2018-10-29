import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://ireland-project-483e7.firebaseio.com/'
});

export default axiosInstance;