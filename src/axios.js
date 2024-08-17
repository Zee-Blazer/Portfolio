import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:4000/"
    // baseURL: "https://portfolio-server-6dua.onrender.com/"
})