import axios from 'axios';

const api = axios.create({
   baseUrl: 'http://192.168.0.195:3000'
})

export default api;