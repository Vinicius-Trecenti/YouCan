import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:3000/youcan',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
})

export const useApi = () => ({
    signIn: async (email: string, password: string) => {

        const response = await instance.post('/login ', {
            email,
            password
        })

        console.log(response.data)

        return response.data

    },

    register: async (username: string, email: string, dateBirth: Date, password: string) => {
        try {
            await instance.post('/cadastro', {
                username,
                email,
                dateBirth,
                password
            })

            return true
        } catch (error) {
            console.log("ERRO NO REGISTRO!")
            console.error(error)

            return false
        }
    },

    validateToken: async (token: string) => {
        console.log(token)
        const response = await instance.post('/validar', { token })

        return response.data
    },

    showQuizzes: async () => {
        const response = await instance.get('/quizzes')

        return response.data
    }
})