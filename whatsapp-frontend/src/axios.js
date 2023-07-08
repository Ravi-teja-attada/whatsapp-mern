import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api:5000'
})

export default instance