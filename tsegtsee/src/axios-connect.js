import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://192.168.43.152:5000'
    // baseURL: 'http://beta.empasoft.mn:5000'
    baseURL: 'http://localhost:5000'
});

export default instance;