import axios from 'axios'

export default axios.create({
    // baseURL: 'http://localhost:8082',
    baseURL: '',
    timeout: 10000
})