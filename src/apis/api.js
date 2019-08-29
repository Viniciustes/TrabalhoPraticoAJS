import axios from 'axios'

const token = 'MinhaSenhaDeAutenticaçãoAqui'
const url = "http://localhost:5001/"

const api = axios.create({
    baseURL: url,
    headers: { Authorization: `Bearer ${token}` }
})

export default api;