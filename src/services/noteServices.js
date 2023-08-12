import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://localhost:5000/api`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})


const getNotes = async () => {
    try {
        const response = await apiClient.get('/notes')

        return response.data
    } catch (error) {
        throw new Error( error + "Error de conexion")
    }
}


export { getNotes };
