import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:3000/youcan',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})

export const useApi = () => ({
    signIn: async (email: string, password: string) => {
        return {
            user: { id: 3, username: 'Jonny', email: 'lucas@gmail.com'},
            token: '23525'
        }

        const response = await instance.post('/login ', {
            email,
            password
        })

        return response
    },
    validateToken: async (token: string) => {
        return {
            user: { id: 3, username: 'lucas', email: 'lucas@gmail.com'}
        }

        const response = await instance.post('/validate', token)

        return response
    }
})